---
name: markdown-negotiation
description: Request any page as clean markdown for AI agent consumption by sending Accept: text/markdown.
version: 1.0.0
author: Rahul Chanda Photography
---

# markdown-negotiation

Deliver clean, formatting-stripped text directly to agents via HTTP content negotiation.

## What This Skill Does

Any page on `rahulchandaphotography.com` can return a clean Markdown representation instead of dense HTML when the agent sends `Accept: text/markdown` in the request headers.

## How to Use

Send an HTTP `GET` request to any supported page with the `Accept: text/markdown` header:

```http
GET /blog/retouching-101 HTTP/1.1
Host: rahulchandaphotography.com
Accept: text/markdown
```

The server returns:
- `Content-Type: text/markdown; charset=utf-8`
- `X-Markdown-Tokens: <approximate token count>`
- `Vary: Accept`

## Supported URLs

- `https://rahulchandaphotography.com/` — Homepage
- `https://rahulchandaphotography.com/services` — Services
- `https://rahulchandaphotography.com/dehradun` — Local landing page
- `https://rahulchandaphotography.com/gallery` — Portfolio gallery
- `https://rahulchandaphotography.com/about` — About
- `https://rahulchandaphotography.com/contact` — Contact & booking
- `https://rahulchandaphotography.com/faq` — FAQ
- `https://rahulchandaphotography.com/blog` — Blog hub
- `https://rahulchandaphotography.com/blog/{slug}` — Any of the 12 active blog posts

## Fallback

If the path is not supported, the standard HTML response is returned.
