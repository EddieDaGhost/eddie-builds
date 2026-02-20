"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByCategory } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = getProjectsByCategory(activeCategory);

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto min-h-screen">
      <SectionHeading
        title="All Projects"
        subtitle="Explore my work across different platforms and technologies."
      />

      <FilterBar active={activeCategory} onChange={setActiveCategory} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted mt-12">
          No projects found in this category.
        </p>
      )}
    </section>
  );
}
