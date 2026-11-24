import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ index, eyebrow, title, text, align = "left", className }: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center")}>
        {index && <span className="text-muted-foreground">{index}</span>}
        <span className="h-px w-8 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.05] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
      )}
    </Reveal>
  );
}
