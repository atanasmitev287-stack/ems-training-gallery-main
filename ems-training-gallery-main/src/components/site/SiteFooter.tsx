import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { contact, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden border-t border-border bg-overlay">
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center font-display text-[18vw] font-black leading-none text-outline opacity-40 lg:text-[13rem]">
        GOLDEN
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-40 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:pb-52">
        <div className="space-y-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
  Фитнес клуб в сърцето на Благоевград. Сила, дисциплина и атмосфера, която те кара да се връщаш.
</p>
<div className="mt-4 flex flex-col items-start gap-3">
  <a href="tel:+359888123456" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-yellow-400">
    📱+359 888 123 456
  </a>
  <a
    href={contact.instagram}
    target="_blank"
    rel="noreferrer"
    aria-label="Golden Gym Central в Instagram"
    className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
  >
    <Instagram className="h-5 w-5" />
  </a>
</div>
</div>
        <div>
          <h2 className="eyebrow mb-5">Навигация</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5">Контакти</h2>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {contact.address}
                <br />
                {contact.city}
              </span>
            </li>
            <li>
              <a href={contact.phoneHref} className="flex gap-3 transition-colors hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5">Работно време</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {contact.hours.map((h) => (
              <li key={h.days} className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">{h.days}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Golden Gym Central. Всички права запазени.</p>
          <p>Благоевград, България</p>
        </div>
      </div>
    </footer>
  );
}
