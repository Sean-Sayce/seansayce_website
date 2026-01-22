type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  image?: string;
};

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition hover:border-[color:var(--accent)]/60">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold text-zinc-100">{item.role}</p>
          <p className="text-sm text-zinc-400">{item.org}</p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right */}
        {item.image ? (
          <div className="shrink-0 flex flex-col items-center sm:items-end">
            {/* Date: centered on mobile, top-right on desktop */}
            <p className="text-xs text-zinc-500 whitespace-nowrap sm:self-end">
              {item.dates}
            </p>

            {/* Image: centered on mobile, right edge on desktop */}
            <img
              src={item.image}
              alt={item.org}
              className="mt-3 w-90 aspect-[3/2] rounded-2xl object-cover border border-zinc-800"
            />
          </div>
        ) : (
          <p className="text-xs text-zinc-500 whitespace-nowrap sm:justify-self-end sm:self-start">
            {item.dates}
          </p>
        )}
      </div>
    </div>
  );
}
