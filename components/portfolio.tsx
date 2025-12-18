"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import ProjectCard from "./project-card";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "branding", label: "Branding" },
    { id: "flyers", label: "Flyers & Social Media" },
    { id: "photography", label: "Photography" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects.filter((p) => p.isFeatured)
      : projects.filter((p) => p.category === activeCategory && p.isFeatured);

  return (
    <section className="section-padding bg-linear-to-b from-white to-teal-50 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-teal dark:text-teal-light mb-4">
            A Glimpse into My Creative World
          </h2>
          <p className="text-lg text-color max-w-2xl mx-auto">
            Here's a collection of some of my favorite projects — where strategy
            meets creativity, and ideas become visuals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-teal dark:bg-teal-light text-white dark:text-navy"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link href="/portfolio" className="btn-primary">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
