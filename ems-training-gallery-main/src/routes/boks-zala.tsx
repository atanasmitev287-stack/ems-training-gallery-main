import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { GalleryPlaceholder } from "@/components/site/GalleryPlaceholder";
import { BoxingTopics } from "@/components/site/boxing/BoxingTopics";
import { BoxingBenefits } from "@/components/site/boxing/BoxingBenefits";
import { boxing, boxingGallery, boxingGallerySlots, contact, team } from "@/lib/site";

const description =
  "Бокс зала в Golden Gym Central, Благоевград. Тренировки по бокс с Кирил Димитров — изгради сила, издръжливост и увереност.";

export const Route = createFileRoute("/boks-zala")({
  head: () => ({
    meta: [
      { title: "Бокс зала — Golden Gym Central" },
      { name: "description", content: description },
      { property: "og:title", content: "Бокс зала — Golden Gym Central" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const CTA_LABEL = "Запитай за тренировки";

function Page() {
  const heroPhoto = boxingGallery[0];
  const trainer = team.find((m) => m.id === boxing.trainerId);
  return (
    <>
      <PageHero
        eyebrow="Бокс зала"
        title={
          <>
            Открий силата <span className="text-gold">на бокса</span>
          </>
        }
        text="Изгради сила, издръжливост и увереност."
        photo={heroPhoto}
        placeholderWord="Бокс"
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <Link to="/kontakti">
                {CTA_LABEL} <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="frame" size="xl">
              <a href={contact.phoneHref}>
                <Phone /> {contact.phoneDisplay}
              </a>
            </Button>
          </>
        }
      />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading index="01" eyebrow="Бокс зала" title={boxing.intro.title} text={boxing.intro.text} />
            {trainer && (
              <Reveal className="mt-10 flex items-center gap-5 rounded-sm border border-border bg-surface p-4 sm:p-5">
                <img
                  src={trainer.photo.src}
                  alt={trainer.photo.alt}
                  width={trainer.photo.width}
                  height={trainer.photo.height}
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-16 shrink-0 rounded-sm object-cover object-top sm:h-24 sm:w-20"
                />
                <div className="min-w-0">
                  <p className="eyebrow">Треньор</p>
                  <p className="mt-2 font-display text-lg font-bold uppercase text-foreground">{trainer.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Тренировките по бокс се водят от {trainer.name}.</p>
                  <Link to="/ekip" className="mt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:text-primary-glow">
                    Виж екипа <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            )}
            <Reveal className="mt-8 border-l-2 border-primary pl-5 text-sm leading-relaxed text-foreground">
              {boxing.intro.note}
            </Reveal>
          </div>
          <Reveal className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-deep">
              {boxingGallery[1] ? (
                <img
                  src={boxingGallery[1].src}
                  alt={boxingGallery[1].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <PhotoPlaceholder label="Бокс залата" />
              )}
            </div>
            <div className="absolute -right-3 -top-3 h-24 w-24 border-r-2 border-t-2 border-primary" aria-hidden />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            index="02"
            eyebrow="Тренировка · Техника · Екипировка"
            title={
              <>
                Всичко започва от <span className="text-gold">основите</span>
              </>
            }
            text="Боксът е спорт на дисциплината. Ето какво включва една тренировка, върху какво се работи и какво ти трябва, за да започнеш."
          />
          <div className="mt-14">
            <BoxingTopics />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            index="03"
            eyebrow="Ползи от тренировките"
            title={
              <>
                Защо <span className="text-gold">бокс?</span>
              </>
            }
          />
          <div className="mt-14">
            <BoxingBenefits />
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading index="04" eyebrow="Галерия" title="Бокс залата отблизо" />
          {boxingGallery.length > 0 ? (
            <PhotoGallery photos={boxingGallery} className="mt-14" />
          ) : (
            <GalleryPlaceholder slots={boxingGallerySlots} className="mt-14" />
          )}
        </div>
      </section>

      <CtaBand
        title={
          <>
            Готов ли си за <span className="text-gold">първия рунд?</span>
          </>
        }
        text="Свържи се с нас и попитай за тренировките в бокс залата — ще ти дадем цялата информация."
        buttonLabel={CTA_LABEL}
      />
    </>
  );
}
