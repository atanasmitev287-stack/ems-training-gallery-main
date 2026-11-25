import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingGrid() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-3">
      {pricing.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 100} className="h-full">
          <article
            className={cn(
              "relative flex h-full flex-col overflow-hidden rounded-sm border p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-10",
              plan.featured
                ? "border-primary bg-surface-gradient shadow-gold"
                : "border-border bg-surface",
            )}
          >
            {plan.featured && (
              <span className="absolute right-0 top-0 bg-primary px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">
                {plan.badge ?? "Популярен"}
              </span>
            )}
            <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 text-2xl font-bold uppercase text-foreground">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
            <div className="mt-8 flex items-baseline gap-2 border-y border-border py-6">
              <span className="font-display text-6xl font-black text-gold">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((f, k) => (
                <li key={`${f}-${k}`} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={plan.featured ? "gold" : "frame"}
              size="xl"
              className="mt-10 w-full"
            >
              <Link to="/kontakti">Запитване</Link>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
