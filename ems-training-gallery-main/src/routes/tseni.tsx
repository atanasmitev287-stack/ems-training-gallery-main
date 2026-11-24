import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PricingGrid } from "@/components/site/PricingGrid";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/tseni")({
  head: () => ({
    meta: [
      { title: "Цени и абонаменти — Golden Gym Central" },
      { name: "description", content: "Абонаменти и цени за фитнес, персонални и EMS тренировки в Golden Gym Central." },
      { property: "og:title", content: "Цени и абонаменти — Golden Gym Central" },
      { property: "og:description", content: "Абонаменти и цени за фитнес, персонални и EMS тренировки в Golden Gym Central." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Цени и абонаменти" title={<>Избери своя <span className="text-gold">план</span></>} text="Свържете се с нас за актуални цени и условия." photo={photos.gymFreeWeights} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><PricingGrid /></div></section>
      <CtaBand />
    </>
  );
}
