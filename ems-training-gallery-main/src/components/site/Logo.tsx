import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Golden Gym Central — начало"
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <span className="grid h-10 w-10 place-items-center rounded-sm bg-gold font-display text-lg font-black text-primary-foreground transition-transform duration-500 group-hover:rotate-[8deg]">
        G
      </span>
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
