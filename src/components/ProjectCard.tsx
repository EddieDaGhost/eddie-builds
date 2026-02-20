"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  ShoppingCart,
  Sparkles,
  Dumbbell,
  Terminal,
  Brain,
  Palette,
  FileCode,
} from "lucide-react";
import type { Project } from "@/lib/projects";

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

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="glass glass-hover rounded-2xl p-6 h-full transition-all duration-300 group">
          {/* Icon header with gradient */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon size={24} className="text-white" />
          </div>

          {/* Category badge */}
          <span className="inline-block text-xs font-medium text-accent-light bg-accent/10 px-3 py-1 rounded-full mb-3">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted bg-white/5 px-2 py-1 rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
