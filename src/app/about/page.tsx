"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  Code2,
  Server,
  Smartphone,
  PaintBucket,
  Cloud,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Expo", "Swift (learning)", "Flutter (learning)"],
  },
  {
    icon: PaintBucket,
    title: "Design",
    items: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    icon: Wrench,
    title: "Tools & Other",
    items: ["Git", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
  },
];

const timeline = [
  {
    year: "2024",
    title: "AI & Full-Stack Projects",
    description:
      "Dove into AI integrations, building tools with OpenAI APIs and expanding full-stack expertise with Next.js and Python.",
  },
  {
    year: "2023",
    title: "E-Commerce & Mobile",
    description:
      "Built custom Shopify themes and launched first React Native app. Focused on performance optimization and conversion.",
  },
  {
    year: "2022",
    title: "Backend & API Development",
    description:
      "Deepened backend skills with Node.js and PostgreSQL. Designed and built RESTful APIs for production applications.",
  },
  {
    year: "2021",
    title: "Frontend Foundations",
    description:
      "Started the journey with HTML, CSS, and JavaScript. Quickly moved to React and fell in love with building user interfaces.",
  },
];

export default function AboutPage() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto min-h-screen">
      <SectionHeading
        title="About Me"
        subtitle="A developer passionate about building beautiful, functional digital experiences."
      />

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 md:p-12 mb-16 max-w-3xl mx-auto"
      >
        <p className="text-lg text-muted leading-relaxed mb-6">
          I&apos;m Eddie &mdash; a developer who loves turning ideas into polished digital
          products. Whether it&apos;s a data-heavy dashboard, a sleek mobile app, or an
          AI-powered tool, I approach every project with a focus on clean code,
          intuitive design, and real-world impact.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          I believe in building things that not only work well but feel great to
          use. Every pixel, every interaction, every line of code matters. When
          I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source,
          or designing the next thing I want to build.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and technologies in my toolkit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted bg-white/5 px-3 py-1 rounded-full border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline */}
      <SectionHeading
        title="My Journey"
        subtitle="Key milestones in my development career."
      />

      <div className="max-w-2xl mx-auto space-y-8">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-white">
                  {item.year}
                </span>
              </div>
              {i < timeline.length - 1 && (
                <div className="w-px h-full bg-border mt-2" />
              )}
            </div>
            <div className="glass rounded-2xl p-6 flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
