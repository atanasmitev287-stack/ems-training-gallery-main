import type { ReactNode } from "react";
import type { Photo } from "@/lib/site";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  /** Background photo. When missing, a branded placeholder backdrop is shown instead. */
  photo?: Pick<Photo, "src" | "alt"> | undefined;
  /** Big outlined word behind the placeholder backdrop. */
  placeholderWord?: string;
  /** Buttons under the text. */
  actions?: ReactNode;
};

/** Photo header used at the top of every inner page. */
export function PageHero({ eyebrow, title, text, photo, placeholderWord, actions }: Props) {
  return (
    <section className="grain relative flex min-h-[62vh] items-end overflow-hidden bg-overlay pb-16 pt-36 sm:pb-20">
      {photo ? (
        <img
          src={photo.src}
          alt={photo.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-70"
        />
      ) : (
        <div className="absolute inset-0 bg-surface-gradient" aria-hidden>
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
          {placeholderWord && (
            <span className="absolute -right-4 top-24 select-none font-display text-[28vw] font-black uppercase leading-none text-outline opacity-60 lg:text-[18rem]">
              {placeholderWord}
            </span>
          )}
        </div>
      )}
      <div className="absolute inset-0 bg-photo-fade" aria-hidden />
      <div className="absolute inset-0 bg-photo-side opacity-80" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="eyebrow flex animate-rise items-center gap-3">
          <span className="h-px w-10 bg-primary" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl animate-rise text-4xl font-black uppercase leading-[0.98] text-foreground [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {text && (
          <p className="mt-6 max-w-2xl animate-rise text-base leading-relaxed text-muted-foreground [animation-delay:240ms] sm:text-lg">
            {text}
          </p>
        )}
        {actions && (
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:360ms] sm:flex-row">{actions}</div>
        )}
      </div>
    </section>
  );
}
