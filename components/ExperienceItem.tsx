type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  image?: string;
};

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition hover:border-[color:var(--accent)]/60">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
        {/* Left: automatically scales based on right column width */}
        <div>
          <p className="text-sm font-semibold text-zinc-100">{item.role}</p>
          <p className="text-sm text-zinc-400">{item.org}</p>

          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right: auto width (matches image), date top-right, image middle-right */}
        {item.image && (
          <div className="relative hidden sm:flex flex-col items-end">
            {/* Date: top-right */}
            <p className="absolute right-0 top-0 text-xs text-zinc-500 whitespace-nowrap">
              {item.dates}
            </p>

            {/* Image: vertically centered */}
            <div className="flex h-full items-center">
              <img
                src={item.image}
                alt={item.org}
                className="w-69 h-43 rounded-2xl object-cover border border-zinc-800"
              />
            </div>
          </div>
        )}

        {/* If no image, show date in normal flow on the left */}
        {!item.image && (
          <p className="hidden sm:block text-xs text-zinc-500 whitespace-nowrap justify-self-end">
            {item.dates}
          </p>
        )}
      </div>
    </div>
  );
}
