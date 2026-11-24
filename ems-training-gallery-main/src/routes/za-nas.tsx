import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { AboutSection } from "@/components/site/AboutSection";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/za-nas")({
  head: () => ({
    meta: [
      { title: "За нас — Golden Gym Central" },
      { name: "description", content: "Запознайте се с Golden Gym Central — фитнес клуб с характер в центъра на Благоевград." },
      { property: "og:title", content: "За нас — Golden Gym Central" },
      { property: "og:description", content: "Запознайте се с Golden Gym Central — фитнес клуб с характер в центъра на Благоевград." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="За нас" title={<>Клуб с <span className="text-gold">характер</span></>} text="Пространство, създадено за сериозни тренировки и истинска промяна." photo={photos.gymFreeWeights} />
      <AboutSection showLink={false} />
      <CtaBand />
    </>
  );
}
