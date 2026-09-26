import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blog-catalog";

export function BlogSection() {
	return (
		<div className="mx-auto w-full max-w-[1600px] px-4 md:px-12 py-24 md:py-32">
			<div className="h-eyebrow">Blog & Field Notes</div>
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