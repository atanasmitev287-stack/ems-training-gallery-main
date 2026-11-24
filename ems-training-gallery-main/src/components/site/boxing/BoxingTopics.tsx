import { Check } from "lucide-react";
import { Reveal } from "../Reveal";
import { boxingIcons } from "./icons";
import { boxing } from "@/lib/site";
import type { BoxingIcon } from "@/lib/site";

/** Training, technique and equipment cards. */
export function BoxingTopics() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
      {boxing.topics.map((t, i) => {
  const Icon = boxingIcons[t.icon as BoxingIcon];
        return (
          <Reveal key={t.title} delay={i * 90} className="h-full">
            <article className="group relative flex h-full flex-col bg-surface p-7 transition-colors duration-500 hover:bg-surface-raised sm:p-9">
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-sm border border-primary/40 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-black text-outline">{t.number}</span>
              </div>
              <h3 className="mt-10 text-xl font-bold uppercase leading-tight text-foreground sm:text-2xl">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-foreground">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
