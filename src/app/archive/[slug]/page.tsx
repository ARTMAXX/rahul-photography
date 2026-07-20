import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { ARCHIVE } from "@/data/archive";
import ProjectGallery from "./ProjectGallery";
import type { Metadata } from "next";

// ── Allowed media extensions ──
const MEDIA_EXTS = new Set([
  ".webp", ".jpg", ".jpeg", ".png", ".gif", ".avif",
  ".mp4", ".webm", ".mov",
]);

// ── Generate static params for all projects ──
export async function generateStaticParams() {
  return ARCHIVE.map((p) => ({ slug: p.slug }));
}

// ── Metadata ──
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const project = ARCHIVE.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Rahul Chanda Photography`,
    description: project.desc,
  };
}

// ── Server Component: reads folder, passes to client gallery ──
export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = ARCHIVE.find((p) => p.slug === slug);
  if (!project) notFound();

  // Read all media from the project's folder
  const folderPath = path.join(
    process.cwd(),
    "public",
    "best shots",
    project.folder
  );

  let media: { src: string; type: "image" | "video" }[] = [];

  try {
    const files = fs.readdirSync(folderPath);
    media = files
      .filter((f) => {
        const ext = path.extname(f).toLowerCase();
        return MEDIA_EXTS.has(ext);
      })
      .sort()
      .map((f) => {
        const ext = path.extname(f).toLowerCase();
        return {
          src: `/best shots/${encodeURIComponent(project.folder)}/${encodeURIComponent(f)}`,
          type: ([".mp4", ".webm", ".mov"].includes(ext) ? "video" : "image") as "image" | "video",
        };
      });
  } catch {
    // Folder not found — fall back to just the project image
    media = [{ src: project.img, type: "image" }];
  }

  // Also grab video from same folder if it exists in project
  const projectVideo = project.video
    ? { src: project.video, type: "video" as const }
    : null;

  return <ProjectGallery project={project} media={media} projectVideo={projectVideo} />;
}
