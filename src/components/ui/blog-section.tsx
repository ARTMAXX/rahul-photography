import React from "react";
import Link from "next/link";
import { LazyImage } from "./lazy-image";

const blogs = [
	{
		title: "New AI retouching techniques in Photoshop: the 2026 workflow",
		slug: "/blog/ai-photoshop-retouching-techniques",
		description:
			"Adobe has quietly turned Photoshop's retouching stack inside out. The exact AI-first workflow I use now — Generative Fill, the Remove tool, Neural Filters, and where I still reach for a brush.",
		image: "/opt/best shots/Product image/product-watch-luxury.webp",
		createdAt: "2026-08-15",
		author: "Rahul Chanda",
		readTime: "11 min read",
	},
	{
		title: "How AI is changing commercial product photography",
		slug: "/blog/ai-commercial-product-photography",
		description:
			"I have spent the last twelve months integrating AI into every stage of my commercial workflow. Here is what actually works, what is still broken, and why the photographer's judgment matters more than ever.",
		image: "/opt/best shots/Product image/product-molton-brown.webp",
		createdAt: "2026-08-05",
		author: "Rahul Chanda",
		readTime: "8 min read",
	},
	{
		title: "AI video editing tools every creator should know in 2026",
		slug: "/blog/ai-video-editing-tools-2026",
		description:
			"I tested every major AI video editing tool over the last six months. Here is the honest breakdown — no affiliate links, no sponsored takes, just what I use and why.",
		image: "/opt/cinematic-assets/bts-watch-poster.webp",
		createdAt: "2026-07-22",
		author: "Rahul Chanda",
		readTime: "7 min read",
	},
	{
		title: "Why beverage splash photography is harder than it looks",
		slug: "/blog/why-beverage-splash-photography-is-hard",
		description:
			"That single frozen splash — the crown of liquid, the droplets suspended mid-air — is one of the most technically demanding images in commercial photography.",
		image: "/opt/best shots/Beverage images/beverage-macro.webp",
		createdAt: "2026-06-26",
		author: "Rahul Chanda",
		readTime: "5 min read",
	},
	{
		title: "Using generative AI to create product photo backgrounds",
		slug: "/blog/generative-ai-product-backgrounds",
		description:
			"I have replaced seventy percent of my practical set builds with AI-generated backgrounds. Here is the exact workflow, the tools that work, and the products where AI still cannot compete with a real set.",
		image: "/opt/best shots/new-images/new-product-blast.webp",
		createdAt: "2026-06-10",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Three lighting patterns every brand shoot should know",
		slug: "/blog/lighting-patterns-for-product-photography",
		description:
			"Key light, rim light, and negative fill — three tools that build almost any product mood. Here is how I use each one.",
		image: "/opt/best shots/Product image/product-headphone.webp",
		createdAt: "2026-05-30",
		author: "Rahul Chanda",
		readTime: "4 min read",
	},
	{
		title: "AI-powered retouching: faster workflows, same quality",
		slug: "/blog/ai-retouching-workflow",
		description:
			"The exact tools, the exact workflow, and the exact decisions I make at each stage of retouching — from AI first pass to human final review.",
		image: "/opt/best shots/Product image/product-serum.webp",
		createdAt: "2026-05-14",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Shooting footwear: angles that sell",
		slug: "/blog/footwear-photography-angles",
		description:
			"From the three-quarter hero to the sole detail — which footwear angles actually move units in e-commerce.",
		image: "/opt/best shots/mens shoe/shoe-mens-duo.webp",
		createdAt: "2026-04-28",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Video editing with AI: auto-color grading and scene detection",
		slug: "/blog/ai-color-grading-scene-detection",
		description:
			"DaVinci Resolve, Premiere Pro, and CapCut have shipped AI features that genuinely work. Here is which ones I use daily and which ones are still marketing demos.",
		image: "/opt/best shots/ADs/ad-culinary.webp",
		createdAt: "2026-04-15",
		author: "Rahul Chanda",
		readTime: "7 min read",
	},
	{
		title: "Glass, liquid, and light: beverage photography",
		slug: "/blog/beverage-photography-glass",
		description:
			"Backlight, glycerin condensation, and controlled reflections — the techniques that make glass bottles look crystal-clear and impossible to scroll past.",
		image: "/opt/best shots/Beverage images/bev-iced.webp",
		createdAt: "2026-03-24",
		author: "Rahul Chanda",
		readTime: "5 min read",
	},
	{
		title: "AI upscaling and sharpening for e-commerce images",
		slug: "/blog/ai-upscaling-ecommerce",
		description:
			"Topaz Gigapixel, Magnific, and neural upscalers — when AI enlargement helps and when it creates artifacts that kill conversions.",
		image: "/opt/best shots/Product image/product-bodywash.webp",
		createdAt: "2026-03-10",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Color science for e-commerce photography",
		slug: "/blog/color-science-ecommerce",
		description:
			"A color reference card in every setup, repeatable lighting notes, and a pre-delivery review — the three habits that separate professional catalogs from inconsistent photo dumps.",
		image: "/opt/best shots/Food photo/food-biriyani.webp",
		createdAt: "2026-03-08",
		author: "Rahul Chanda",
		readTime: "6 min read",
	},
	{
		title: "Retouching 101: what happens after the shoot",
		slug: "/blog/retouching-101",
		description:
			"Culling, grading, detail retouching, and format delivery — the four stages of a retouching pipeline that produces consistent, professional results.",
		image: "/opt/best shots/ladies shoe/High-end-shoe.webp",
		createdAt: "2026-02-06",
		author: "Rahul Chanda",
		readTime: "7 min read",
	},
];

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-[1600px] px-4 md:px-12 py-24 md:py-32">
			<div className="text-[#e83b2c] text-sm font-medium uppercase tracking-widest">
				Journal
			</div>
			<h1 className="text-3xl md:text-5xl font-serif text-white mt-4 leading-tight">
				Field notes on{" "}
				<span className="italic text-[#e83b2c]">photography</span>.
			</h1>
			<p className="text-white/50 mt-4 max-w-[60ch] leading-relaxed">
				Lighting, styling, retouching, AI tools, and behind-the-scenes
				guides from commercial shoots across Dehradun and beyond.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-14">
				{blogs.map((blog) => (
					<Link
						href={blog.slug}
						key={blog.title}
						className="group border-t border-white/10 pt-6 flex flex-col gap-4"
						data-cursor="pointer"
					>
						<div className="relative aspect-[16/9] overflow-hidden rounded-lg">
							<LazyImage
								src={blog.image}
								fallback="/opt/og-image.jpg"
								inView={true}
								alt={blog.title}
								ratio={16 / 9}
								className="transition-all duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
							<span className="text-[#e83b2c]">{blog.createdAt}</span>
							<span>·</span>
							<span>{blog.readTime}</span>
						</div>
						<h2 className="text-lg font-serif text-white group-hover:text-[#e83b2c] transition-colors duration-300 leading-snug">
							{blog.title}
						</h2>
						<p className="text-white/50 text-sm leading-relaxed line-clamp-3">
							{blog.description}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
