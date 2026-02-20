import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  BarChart3,
  ShoppingCart,
  Sparkles,
  Dumbbell,
  Terminal,
  Brain,
  Palette,
  FileCode,
  CheckCircle2,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  ShoppingCart,
  Sparkles,
  Dumbbell,
  Terminal,
  Brain,
  Palette,
  FileCode,
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Eddie Builds`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const Icon = iconMap[project.icon] || Sparkles;

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto min-h-screen">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      {/* Header */}
      <div className="glass rounded-2xl p-8 md:p-12 mb-8">
        <div className="flex items-start gap-6 mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0`}
          >
            <Icon size={32} className="text-white" />
          </div>
          <div>
            <span className="inline-block text-xs font-medium text-accent-light bg-accent/10 px-3 py-1 rounded-full mb-2">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {project.title}
            </h1>
          </div>
        </div>

        <p className="text-lg text-muted leading-relaxed">
          {project.longDescription}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium">
            <ExternalLink size={18} />
            Live Demo
          </span>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium">
            <Github size={18} />
            Source Code
          </span>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            The Challenge
          </h2>
          <p className="text-muted leading-relaxed">{project.challenge}</p>
        </div>
        <div className="glass rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            The Solution
          </h2>
          <p className="text-muted leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Features */}
      <div className="glass rounded-2xl p-8 mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                className="text-accent-light shrink-0 mt-0.5"
              />
              <span className="text-muted">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="glass rounded-2xl p-8">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm text-muted glass px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
