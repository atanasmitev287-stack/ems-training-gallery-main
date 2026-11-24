import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Instagram, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { contact, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
        <Logo />

        <nav aria-label="Основна навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative px-3 py-2 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="sm" className="hidden h-10 rounded-sm px-5 sm:inline-flex">
            <Link to="/kontakti">Свържи се</Link>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Отвори менюто"
                className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
              <Dialog.Content className="grain fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-background p-6 shadow-deep data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right sm:p-8">
                <div className="relative z-10 flex items-center justify-between">
                  <Dialog.Title className="sr-only">Меню</Dialog.Title>
                  <Dialog.Description className="sr-only">Навигация в сайта</Dialog.Description>
                  <Logo />
                  <Dialog.Close
                    aria-label="Затвори менюто"
                    className="grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary"
                  >
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>
                <nav aria-label="Мобилна навигация" className="relative z-10 mt-10 flex-1 overflow-y-auto">
                  <ul className="space-y-1">
                    {nav.map((item, i) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          activeOptions={{ exact: item.to === "/" }}
                          className="group flex items-baseline gap-4 border-b border-border py-4 font-display text-2xl font-bold uppercase text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                        >
                          <span className="text-xs font-medium text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="relative z-10 mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
                  <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" /> {contact.phoneDisplay}
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-primary"
                  >
                    <Instagram className="h-4 w-4 text-primary" /> {contact.instagramHandle}
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
