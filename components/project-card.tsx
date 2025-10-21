import { Project } from "@/lib/data-types";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="group relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
  );
}
