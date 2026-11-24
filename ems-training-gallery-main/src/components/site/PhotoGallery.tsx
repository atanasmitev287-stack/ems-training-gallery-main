import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Photo } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  photos: Photo[];
  /** Tailwind classes per tile index for the asymmetric layout. */
  layout?: string[];
  className?: string;
};

const defaultLayout = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
];

/** Responsive bento gallery with a fullscreen, keyboard-friendly viewer. */
export function PhotoGallery({ photos, layout = defaultLayout, className }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? photos[index] : undefined;

  const go = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <>
      <div
        className={cn(
          "grid auto-rows-[240px] grid-cols-1 gap-3 sm:auto-rows-[260px] sm:grid-cols-3 lg:auto-rows-[300px]",
          className,
        )}
      >
        {photos.map((p, i) => (
          <Reveal key={p.id} delay={i * 80} className={cn("h-full", layout[i])}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block h-full w-full overflow-hidden rounded-sm bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Отвори снимка: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-photo-fade opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 right-4 flex translate-y-3 items-end justify-between gap-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-medium text-foreground">{p.alt}</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
                  <Expand className="h-4 w-4" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog.Root open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay/95 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed inset-0 z-50 flex flex-col focus:outline-none">
            <Dialog.Title className="sr-only">Галерия</Dialog.Title>
            <Dialog.Description className="sr-only">
              Използвайте стрелките за следваща и предишна снимка.
            </Dialog.Description>
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <span className="font-display text-sm font-bold text-foreground">
                <span className="text-primary">{String((index ?? 0) + 1).padStart(2, "0")}</span>
                <span className="text-muted-foreground"> / {String(photos.length).padStart(2, "0")}</span>
              </span>
              <Dialog.Close
                aria-label="Затвори"
                className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-20">
              {current && (
                <figure key={current.id} className="flex max-h-full flex-col items-center animate-in fade-in-0 zoom-in-95">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-[72vh] w-auto max-w-full rounded-sm object-contain shadow-deep"
                  />
                  <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                    {current.alt}
                  </figcaption>
                </figure>
              )}
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Предишна снимка"
                    className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-sm border border-border bg-background/60 text-foreground backdrop-blur hover:border-primary hover:text-primary sm:left-6"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Следваща снимка"
                    className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-sm border border-border bg-background/60 text-foreground backdrop-blur hover:border-primary hover:text-primary sm:right-6"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            <div className="flex justify-center gap-2 px-5 pb-6">
              {photos.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Снимка ${i + 1}`}
                  className={cn(
                    "h-14 w-20 overflow-hidden rounded-sm border-2 transition-all",
                    i === index ? "border-primary" : "border-transparent opacity-50 hover:opacity-100",
                  )}
                >
                  <img src={p.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
