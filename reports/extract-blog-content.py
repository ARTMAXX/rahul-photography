#!/usr/bin/env python3
"""
Better extractor: parse the .tsx files by finding the actual text content
that the browser would render. Uses a smarter JSX-aware approach:
  1. Find template literal text (the actual content arrays)
  2. Extract string literals in array literals like { tier: "X", price: "Y" }
  3. Find <p>, <h2>, <h3>, <h4> direct text and template-literal children
  4. Find <Link> children text
"""
import re
import json
from pathlib import Path

ROOT = Path(r"E:\old data\website data\data\New folder\new-design")
OUT = ROOT / "reports" / "tmp-blog-md"
OUT.mkdir(parents=True, exist_ok=True)


def clean(text: str) -> str:
    """Normalize whitespace and remove React/JSX artifacts."""
    text = re.sub(r"\\'", "'", text)
    text = re.sub(r'\\"', '"', text)
    text = re.sub(r"\\u2014", "—", text)
    text = re.sub(r"\\u2013", "–", text)
    text = re.sub(r"\\u20B9", "₹", text)
    text = re.sub(r"\\u2019", "'", text)
    text = re.sub(r"\\u00d7", "×", text)
    text = re.sub(r"\\u00b7", "·", text)
    text = re.sub(r"\\u00b0", "°", text)
    text = re.sub(r"\\u2192", "→", text)
    text = re.sub(r"\\u00a0", " ", text)
    text = re.sub(r"\\n", "\n", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def extract_string_arrays(src: str) -> list[str]:
    """
    Find all string-literal arrays in the file (the .map() data) and
    also extract from <p>{`...`}</p> and <h2>...<h2> JSX children.
    Returns list of unique text strings.
    """
    texts = []

    # Pattern 1: array literal strings like "Big brands invest ₹50,000..."
    # These are inside .map((point, idx) => (...))
    for m in re.finditer(r'"((?:[^"\\]|\\.)*?)(?<!\\)"', src):
        s = m.group(1)
        # Skip if this looks like a JSX attribute (preceded by :)
        # Skip very short strings
        if len(s) < 8:
            continue
        # Skip if it's a known attribute value
        if re.match(r'^(true|false|\d+|/[a-z]|#\w+|\w+-\w+)$', s):
            continue
        # Skip if it's a relative URL
        if s.startswith("/opt/") or s.startswith("/blog/") or s.startswith("/services") or s.startswith("/about") or s.startswith("/contact") or s.startswith("/gallery") or s.startswith("/dehradun"):
            continue
        # Skip if it's the schema @context URL
        if "schema.org" in s or "w3.org" in s:
            continue
        # Skip absolute URLs
        if s.startswith("http"):
            continue
        # Skip CSS class names
        if re.match(r'^[a-z\-_/\[\]:0-9\s]+$', s) and ' ' not in s and len(s) < 60:
            continue
        # Skip if it looks like Tailwind classes
        if re.search(r'\b(?:flex|grid|p-\d|m-\d|text-\[|bg-\[|border-)\b', s):
            continue
        cleaned = clean(s)
        if len(cleaned) > 12:
            texts.append(cleaned)

    return list(dict.fromkeys(texts))  # dedupe preserving order


def extract_from_tsx(path: Path) -> dict:
    src = path.read_text(encoding="utf-8")
    title_m = re.search(r'title:\s*"([^"]+)"', src)
    desc_m = re.search(r'description:\s*"([^"]+)"', src)
    date_m = re.search(r'datePublished:\s*"([^"]+)"', src)
    h1_m = re.search(r'<h1[^>]*>([^<]+)</h1>', src)
    has_blogposting = '"@type": "BlogPosting"' in src or '"@type":"BlogPosting"' in src
    has_faq = '"@type": "FAQPage"' in src or "FAQPage" in src
    has_breadcrumb = '"@type": "BreadcrumbList"' in src
    has_twitter = "twitter:card" in src
    has_main_entity = "mainEntityOfPage" in src
    internal_links = re.findall(r'href="(/[^"#?]*)"', src)
    internal_links = [l for l in internal_links if not l.startswith("/_next") and not l.startswith("/api") and not l.startswith("/opt/")]
    external_links = re.findall(r'href="(https?://[^"]+)"', src)
    image_count = len(re.findall(r'<img\b', src)) + len(re.findall(r'src="/opt/', src))
    h2_count = len(re.findall(r'<h2\b', src))
    h3_count = len(re.findall(r'<h3\b', src))

    # Now extract the actual narrative text
    texts = extract_string_arrays(src)

    # Also extract h2/h3 heading text from JSX
    for m in re.finditer(r'<h2[^>]*>([^<]+)</h2>', src):
        texts.insert(0, "## " + clean(m.group(1)))
    for m in re.finditer(r'<h3[^>]*>([^<]+)</h3>', src):
        texts.insert(0, "### " + clean(m.group(1)))
    for m in re.finditer(r'<h4[^>]*>([^<]+)</h4>', src):
        texts.insert(0, "#### " + clean(m.group(1)))

    # Also extract paragraph text from <p className=...>...content...</p>
    # Sometimes the content is a template like {`text`}
    for m in re.finditer(r'<p[^>]*>\{`([^`]+)`\}</p>', src):
        texts.append(clean(m.group(1)))

    body = "\n\n".join(t for t in texts if t)
    word_count = len(body.split())

    return {
        "title": title_m.group(1) if title_m else (h1_m.group(1).strip() if h1_m else path.parent.name),
        "h1": h1_m.group(1).strip() if h1_m else "",
        "description": desc_m.group(1) if desc_m else "",
        "datePublished": date_m.group(1) if date_m else "",
        "has_blogposting": has_blogposting,
        "has_faq": has_faq,
        "has_breadcrumb": has_breadcrumb,
        "has_twitter": has_twitter,
        "has_main_entity": has_main_entity,
        "internal_links": sorted(set(internal_links)),
        "external_links": external_links,
        "image_count": image_count,
        "h2_count": h2_count,
        "h3_count": h3_count,
        "body": body,
        "word_count": word_count,
    }


def build_md(slug: str, data: dict) -> str:
    md = f"""---
title: "{data['title']}"
description: "{data['description']}"
datePublished: "{data['datePublished']}"
slug: "{slug}"
author: "Rahul Chanda"
---

# {data['h1'] or data['title']}

{data['description']}

{data['body']}

---
<!-- h2_count: {data['h2_count']}, h3_count: {data['h3_count']} -->
<!-- internal_links: {len(data['internal_links'])}, external_links: {len(data['external_links'])} -->
<!-- image_count: {data['image_count']}, word_count: {data['word_count']} -->
<!-- schema: blogposting={data['has_blogposting']}, faq={data['has_faq']}, breadcrumb={data['has_breadcrumb']}, twitter={data['has_twitter']}, main_entity={data['has_main_entity']} -->
"""
    return md


# 5 standalone posts
standalone = [
    "product-photography-small-business-india",
    "product-photography-lighting-setup",
    "how-to-photograph-products-ecommerce",
    "food-photography-restaurants",
    "beverage-photography-glass-splash",
]

print("=" * 70)
print("STANDALONE POSTS")
print("=" * 70)
for slug in standalone:
    p = ROOT / "src" / "app" / "blog" / slug / "page.tsx"
    if not p.exists():
        continue
    data = extract_from_tsx(p)
    out = OUT / f"{slug}.md"
    out.write_text(build_md(slug, data), encoding="utf-8")
    print(f"  {slug}")
    print(f"    words={data['word_count']:4d}  H2={data['h2_count']}  H3={data['h3_count']}  imgs={data['image_count']}  inlinks={len(data['internal_links'])}  exlinks={len(data['external_links'])}")
    print(f"    schema: bp={data['has_blogposting']} faq={data['has_faq']} bc={data['has_breadcrumb']} tw={data['has_twitter']} me={data['has_main_entity']}")

# 12 dynamic [slug] posts — extract from posts array
print()
print("=" * 70)
print("DYNAMIC [slug] POSTS (from posts array)")
print("=" * 70)
dynamic_file = ROOT / "src" / "app" / "blog" / "[slug]" / "page.tsx"
src = dynamic_file.read_text(encoding="utf-8")
date_map_src = (ROOT / "src" / "lib" / "blog-posts.ts").read_text(encoding="utf-8")

# Each post is a top-level object in the array. Split by "  }," followed by a new entry
# Better: find each "  { ... }," block that contains a slug: "..."
posts = []
i = 0
while i < len(src):
    start = src.find("{", i)
    if start < 0:
        break
    # Find matching close
    depth = 0
    j = start
    in_str = None
    escape = False
    while j < len(src):
        c = src[j]
        if escape:
            escape = False
        elif c == "\\":
            escape = True
        elif in_str:
            if c == in_str:
                in_str = None
        elif c in ('"', "'", "`"):
            in_str = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                # Found end of object
                block = src[start:j+1]
                if re.search(r'slug:\s*"([^"]+)"', block):
                    posts.append(block)
                i = j + 1
                break
        j += 1
    else:
        break

print(f"  Found {len(posts)} post objects in array")

for post_src in posts:
    slug_m = re.search(r'slug:\s*"([^"]+)"', post_src)
    if not slug_m:
        continue
    slug = slug_m.group(1)
    title_m = re.search(r'title:\s*"([^"]+)"', post_src)
    seo_title_m = re.search(r'seoTitle:\s*"([^"]+)"', post_src)
    excerpt_m = re.search(r'excerpt:\s*"((?:[^"\\]|\\.)*)"', post_src)
    tag_m = re.search(r'tag:\s*"([^"]+)"', post_src)
    date_m = re.search(rf'"{re.escape(slug)}":\s*"([^"]+)"', date_map_src)
    read_m = re.search(r'read:\s*"([^"]+)"', post_src)

    title = title_m.group(1) if title_m else slug
    seo_title = seo_title_m.group(1) if seo_title_m else title
    excerpt = clean(excerpt_m.group(1)) if excerpt_m else ""
    tag = tag_m.group(1) if tag_m else ""
    date = date_m.group(1) if date_m else ""
    read = read_m.group(1) if read_m else ""

    # Extract body array
    body_m = re.search(r'body:\s*\[([\s\S]*?)\]\s*,\s*\}', post_src)
    body_items = []
    if body_m:
        body_raw = body_m.group(1)
        # Each body item is a quoted string, possibly with escaped quotes
        for s in re.finditer(r'"((?:[^"\\]|\\.)*)"', body_raw):
            body_items.append(clean(s.group(1)))

    # Build body markdown
    body_md = ""
    for item in body_items:
        if item.startswith("## "):
            body_md += f"\n\n## {item[3:]}\n\n"
        elif item.startswith("### "):
            body_md += f"\n\n### {item[4:]}\n\n"
        elif item == "":
            body_md += "\n\n"
        else:
            body_md += f"{item}\n\n"

    word_count = len(body_md.split())
    h2_count = sum(1 for i in body_items if i.startswith("## "))
    h3_count = sum(1 for i in body_items if i.startswith("### "))
    internal_links = re.findall(r'\]\((/[^)]+)\)', body_md)
    internal_links = [l for l in internal_links if not l.startswith("/_next")]
    image_count = 0  # dynamic posts have no inline images

    md = f"""---
title: "{title}"
seoTitle: "{seo_title}"
description: "{excerpt}"
datePublished: "{date}"
read: "{read}"
tag: "{tag}"
slug: "{slug}"
author: "Rahul Chanda"
---

# {title}

{excerpt}

{body_md}

---
<!-- h2_count: {h2_count}, h3_count: {h3_count} -->
<!-- internal_links: {len(internal_links)} -->
<!-- image_count: {image_count}, word_count: {word_count} -->
<!-- schema: blogposting=True (via generateBlogPostSchema), faq=False, breadcrumb=True, twitter=False, main_entity=True -->
"""
    out = OUT / f"{slug}.md"
    out.write_text(md, encoding="utf-8")
    print(f"  {slug}: words={word_count:4d}  H2={h2_count}  H3={h3_count}  inlinks={len(internal_links)}")

print()
print(f"Wrote {len(list(OUT.glob('*.md')))} markdown files to {OUT}")
