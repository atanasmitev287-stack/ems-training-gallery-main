import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Golden Gym Central — начало"
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <img src="/logo-white.webp" alt="Golden Gym Central" className="h-14 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-bold tracking-[0.12em] text-foreground sm:text-base">
          GOLDEN GYM
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.5em] text-primary">
          CENTRAL
        </span>
      </span>
    </Link>
  );
}
