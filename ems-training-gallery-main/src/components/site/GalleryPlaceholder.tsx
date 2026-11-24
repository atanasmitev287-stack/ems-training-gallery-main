import { Reveal } from "./Reveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { cn } from "@/lib/utils";

type Props = {
  /** One label per placeholder tile. */
  slots: string[];
  /** Tailwind classes per tile index, same grid as PhotoGallery. */
  layout?: string[];
  className?: string;
};

const defaultLayout = ["sm:col-span-2 sm:row-span-2", "", "", "", "sm:col-span-2"];

/** Same bento grid as PhotoGallery, filled with placeholders until real photos arrive. */
export function GalleryPlaceholder({ slots, layout = defaultLayout, className }: Props) {
  return (
    <div
      className={cn(
        "grid auto-rows-[220px] grid-cols-1 gap-3 sm:auto-rows-[240px] sm:grid-cols-3 lg:auto-rows-[280px]",
        className,
      )}
    >
      {slots.map((label, i) => (
        <Reveal key={label} delay={i * 80} className={cn("h-full", layout[i])}>
          <PhotoPlaceholder label={label} />
        </Reveal>
      ))}
    </div>
  );
}
