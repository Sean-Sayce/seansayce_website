export function Navbar({ name }: { name: string }) {
  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-sm font-semibold text-zinc-100">
          {name}
        </a>

        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              className="text-sm text-zinc-300 hover:text-white"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="rounded-xl border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          href="/resume.pdf"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
