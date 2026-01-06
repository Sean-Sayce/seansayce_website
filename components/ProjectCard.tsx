import { Pill } from "./Pill";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  links?: { demo?: string; code?: string };
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
      <h3 className="text-sm font-semibold text-zinc-100">{project.title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-auto pt-4 flex gap-3">
        {project.links?.demo ? (
          <a
            className="text-sm text-zinc-200 underline decoration-zinc-600 underline-offset-4 hover:text-white"
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}
        {project.links?.code ? (
          <a
            className="text-sm text-zinc-200 underline decoration-zinc-600 underline-offset-4 hover:text-white"
            href={project.links.code}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        ) : null}
      </div>
    </div>
  );
}
