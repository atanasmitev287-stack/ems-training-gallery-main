import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/site";

const highlights = [
  { title: "Свободни тежести", text: "Силови рамки, щанги, пейки и дъмбели за сериозна силова работа." },
  { title: "Машини", text: "Широк избор от машини за всяка мускулна група." },
  { title: "Кардио зона", text: "Обособено място за кардио и издръжливост." },
  { title: "EMS студио", text: "Отделно, светло студио за EMS тренировки." },
];

export function AboutSection({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-deep">
            <img
              src={photos.gymFreeWeights.src}
              alt={photos.gymFreeWeights.alt}
              width={photos.gymFreeWeights.width}
              height={photos.gymFreeWeights.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-photo-fade opacity-60" aria-hidden />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-sm border-4 border-background shadow-deep sm:block lg:-right-10 lg:w-56">
            <img
              src={photos.gymCardioZone.src}
              alt={photos.gymCardioZone.alt}
              width={photos.gymCardioZone.width}
              height={photos.gymCardioZone.height}
              loading="lazy"
              decoding="async"
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-primary" aria-hidden />
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8">
          <SectionHeading
            index="01"
            eyebrow="За нас"
            title={
              <>
                Повече от зала. <span className="text-gold">Място за промяна.</span>
              </>
            }
            text="Golden Gym Central е фитнес клуб в самия център на Благоевград. Създадохме пространство с характер — мощно оборудване, отделни зони за всеки тип тренировка и атмосфера, която мотивира от първата минута."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80} className="bg-background p-5">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </Reveal>
            ))}
          </div>
          {showLink && (
            <Reveal className="mt-10">
              <Button asChild variant="frame" size="xl">
                <Link to="/za-nas">
                  Повече за нас <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
