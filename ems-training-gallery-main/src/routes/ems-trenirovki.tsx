import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { emsGallery } from "@/lib/site";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/ems-trenirovki")({
  head: () => ({
    meta: [
      { title: "EMS тренировки — Golden Gym Central" },
      { name: "description", content: "EMS тренировки в отделно студио в Golden Gym Central, Благоевград, водени от треньор Слави." },
      { property: "og:title", content: "EMS тренировки — Golden Gym Central" },
      { property: "og:description", content: "EMS тренировки в отделно студио в Golden Gym Central, Благоевград, водени от треньор Слави." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="EMS тренировки" title={<>Тренирай <span className="text-gold">умно</span></>} text="Обособено светло студио за EMS тренировки с електрическа мускулна стимулация, под наблюдението на треньор." photo={photos.emsStudioWings} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="EMS студио" title={<>Отделно пространство за <span className="text-gold">EMS</span></>} text="Тренираш в специален EMS костюм, а треньорът Слави следи всяко движение. Студиото е отделено от основната зала, за да имаш спокойствие и фокус." /><PhotoGallery photos={emsGallery} className="mt-14" /></div></section>
      <CtaBand />
    </>
  );
}
