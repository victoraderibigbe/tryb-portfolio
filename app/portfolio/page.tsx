"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/project-card";

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
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-color relative overflow-hidden">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold  dark:text-teal-light mb-6">
            A Glimpse into My Creative World
          </h1>
          <p className="text-xl text-color max-w-3xl">
            Here's a collection of some of my favorite projects — where strategy
            meets creativity, and ideas become visuals.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white dark:bg-slate-950 transition-colors duration-30">
        <div className="container-max">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  // Updated conditional colors to use named teal and white
                  activeCategory === cat.id
                    ? "bg-teal dark:bg-teal-light text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-color">
                No projects in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
