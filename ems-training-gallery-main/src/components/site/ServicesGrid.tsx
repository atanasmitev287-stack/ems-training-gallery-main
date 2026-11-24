import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Dumbbell, User, Users, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { services, type ServiceIcon } from "@/lib/site";

const icons: Record<ServiceIcon, typeof Dumbbell> = {
  dumbbell: Dumbbell,
  user: User,
  users: Users,
  zap: Zap,
};

export function ServicesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => {
        const Icon = icons[s.icon];
        return (
          <Reveal key={s.title} delay={i * 90} className="h-full">
            <Link
              to={s.to}
              className="group relative flex h-full min-h-80 flex-col overflow-hidden bg-surface p-7 transition-colors duration-500 hover:bg-surface-raised sm:p-8"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-sm border border-primary/40 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-black text-outline transition-colors group-hover:text-primary/20">
                  {s.number}
                </span>
              </div>
              <h3 className="mt-auto pt-10 text-xl font-bold uppercase leading-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Научи повече
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
