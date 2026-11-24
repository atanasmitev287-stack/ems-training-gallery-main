import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { TeamGrid } from "@/components/site/TeamGrid";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/ekip")({
  head: () => ({
    meta: [
      { title: "Нашият екип — Golden Gym Central" },
      { name: "description", content: "Треньорите на Golden Gym Central — Кирил Димитров и Слави." },
      { property: "og:title", content: "Нашият екип — Golden Gym Central" },
      { property: "og:description", content: "Треньорите на Golden Gym Central — Кирил Димитров и Слави." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Нашият екип" title={<>Хората зад <span className="text-gold">резултатите</span></>} text="Треньори, които ще те водят към целта ти." photo={photos.gymMainHall} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><TeamGrid /></div></section>
      <CtaBand />
    </>
  );
}
