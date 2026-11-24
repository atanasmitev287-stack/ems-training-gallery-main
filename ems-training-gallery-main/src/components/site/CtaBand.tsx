import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { contact, photos } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  text?: ReactNode;
  buttonLabel?: string;
};

export function CtaBand({
  eyebrow = "Първата крачка",
  title = (
    <>
      Готов ли си за <span className="text-gold">промяна?</span>
    </>
  ),
  text = "Ела в залата, обади ни се или ни пиши — ще ти помогнем да започнеш правилно.",
  buttonLabel = "Свържи се с нас",
}: Props) {
  return (
    <section className="grain relative overflow-hidden bg-overlay py-24 sm:py-32">
      <img
        src={photos.gymMainHall.src}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-photo-side" aria-hidden />
      <Reveal className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-black uppercase leading-[1] text-foreground sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="gold" size="xl">
            <Link to="/kontakti">
              {buttonLabel} <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="frame" size="xl">
            <a href={contact.phoneHref}>
              <Phone /> {contact.phoneDisplay}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
