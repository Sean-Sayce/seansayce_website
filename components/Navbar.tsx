export function Navbar({ name }: { name: string }) {
  const links = [
    { label: "About Me", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/75 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Left: GitHub (same styling as Resume) */}
        <a
          href="https://github.com/Sean-Sayce"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl border border-[color:var(--accent)] bg-[color:var(--accent)]/10 px-3 py-1.5 text-sm font-medium text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent)]/20"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M12 0.5C5.73 0.5 0.75 5.48 0.75 11.75c0 4.88 3.16 9.02 7.55 10.48.55.1.75-.24.75-.53v-1.87c-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.45-.28-5.03-1.22-5.03-5.43 0-1.2.43-2.18 1.12-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.29 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.42 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.91.7.77 1.12 1.75 1.12 2.95 0 4.22-2.59 5.14-5.05 5.42.39.34.74 1.01.74 2.04v3.02c0 .29.2.63.76.52 4.38-1.46 7.54-5.6 7.54-10.48C23.25 5.48 18.27.5 12 .5z" />
          </svg>
          GitHub
        </a>

        {/* Center nav */}
        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--accent)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right: Resume */}
        <a
          href="/Sean_Sayce_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl border border-[color:var(--accent)] bg-[color:var(--accent)]/10 px-3 py-1.5 text-sm font-medium text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent)]/20"
        >
          <img
            src="/icons/page.svg"
            alt=""
            className="h-4 w-4"
          />
          Resume
        </a>
      </div>
    </header>
  );
}
