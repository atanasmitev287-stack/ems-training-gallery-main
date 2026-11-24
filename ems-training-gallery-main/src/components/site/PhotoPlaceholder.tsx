import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  className?: string;
  /** Hide the "photo coming soon" caption (e.g. behind a hero). */
  compact?: boolean;
};

/** Dark branded frame shown where a real photo will go once it is uploaded. */
export function PhotoPlaceholder({ label, className, compact = false }: Props) {
  return (
    <div
      role="img"
      aria-label={`Място за снимка: ${label}`}
      className={cn(
        "grain relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm border border-dashed border-primary/30 bg-surface-gradient",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-sm border border-primary/40 text-primary">
          <Camera className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{label}</span>
        {!compact && <span className="text-xs text-muted-foreground">Снимката предстои</span>}
      </div>
    </div>
  );
}
