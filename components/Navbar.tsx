export function Navbar({ name }: { name: string }) {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/75 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="text-sm font-semibold text-[color:var(--text-primary)]"
        >
          Sean <span className="text-[color:var(--accent)]">Sayce</span>
        </a>

        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--text-muted)] hover:text-[color:var(--accent)] transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/Sean_Sayce_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[color:var(--accent)] bg-[color:var(--accent)]/10 px-3 py-1.5 text-sm font-medium text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent)]/20"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
