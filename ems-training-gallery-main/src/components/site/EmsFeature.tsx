import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/site";

/** Homepage band introducing the EMS studio (uses the EMS studio photos only). */
export function EmsFeature() {
  return (
    <section className="grain relative overflow-hidden bg-overlay">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
          <img
            src={photos.emssuitslounge.src}
            alt={photos.emssuitslounge.alt}
            width={photos.emssuitslounge.width}
            height={photos.emssuitslounge.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay via-transparent to-transparent lg:bg-gradient-to-l" aria-hidden />
        </div>
        <div className="relative z-10 flex items-center px-5 py-20 sm:px-12 lg:px-16">
          <Reveal className="max-w-xl">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-muted-foreground">03</span>
              <span className="h-px w-8 bg-primary" aria-hidden />
              EMS студио
            </p>
            <h2 className="mt-5 text-3xl font-bold uppercase leading-[1.05] text-foreground sm:text-5xl">
              Тренирай <span className="text-gold">умно.</span>
              <br />С EMS технология.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Обособено, светло студио, създадено специално за EMS тренировки. Тренираш в специален
              костюм с електрическа мускулна стимулация, а треньорът следи всяко движение.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground">
              {["Отделно пространство за EMS", "Тренировка под наблюдението на треньор", "Специални EMS костюми"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Zap className="h-4 w-4 shrink-0 text-primary" /> {t}
                  </li>
                ),
              )}
            </ul>
            <Button asChild variant="gold" size="xl" className="mt-10">
              <Link to="/ems-trenirovki">
                Разгледай EMS студиото <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
