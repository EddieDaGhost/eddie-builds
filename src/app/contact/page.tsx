"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/eddie",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/eddie",
    href: "https://linkedin.com",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@eddiebuilds.dev",
    href: "mailto:hello@eddiebuilds.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto min-h-screen">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a project idea or just want to chat? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Connect with me
            </h3>
            <div className="space-y-5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 text-muted hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-primary-light/30 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted">{social.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Open to opportunities
            </h3>
            <p className="text-muted leading-relaxed">
              I&apos;m currently available for freelance projects, collaborations, and
              full-time roles. Whether you need a full-stack developer, a
              frontend specialist, or someone to bring your app idea to life
              &mdash; let&apos;s connect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
