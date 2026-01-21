import Image from "next/image";
import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  icon?: string;        // e.g. "/icons/python.svg"
  className?: string;   // optional extra styling if you want later
};

export function Pill({ children, icon, className = "" }: PillProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg)] px-3 py-1 text-sm text-[color:var(--text-muted)]",
        className,
      ].join(" ")}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="shrink-0"
        />
      )}
      {children}
    </span>
  );
}
