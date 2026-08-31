import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogCard {
	title: string;
	slug: string;
	description: string;
	image: string;
	createdAt: string;
	tag: string;
	readTime: string;
}

const blogs: BlogCard[] = [
	{
		title: "Commercial Photo Retouching 101: The Studio Pipeline from RAW to Final Master",
		slug: "/blog/retouching-101",
		description:
			"Culling standards, color balancing, non-destructive cleanup, frequency separation, and multi-format delivery: the step-by-step post-production process for commercial campaigns.",
		image: "/opt/best shots/ladies shoe/High-end-shoe.webp",
		createdAt: "2026-02-06",
		tag: "Guides",
		readTime: "9 min read",
	},
	{
		title: "Generative AI Backgrounds for Product Photography: Studio Lighting & Workflow Guide",
		slug: "/blog/generative-ai-product-backgrounds",
		description:
			"How to combine physical studio key lighting with generative background compositing for e-commerce and lifestyle campaigns — without the artificial cutout look.",
		image: "/opt/best shots/new-images/new-product-blast.webp",
		createdAt: "2026-06-10",
		tag: "AI & Photography",
		readTime: "8 min read",
	},
	{
		title: "AI Retouching in Photoshop: The Practical Studio Workflow & Pipeline",
		slug: "/blog/ai-photoshop-retouching-techniques",
		description:
			"From Photoshop's Remove tool and Generative Fill to multi-stage batch cleanup with Retouch4me and manual finishing — the exact post-production pipeline for commercial work.",
		image: "/opt/best shots/Product image/product-watch-luxury.webp",
		createdAt: "2026-08-15",
		tag: "Retouching",
		readTime: "12 min read",
	},
	{
		title: "How AI is Changing Commercial Product Photography (And What It Cannot Replace)",
		slug: "/blog/ai-commercial-product-photography",
		description:
			"Twelve months of integrating AI tools into commercial shoots across Dehradun and regional brands: what actually accelerates production, where physics still demands a studio, and why art direction matters.",
		image: "/opt/best shots/Product image/product-molton-brown.webp",
		createdAt: "2026-08-05",
		tag: "AI & Photography",
		readTime: "10 min read",
	},
	{
		title: "Why Beverage Splash Photography is Harder Than It Looks: High-Speed Physics & Technique",
		slug: "/blog/why-beverage-splash-photography-is-hard",
		description:
			"High-speed flash duration (t0.1), fluid viscosity, trigger delay, and hundreds of frames for one hero crown — the engineering and lighting behind commercial liquid action.",
		image: "/opt/best shots/Beverage images/beverage-macro.webp",
		createdAt: "2026-06-20",
		tag: "Behind the scenes",
		readTime: "8 min read",
	},
	{
		title: "Essential Studio Lighting Patterns for Commercial Product Photography",
		slug: "/blog/lighting-patterns-for-product-photography",
		description:
			"Key lights, rim highlights, gradient scrims, and negative fill — how to sculpt form, control specular reflections, and create editorial depth for packshots.",
		image: "/opt/best shots/Product image/product-headphone.webp",
		createdAt: "2026-05-27",
		tag: "Technique",
		readTime: "7 min read",
	},
	{
		title: "Footwear Photography Angles That Convert: The E-Commerce Catalog & Campaign Guide",
		slug: "/blog/footwear-photography-angles",
		description:
			"From the three-quarter hero and medial profile to tread macro details — the angle sequence that communicates build quality, reduces return rates, and drives conversions.",
		image: "/opt/best shots/mens shoe/shoe-mens-duo.webp",
		createdAt: "2026-04-28",
		tag: "Technique",
		readTime: "8 min read",
	},
	{
		title: "AI Video Editing for Commercial Campaigns: Production Tools That Actually Work",
		slug: "/blog/ai-video-editing-tools-2026",
		description:
			"A field review of AI video tools for commercial brand content — from Runway Gen-3 and Premiere Pro to DaVinci Resolve color workflows. What saves production hours versus marketing hype.",
		image: "/opt/cinematic-assets/bts-watch-poster.webp",
		createdAt: "2026-07-22",
		tag: "AI & Video",
		readTime: "9 min read",
	},
	{
		title: "AI Color Grading and Scene Detection: Automating Post-Production Consistency",
		slug: "/blog/ai-color-grading-scene-detection",
		description:
			"How neural color matching in DaVinci Resolve and automated scene edit detection in Premiere Pro speed up multi-camera delivery for commercial video campaigns.",
		image: "/opt/best shots/ADs/ad-culinary.webp",
		createdAt: "2026-04-15",
		tag: "AI & Video",
		readTime: "8 min read",
	},
	{
		title: "Photographing Glass, Bottles & Liquids: Reflection Control and Backlighting",
		slug: "/blog/beverage-photography-glass",
		description:
			"Controlling specular reflections, building translucent backlights, and crafting custom condensation formulas for premium beverage and spirits photography.",
		image: "/opt/best shots/Beverage images/bev-iced.webp",
		createdAt: "2026-03-24",
		tag: "Technique",
		readTime: "8 min read",
	},
	{
		title: "AI Upscaling for E-Commerce: When Neural Resampling Helps and When It Kills Trust",
		slug: "/blog/ai-upscaling-ecommerce",
		description:
			"Comparing Topaz Gigapixel, Magnific AI, and optical resolution — understanding marketplace compliance, texture hallucinations, and catalog zoom standards.",
		image: "/opt/best shots/Product image/product-bodywash.webp",
		createdAt: "2026-03-10",
		tag: "AI & Photography",
		readTime: "8 min read",
	},
	{
		title: "Color Accuracy & Science for E-Commerce Photography: Preventing Catalog Return Rates",
		slug: "/blog/color-science-ecommerce",
		description:
			"ColorChecker calibration, repeatable lighting documentation, and display profile management: the quality control pipeline that keeps product colors true to life.",
		image: "/opt/best shots/Food photo/food-biriyani.webp",
		createdAt: "2026-03-08",
		tag: "Guides",
		readTime: "8 min read",
	},
	// --- Orphan blog posts added below ---
	{
		title: "How to Photograph Products for E-Commerce: A Complete Guide for Indian Brands",
		slug: "/blog/how-to-photograph-products-ecommerce",
		description:
			"From camera angles and white backgrounds to lighting setups and post-processing — the complete e-commerce product photography workflow for D2C Indian brands.",
		image: "/opt/best shots/Product image/product-watch-luxury.webp",
		createdAt: "2026-08-22",
		tag: "Guides",
		readTime: "14 min read",
	},
	{
		title: "Product Photography for Small Businesses in India: A Practical Guide",
		slug: "/blog/product-photography-small-business-india",
		description:
			"Affordable studio setups, DIY lighting hacks, and smartphone-to-slr workflows for small Indian brands that need professional-looking product photography on a budget.",
		image: "/opt/best shots/new-images/new-product-blast.webp",
		createdAt: "2026-08-28",
		tag: "Guides",
		readTime: "13 min read",
	},
	{
		title: "Studio Lighting Setups for Product Photography: From Basic to Advanced",
		slug: "/blog/product-photography-lighting-setup",
		description:
			"One-light, two-light, three-light setups — understanding modifier distance, ratio, and quality to achieve anything from clean white backgrounds to dramatic editorial product shots.",
		image: "/opt/best shots/Product image/product-headphone.webp",
		createdAt: "2026-08-25",
		tag: "Technique",
		readTime: "12 min read",
	},
	{
		title: "Food Photography for Restaurants: Menu, Atmosphere & Plate Shots",
		slug: "/blog/food-photography-restaurants",
		description:
			"Restaurant photography for digital menus, social media, and Google Business profiles — the lighting, styling, and camera setup for appetizing food imagery.",
		image: "/opt/best shots/Food photo/food-biriyani.webp",
		createdAt: "2026-08-30",
		tag: "Technique",
		readTime: "16 min read",
	},
	{
		title: "Beverage Photography: Glass & Splash Photography Techniques",
		slug: "/blog/beverage-photography-glass-splash",
		description:
			"High-speed splash photography for beverages — trigger systems, flash duration, exposure settings, and the physics of freezing liquid action at 1/8000s.",
		image: "/opt/best shots/Beverage images/beverage-macro.webp",
		createdAt: "2026-08-20",
		tag: "Behind the scenes",
		readTime: "15 min read",
	},
];

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-[1600px] px-4 md:px-12 py-24 md:py-32">
			<div className="h-eyebrow">Journal & Field Notes</div>
			<h1 className="h-display">
				Field notes on <span className="h-accent">commercial photography</span>.
			</h1>
			<p className="t-lede mt-6">
				Lighting setups, color science, high-speed fluid dynamics, AI post-production workflows, and technical field guides from commercial shoots across Dehradun and regional brand campaigns.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-14">
				{blogs.map((blog) => (
					<Link
						href={blog.slug}
						key={blog.slug}
						className="group border-t border-white/10 pt-6 flex flex-col gap-4"
						data-cursor="pointer"
					>
						<div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white/5">
							<Image
								src={blog.image}
								alt={blog.title}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover transition-all duration-700 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
							<span className="text-[#e83b2c] font-medium">{blog.tag}</span>
							<span>·</span>
							<span>{blog.createdAt}</span>
							<span>·</span>
							<span>{blog.readTime}</span>
						</div>
						<h2 className="h-card group-hover:text-[#e83b2c] transition-colors duration-300">
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
