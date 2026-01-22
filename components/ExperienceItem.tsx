type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  image?: string;
};

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition hover:border-[color:var(--accent)]/60">
      
      {/* Date: always top-right of card */}
      <p className="absolute right-5 top-5 text-xs text-zinc-500 whitespace-nowrap">
        {item.dates}
      </p>

      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        {/* Left content */}
        <div className="pr-20 sm:pr-0">
          <p className="text-sm font-semibold text-zinc-100">{item.role}</p>
          <p className="text-sm text-zinc-400">{item.org}</p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right image (desktop only) */}
        {item.image && (
          <div className="hidden sm:flex items-center">
            <img
              src={item.image}
              alt={item.org}
              className="w-90 h-60 rounded-2xl object-cover object-left-top border border-zinc-800"
            />
          </div>
        )}
      </div>
    </div>
  );
}
