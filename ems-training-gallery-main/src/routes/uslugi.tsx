import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Услуги — Golden Gym Central" },
      { name: "description", content: "Фитнес тренировки, персонални тренировки, групови занимания и EMS тренировки в Благоевград." },
      { property: "og:title", content: "Услуги — Golden Gym Central" },
      { property: "og:description", content: "Фитнес тренировки, персонални тренировки, групови занимания и EMS тренировки в Благоевград." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Услуги" title={<>Нашите <span className="text-gold">услуги</span></>} text="Четири направления, един фокус — твоят резултат." photo={photos.gymCardioZone} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><ServicesGrid /></div></section>
      <CtaBand />
    </>
  );
}
