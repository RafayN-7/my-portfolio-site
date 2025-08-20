"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon, SparklesIcon, LayoutDashboardIcon, BotIcon } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Agent Platform",
    description: "A platform for building, deploying, and managing autonomous AI agents with natural language interfaces.",
    tags: ["AI", "Agents", "Next.js", "LangChain", "OpenAI"],
    emoji: "🤖",
    link: "#",
  },
  {
    title: "MERN Task Manager",
    description: "A full-featured task manager app built with MongoDB, Express, React, and Node.js.",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
    emoji: "📋",
    link: "#",
  },
  {
    title: "Realtime Chat App",
    description: "A real-time chat application with group and private messaging, built on the MERN stack.",
    tags: ["MERN", "Socket.io", "Chat", "React"],
    emoji: "💬",
    link: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate stunning images from text prompts using advanced AI models.",
    tags: ["AI", "Stable Diffusion", "Next.js"],
    emoji: "🎨",
    link: "#",
  },
];

const SOCIALS = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    icon: MailIcon,
    label: "Email",
    href: "mailto:your@email.com",
  },
];

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 md:px-12 bg-transparent z-10">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <SparklesIcon className="w-6 h-6 text-indigo-500 animate-pulse" />
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">My Portfolio</span>
      </div>
      <div className="flex gap-3">
        {SOCIALS.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:scale-110 transition-transform duration-200"
          >
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-16 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 animate-gradient-x" />
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
        Hi, I'm a <span className="underline decoration-wavy decoration-indigo-400">MERN</span> & <span className="underline decoration-wavy decoration-pink-400">AI</span> Developer
      </h1>
      <p className="mt-6 max-w-xl mx-auto text-lg md:text-2xl text-gray-700 dark:text-gray-300 animate-fade-in-up delay-150">
        I build modern web apps and smart AI solutions. Explore my projects below!
      </p>
      <Button
        asChild
        className="mt-8 px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:scale-105 transition-transform duration-200 animate-fade-in-up delay-300"
      >
        <a href="#projects">
          View Projects
          <ArrowRightIcon className="ml-2 w-5 h-5 inline" />
        </a>
      </Button>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400",
        hovered ? "ring-2 ring-indigo-400" : ""
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label={project.title}
    >
      <Card className="flex flex-col h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-md transition-colors duration-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl md:text-4xl animate-bounce-slow" aria-hidden>
            {project.emoji}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors duration-200">
            {project.title}
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 flex-1 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </a>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-gradient-to-b from-white via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LayoutDashboardIcon className="w-7 h-7 text-indigo-500 animate-fade-in-up" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in-up">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-150">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-2">
        <span>© {new Date().getFullYear()} My Portfolio. All rights reserved.</span>
        <span>
          Built with <span className="text-indigo-500">Next.js</span> & <span className="text-pink-500">Shadcn UI</span>
        </span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
