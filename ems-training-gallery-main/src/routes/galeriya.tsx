import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { gymGallery } from "@/lib/site";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/galeriya")({
  head: () => ({
    meta: [
      { title: "Галерия — Golden Gym Central" },
      { name: "description", content: "Разгледайте залата на Golden Gym Central в Благоевград." },
      { property: "og:title", content: "Галерия — Golden Gym Central" },
      { property: "og:description", content: "Разгледайте залата на Golden Gym Central в Благоевград." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Галерия" title={<>Разгледай <span className="text-gold">залата</span></>} text="Оборудване, зони и атмосфера — вижте сами." photo={photos.gymMainHall} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><PhotoGallery photos={gymGallery} layout={["sm:col-span-2 sm:row-span-2", "", ""]} /></div></section>
      <CtaBand />
    </>
  );
}
