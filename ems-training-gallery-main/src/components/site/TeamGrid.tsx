import { Check, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact, team } from "@/lib/site";

export function TeamGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-5xl">
      {team.map((m, i) => (
        <Reveal key={m.id} delay={i * 120}>
          <article className="group relative overflow-hidden rounded-sm bg-surface">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={m.photo.src}
                alt={m.photo.alt}
                width={m.photo.width}
                height={m.photo.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-photo-fade" aria-hidden />
              <span className="absolute left-5 top-5 font-display text-5xl font-black text-outline">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="relative -mt-28 p-6 sm:p-8">
              <p className="eyebrow">{m.role}</p>
              <h3 className="mt-3 text-2xl font-bold uppercase text-foreground">{m.name}</h3>
              <ul className="mt-5 space-y-2.5">
                {m.specialties.map((sp) => (
                  <li key={sp} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {sp}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Golden Gym Central
                </span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100"
              aria-hidden
            />
          </article>
        </Reveal>
      ))}
    </div>
  );
}
