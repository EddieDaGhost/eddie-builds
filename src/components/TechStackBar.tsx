"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Docker",
  "React Native",
  "GraphQL",
  "Redis",
  "AWS",
  "Figma",
  "Git",
];

export default function TechStackBar() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {technologies.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="text-sm text-muted glass px-4 py-2 rounded-full hover:text-foreground hover:border-primary-light/30 transition-all duration-200 cursor-default"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
