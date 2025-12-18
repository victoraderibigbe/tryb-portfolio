"use client";

import { Project } from "@/lib/data-types";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  const [displayFullImage, setDisplayFullImage] = useState(false);

  return (
    <>
      <div
        onClick={() => setDisplayFullImage(true)}
        className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      >
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-heading font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm">{project.description}</p>
        </div>
      </div>

      {displayFullImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
          onClick={() => setDisplayFullImage(false)}
        >
          <div
            className="relative w-full h-full sm:w-auto sm:h-[90vh] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl sm:max-h-[90vh] flex flex-col bg-gray-900 sm:rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setDisplayFullImage(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-2.5 transition-colors duration-200 backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image container */}
            <div className="relative flex-1 bg-black min-h-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                priority
              />
            </div>

            {/* Image info */}
            <div className="bg-gray-900 p-4 sm:p-5 md:p-6 border-t border-gray-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white mb-1.5 sm:mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 line-clamp-3 sm:line-clamp-none">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
