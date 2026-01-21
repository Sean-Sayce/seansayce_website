import Image from "next/image";

type ProjectLinks = {
  code?: string;
  demo?: string;
};

export type Project = {
  title: string;
  description: string;
  tech?: React.ReactNode;
  highlights: string[];
  image?: string;
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
        className={`flex flex-col gap-5 sm:flex-row sm:items-center ${
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

          {project.tech && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech}
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
                  className="font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] hover:font-bold"
                >
                  Code
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[color:var(--accent)] hover:text-[color:var(--accent-hover)] hover:font-bold"
                >
                  Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image */}
        {project.image && (
          <div
            className={`shrink-0 overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg)]/30 ${
              reverse ? "sm:w-[420px]" : "sm:w-[520px]"
            }`}
          >
            <div
              className={`relative w-full ${
                reverse ? "aspect-[3/2]" : "aspect-[16/9]"
              }`}
            >

              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 640px) 480px, 100vw"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
