import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { emsGallery } from "@/lib/site";
import { photos } from "@/lib/site";

export const Route = createFileRoute("/ems-trenirovki")({
  head: () => ({
    meta: [
      { title: "EMS тренировки — Golden Gym Central" },
      { name: "description", content: "EMS тренировки в отделно студио в Golden Gym Central, Благоевград, водени от треньор Слави." },
      { property: "og:title", content: "EMS тренировки — Golden Gym Central" },
      { property: "og:description", content: "EMS тренировки в отделно студио в Golden Gym Central, Благоевград, водени от треньор Слави." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="EMS тренировки" title={<>Тренирай <span className="text-gold">умно</span></>} text="Обособено светло студио за EMS тренировки с електрическа мускулна стимулация, под наблюдението на треньор." photo={photos.emsStudioWings} />
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="EMS студио" title={<>Отделно пространство за <span className="text-gold">EMS</span></>} text="Тренираш в специален EMS костюм, а треньорът Слави следи всяко движение. Студиото е отделено от основната зала, за да имаш спокойствие и фокус." /><PhotoGallery photos={emsGallery} className="mt-14" /></div></section>
      {/* ЦЕНОРАЗПИС */}
<section className="py-10 sm:py-14">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="text-center mb-8">
      <p className="text-yellow-400 font-bold tracking-widest text-sm">ЦЕНОРАЗПИС</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Цени на EMS тренировките</h2>
      <p className="text-zinc-400 mt-2">SOLO - самостоятелно &nbsp;|&nbsp; DUO - с партньор</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {/* 1. ТРЕНИРОВКИ */}
      <div className="rounded-2xl bg-zinc-900 border border-yellow-500/30 p-6">
        <h3 className="text-yellow-400 text-xl font-bold mb-4">ТРЕНИРОВКИ - EMS</h3>
        <div className="grid grid-cols-3 text-zinc-400 text-sm pb-2 border-b border-zinc-700"><span></span><span className="text-right font-bold">SOLO</span><span className="text-right font-bold">DUO</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Единично посещение</span><span className="text-right">24 €</span><span className="text-right">18 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Карта 4 посещения</span><span className="text-right">82 €</span><span className="text-right">62 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-yellow-500/40 bg-yellow-500/15 rounded-lg px-2 text-white font-bold"><span>Карта 8 посещения 🔥 BLACK FRIDAY</span><span className="text-right"><span className="line-through text-zinc-400">132 €</span> <span className="text-yellow-400">80 €</span></span><span className="text-right">100 €</span></div>
        <div className="grid grid-cols-3 py-2.5 text-white"><span>Карта 12 посещения</span><span className="text-right">175 €</span><span className="text-right">132 €</span></div>
      </div>

      {/* 2. S-LINE */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-yellow-400 text-xl font-bold mb-4">S-LINE ТРЕНИРОВКИ</h3>
        <div className="grid grid-cols-3 text-zinc-400 text-sm pb-2 border-b border-zinc-700"><span></span><span className="text-right font-bold">SOLO</span><span className="text-right font-bold">DUO</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Единично посещение</span><span className="text-right">24 €</span><span className="text-right">18 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Карта 4 посещения</span><span className="text-right">82 €</span><span className="text-right">62 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Карта 8 посещения</span><span className="text-right">132 €</span><span className="text-right">100 €</span></div>
        <div className="grid grid-cols-3 py-2.5 text-white"><span>Карта 12 посещения</span><span className="text-right">175 €</span><span className="text-right">132 €</span></div>
      </div>

      {/* 3. КОМБИНИРАНИ */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-yellow-400 text-xl font-bold mb-4">КОМБИНИРАНИ ПАКЕТИ</h3>
        <div className="grid grid-cols-3 text-zinc-400 text-sm pb-2 border-b border-zinc-700"><span></span><span className="text-right font-bold">SOLO</span><span className="text-right font-bold">DUO</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Единично посещение</span><span className="text-right">32 €</span><span className="text-right">24 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Карта 4 посещения</span><span className="text-right">106 €</span><span className="text-right">82 €</span></div>
        <div className="grid grid-cols-3 py-2.5 border-b border-zinc-800 text-white"><span>Карта 8 посещения</span><span className="text-right">165 €</span><span className="text-right">126 €</span></div>
        <div className="grid grid-cols-3 py-2.5 text-white"><span>Карта 12 посещения</span><span className="text-right">220 €</span><span className="text-right">165 €</span></div>
        <p className="text-zinc-500 text-xs mt-3">EMS + S-LINE в една тренировка</p>
      </div>

      {/* 4. АНТИЦЕЛУЛИТНИ */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
        <h3 className="text-yellow-400 text-xl font-bold mb-4">АНТИЦЕЛУЛИТНИ ПРОЦЕДУРИ</h3>
        <div className="grid grid-cols-2 text-zinc-400 text-sm pb-2 border-b border-zinc-700"><span></span><span className="text-right font-bold">ЦЕНА</span></div>
        <div className="grid grid-cols-2 py-2.5 border-b border-zinc-800 text-white"><span>Единично посещение</span><span className="text-right">36 €</span></div>
        <div className="grid grid-cols-2 py-2.5 border-b border-zinc-800 text-white"><span>Карта 4 посещения</span><span className="text-right">118 €</span></div>
        <div className="grid grid-cols-2 py-2.5 border-b border-zinc-800 text-white"><span>Карта 8 посещения</span><span className="text-right">195 €</span></div>
        <div className="grid grid-cols-2 py-2.5 text-white"><span>Карта 12 посещения</span><span className="text-right">260 €</span></div>
      </div>

      {/* 5. MATCH ME */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:col-span-2">
        <h3 className="text-yellow-400 text-xl font-bold mb-4">MATCH ME / GOLDEN MATCH</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex justify-between bg-zinc-800/60 rounded-xl px-4 py-3 text-white"><span>EMS МАТЧ</span><span className="font-bold">32 €</span></div>
          <div className="flex justify-between bg-zinc-800/60 rounded-xl px-4 py-3 text-white"><span>GOLDEN MATCH</span><span className="font-bold">32 €</span></div>
        </div>
        <p className="text-zinc-500 text-xs mt-3">Персонално изживяване с треньор - EMS или Golden Gym формат</p>
      </div>

    </div>
  </div>
</section><CtaBand />
    </>
  );
}
