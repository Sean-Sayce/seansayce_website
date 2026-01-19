import Image from "next/image";

type ProjectLinks = {
  code?: string;
  demo?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  image?: string; // e.g. "/projects/BeatSync.png"
  links?: ProjectLinks;
};

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition hover:border-[color:var(--accent)]/60">
      <div
        className={`flex flex-col gap-5 sm:flex-row sm:items-start ${
          reverse ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <div className="sm:flex-1">
          <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-muted)]">
            {project.description}
          </p>

          {project.tech?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg)]/40 px-2 py-0.5 text-xs text-[color:var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.highlights?.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-[color:var(--text-muted)]">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {(project.links?.code || project.links?.demo) && (
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] hover:underline"
                >
                  Code
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image */}
        {project.image && (
          <div className="shrink-0 overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/30 sm:w-[320px]">
            <div className="relative aspect-video w-full">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 320px, 100vw"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
