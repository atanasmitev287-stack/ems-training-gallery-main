import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/kontakti")({
  head: () => ({
    meta: [
      { title: "Контакти — Golden Gym Central" },
      { name: "description", content: "Адрес, телефон и карта на Golden Gym Central в Благоевград." },
      { property: "og:title", content: "Контакти — Golden Gym Central" },
      { property: "og:description", content: "Адрес, телефон и карта на Golden Gym Central в Благоевград." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Контакти" title={<>Свържи се <span className="text-gold">с нас</span></>} text="Пл. „Георги Измирлиев – Македончето“ №1, в подлеза — в сърцето на Благоевград." photo={photos.gymCardioZone} />
      <ContactSection />
    </>
  );
}
