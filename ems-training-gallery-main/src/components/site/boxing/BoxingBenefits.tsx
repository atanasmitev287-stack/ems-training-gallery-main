import { Reveal } from "../Reveal";
import { boxingIcons } from "./icons";
import { boxing } from "@/lib/site";
import type { BoxingIcon } from "@/lib/site";

/** Grid of training benefits. */
export function BoxingBenefits() {
  return (
    <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {boxing.benefits.map((b, i) => {
        const Icon = boxingIcons[b.icon as BoxingIcon];
        return (
          <Reveal as="li" key={b.title} delay={(i % 3) * 90} className="flex gap-5 border-t border-border pt-6">
            <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-bold uppercase text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
