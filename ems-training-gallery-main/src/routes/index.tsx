import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/site/Marquee";
import { AboutSection } from "@/components/site/AboutSection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { EmsFeature } from "@/components/site/EmsFeature";
import { TeamGrid } from "@/components/site/TeamGrid";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { CtaBand } from "@/components/site/CtaBand";
import { contact, gymGallery, photos } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Gym Central — фитнес клуб в Благоевград" },
      { name: "description", content: "Твоята промяна започва тук. Фитнес, персонални и групови тренировки и EMS студио в центъра на Благоевград." },
      { property: "og:title", content: "Golden Gym Central — фитнес клуб в Благоевград" },
      { property: "og:description", content: "Твоята промяна започва тук. Фитнес, персонални и групови тренировки и EMS студио в центъра на Благоевград." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-overlay pb-20 pt-32 sm:pb-28">
        <img
          src={photos.gymMainHall.src}
          alt={photos.gymMainHall.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-photo-fade" aria-hidden />
        <div className="absolute inset-0 bg-photo-side opacity-90" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="eyebrow flex animate-rise items-center gap-3">
            <span className="h-px w-10 bg-primary" aria-hidden />
            Golden Gym Central · Благоевград
          </p>
          <h1 className="mt-6 max-w-5xl animate-rise text-5xl font-black uppercase leading-[0.95] text-foreground [animation-delay:120ms] sm:text-7xl lg:text-8xl">
            Твоята промяна <span className="text-gold">започва тук.</span>
          </h1>
          <p className="mt-8 max-w-xl animate-rise text-base leading-relaxed text-muted-foreground [animation-delay:240ms] sm:text-lg">
            Фитнес клуб в сърцето на Благоевград — мощно оборудване, опитни треньори и отделно EMS
            студио. Всичко, от което имаш нужда, за да станеш по-силен.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/galeriya">
                Разгледай залата <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="frame" size="xl">
              <Link to="/kontakti">Свържи се с нас</Link>
            </Button>
          </div>
          <p className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" /> {contact.address}
          </p>
        </div>
      </section>
      <Marquee />
      <AboutSection />
      <section className="bg-surface/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading index="02" eyebrow="Услуги" title={<>Тренировка за <span className="text-gold">всяка цел</span></>} />
          <div className="mt-14"><ServicesGrid /></div>
        </div>
      </section>
      <EmsFeature />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading index="04" eyebrow="Нашият екип" align="center" title={<>Хората зад <span className="text-gold">резултатите</span></>} />
          <div className="mt-14"><TeamGrid /></div>
        </div>
      </section>
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading index="05" eyebrow="Галерия" title="Залата отблизо" />
          <PhotoGallery photos={gymGallery} className="mt-14" layout={["sm:col-span-2 sm:row-span-2", "", ""]} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
