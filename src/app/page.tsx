"use client";

import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import TechStackBar from "@/components/TechStackBar";
import { projects } from "@/lib/projects";

const featured = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Featured Projects */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of recent work spanning web apps, mobile, e-commerce, and more."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with every day."
        />
        <TechStackBar />
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="glass rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have a project in mind?
          </h2>
          <p className="text-muted mb-8">
            I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity glow-primary"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </>
  );
}
