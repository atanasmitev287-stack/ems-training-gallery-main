import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Clock, Instagram, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { contact, services } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Моля, въведете име.").max(80, "Името е твърде дълго."),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()-]{6,20}$/, "Моля, въведете валиден телефон."),
  email: z
    .string()
    .trim()
    .max(120)
    .email("Моля, въведете валиден имейл.")
    .or(z.literal("")),
  service: z.string().min(1, "Изберете услуга."),
  message: z.string().trim().min(5, "Съобщението е твърде кратко.").max(1000, "Максимум 1000 символа."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

 const onSubmit = async (data: any) => {
  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: "ce2a866a-a919-462b-a762-669ca359dd3f",
      subject: "Ново запитване от goldengymcentral.com",
      from_name: "Golden Gym Central",
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    }),
  }).catch(() => {});
  setSent(true);
  reset();
};


  const info = [
    {
      icon: MapPin,
      title: "Адрес",
      lines: [contact.address, contact.city],
    },
    { icon: Phone, title: "Телефон", lines: [contact.phoneDisplay], href: contact.phoneHref },
    {
      icon: Instagram,
      title: "Instagram",
      lines: [contact.instagramHandle],
      href: contact.instagram,
      external: true,
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          {info.map((item, i) => {
            const Icon = item.icon;
            const body = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-primary/40 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow block">{item.title}</span>
                  {item.lines.map((l) => (
                    <span key={l} className="mt-1.5 block break-words text-base text-foreground">
                      {l}
                    </span>
                  ))}
                </span>
              </>
            );
            return (
              <Reveal key={item.title} delay={i * 80}>
                {item.href ? (
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex gap-5 rounded-sm border border-border bg-surface p-6 transition-colors hover:border-primary/60"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="group flex gap-5 rounded-sm border border-border bg-surface p-6">{body}</div>
                )}
              </Reveal>
            );
          })}
          <Reveal delay={240}>
            <div className="flex gap-5 rounded-sm border border-border bg-surface p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-primary/40 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <span className="eyebrow block">Работно време</span>
                <ul className="mt-2 space-y-1.5">
                  {contact.hours.map((h) => (
                    <li key={h.days} className="flex flex-wrap justify-between gap-x-4 text-sm">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="rounded-sm border border-border bg-surface-gradient p-6 shadow-deep sm:p-10">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-6 text-2xl font-bold uppercase text-foreground">Благодарим ви!</h3>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Запитването ви е прието. Ще се свържем с вас възможно най-скоро.
                </p>
                <Button variant="frame" size="xl" className="mt-8" onClick={() => setSent(false)}>
                  Ново запитване
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold uppercase text-foreground">Изпрати запитване</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Попълнете формата и ще се свържем с вас.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Име" htmlFor="name" error={errors.name?.message}>
                    <input id="name" autoComplete="name" placeholder="Вашето име" className={fieldClass} {...register("name")} />
                  </Field>
                  <Field label="Телефон" htmlFor="phone" error={errors.phone?.message}>
                    <input id="phone" type="tel" autoComplete="tel" placeholder="08XX XXX XXX" className={fieldClass} {...register("phone")} />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Имейл (по желание)" htmlFor="email" error={errors.email?.message}>
                    <input id="email" type="email" autoComplete="email" placeholder="ime@primer.bg" className={fieldClass} {...register("email")} />
                  </Field>
                  <Field label="Услуга" htmlFor="service" error={errors.service?.message}>
                    <select id="service" className={cn(fieldClass, "appearance-none")} {...register("service")}>
                      <option value="">Изберете услуга</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Абонамент">Абонамент и цени</option>
                    </select>
                  </Field>
                </div>
                <Field label="Съобщение" htmlFor="message" error={errors.message?.message}>
                  <textarea id="message" rows={5} placeholder="С какво можем да ви помогнем?" className={cn(fieldClass, "resize-none")} {...register("message")} />
                </Field>
                <Button type="submit" variant="gold" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Изпращане…" : "Изпрати"} <Send />
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-sm border border-border">
          <iframe
            title="Golden Gym Central на картата"
            src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
            className="h-[420px] w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  );
}
