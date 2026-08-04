import React from "react";
import { LazyImage } from "./lazy-image";

const blogs = [
	{
		title: "How to prepare for a commercial product photoshoot",
		slug: "/blog/preparing-for-a-product-shoot",
		description:
			"A practical checklist for brands — from product prep and props to timelines and usage rights — so your shoot day runs without friction.",
		image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-07-18",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Why beverage splash photography is harder than it looks",
		slug: "/blog/why-beverage-splash-photography-is-hard",
		description:
			"Timing, viscosity, lighting, and a thousand frames for one perfect moment — what actually goes into that hero splash shot.",
		image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-06-26",
		author: "Rahul Chanda",
		readTime: "5 min read",
	},
	{
		title: "Three lighting patterns every brand shoot should know",
		slug: "/blog/lighting-patterns-for-product-photography",
		description:
			"A short field guide to key light, rim light, and negative fill — and how each changes the mood of a product frame.",
		image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-05-30",
		author: "Rahul Chanda",
		readTime: "4 min read",
	},
	{
		title: "The art of food styling for menus",
		slug: "/blog/food-styling-for-menus",
		description:
			"Learn how prop choice, steam, and sauce placement make dishes look as good on camera as they taste at the table.",
		image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-05-14",
		author: "Rahul Chanda",
		readTime: "7 min read",
	},
	{
		title: "Shooting footwear: angles that sell",
		slug: "/blog/footwear-photography-angles",
		description:
			"From the three-quarter hero to the sole detail — which footwear angles actually move units in e-commerce.",
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-04-28",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Behind the scenes: a luxury watch campaign",
		slug: "/blog/luxury-watch-campaign",
		description:
			"Glass, steel, and controlled reflections — a step-by-step look at lighting a hero product with serious precision.",
		image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-04-11",
		author: "Rahul Chanda",
		readTime: "8 min read",
	},
	{
		title: "Glass, liquid, and light: beverage photography",
		slug: "/blog/beverage-photography-glass",
		description:
			"How to shoot glass bottles and liquids so they look crystal-clear, premium, and impossible to scroll past.",
		image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-03-24",
		author: "Rahul Chanda",
		readTime: "5 min read",
	},
	{
		title: "Color science for e-commerce photography",
		slug: "/blog/color-science-ecommerce",
		description:
			"Why consistent color matters more than gear — and how to make sure the image you ship matches the product you sell.",
		image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-03-08",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Dark backgrounds vs white: choosing the right look",
		slug: "/blog/dark-vs-white-backgrounds",
		description:
			"A practical guide to when your product belongs on black glass and when it belongs on pure white.",
		image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-02-20",
		author: "Rahul Chanda",
		readTime: "5 min read",
	},
	{
		title: "Retouching 101: what happens after the shoot",
		slug: "/blog/retouching-101",
		description:
			"From raw files to finals — the retouching pipeline that turns a good frame into a flawless deliverable.",
		image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-02-06",
		author: "Rahul Chanda",
		readTime: "7 min read",
	},
	{
		title: "How to brief a photographer (and get better results)",
		slug: "/blog/how-to-brief-a-photographer",
		description:
			"References, mood, usage, and budget — the five things every good brief contains before the camera ever comes out.",
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-01-22",
		author: "Rahul Chanda",
		readTime: "4 min read",
	},
	{
		title: "Campaign photography: from concept to delivery",
		slug: "/blog/campaign-photography-process",
		description:
			"Discovery, production, and delivery — how a full-scale campaign shoot comes together from first call to final image.",
		image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
		createdAt: "2026-01-10",
		author: "Rahul Chanda",
		readTime: "8 min read",
	},
];

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-5xl grow">
			<div
				aria-hidden
				className="absolute inset-0 isolate contain-strict -z-10 opacity-60"
			>
				<div className="-rotate-45 bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] rounded-full" />
				<div className="-rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 rounded-full" />
			</div>
			<div className="space-y-1 px-4 py-8">
				<h1 className="font-mono text-4xl font-bold tracking-wide">
					Blog
				</h1>
				<p className="text-muted-foreground text-base">
					Field notes on commercial photography — lighting, styling, and
					what goes on behind the camera.
				</p>
			</div>
			<div className="absolute inset-x-0 h-px w-full border-b border-dashed" />
			<div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
				{blogs.map((blog) => (
					<a
						href={blog.slug}
						key={blog.title}
						className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
					>
						<LazyImage
							src={blog.image}
							fallback="https://placehold.co/640x360?text=fallback-image"
							inView={true}
							alt={blog.title}
							ratio={16 / 9}
							className="transition-all duration-500 group-hover:scale-105"
						/>
						<div className="space-y-2 px-2 pb-2">
							<div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
								<p>by {blog.author}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.createdAt}</p>
								<div className="bg-muted-foreground size-1 rounded-full" />
								<p>{blog.readTime}</p>
							</div>
							<h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
								{blog.title}
							</h2>
							<p className="text-muted-foreground line-clamp-3 text-sm">
								{blog.description}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
