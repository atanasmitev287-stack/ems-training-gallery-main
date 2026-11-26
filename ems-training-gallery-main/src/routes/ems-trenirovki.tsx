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

      {/* КАКВО Е EMS? - АТРАКТИВНО */}
<section className="py-10 sm:py-14">
  <div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="rounded-3xl overflow-hidden border border-yellow-500/40">
      {/* ГОРНА ЖЪЛТА ЛЕНТА */}
      <div className="bg-yellow-400 px-6 sm:px-10 py-6 text-center">
        <p className="text-black font-black tracking-widest text-sm">⚡ КАКВО Е EMS? ⚡</p>
        <h2 className="text-3xl sm:text-5xl font-black text-black leading-tight mt-2">
          20 МИНУТИ = 90 МИНУТИ ФИТНЕС
        </h2>
        <p className="text-black/70 font-semibold mt-2">Без тежести. Без болки в ставите. Без часове във фитнеса.</p>
      </div>

      {/* ОСНОВЕН ТЕКСТ */}
      <div className="bg-zinc-950 px-6 sm:px-10 py-8 grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-zinc-300 leading-relaxed text-">
            Обличаш специален костюм с електроди, който изпраща леки импулси към мускулите ти, докато правиш леки упражнения с треньор.
          </p>
          <p className="text-zinc-300 leading-relaxed text- mt-3">
            Така костюмът активира <span className="text-yellow-400 font-bold">над 350 мускула едновременно</span> - и ти гориш <span className="text-yellow-400 font-bold">до 500 калории за 20 минути</span>.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex gap-3 items-start bg-zinc-900 rounded-xl p-3.5 border border-zinc-800">
              <span className="text-2xl">🔥</span>
              <p className="text-zinc-200"><span className="font-bold text-white">Искаш да отслабнеш бързо?</span> - EMS гори мазнини 3 пъти по-бързо от обикновен фитнес.</p>
            </div>
            <div className="flex gap-3 items-start bg-zinc-900 rounded-xl p-3.5 border border-zinc-800">
              <span className="text-2xl">🦵</span>
              <p className="text-zinc-200"><span className="font-bold text-white">Болят те коленете / гърба?</span> - Няма тежести, няма натоварване на ставите.</p>
            </div>
            <div className="flex gap-3 items-start bg-zinc-900 rounded-xl p-3.5 border border-zinc-800">
              <span className="text-2xl">⏰</span>
              <p className="text-zinc-200"><span className="font-bold text-white">Нямаш време?</span> - Само 20 минути, 2 пъти в седмицата е достатъчно.</p>
            </div>
            <div className="flex gap-3 items-start bg-zinc-900 rounded-xl p-3.5 border border-zinc-800">
              <span className="text-2xl">💪</span>
              <p className="text-zinc-200"><span className="font-bold text-white">Никога не си тренирал?</span> - Треньорът Слави е до теб през цялата тренировка.</p>
            </div>
          </div>
        </div>

        {/* ДЯСНА КОЛОНА - ЧИСЛА + БУТОН */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-zinc-900 border border-yellow-500/30 p-5 text-center">
              <p className="text-5xl font-black text-yellow-400">20</p>
              <p className="text-zinc-400 text-sm mt-1 font-semibold">минути<br />тренировка</p>
            </div>
            <div className="rounded-2xl bg-zinc-900 border border-yellow-500/30 p-5 text-center">
              <p className="text-5xl font-black text-yellow-400">350+</p>
              <p className="text-zinc-400 text-sm mt-1 font-semibold">мускула<br />работят</p>
            </div>
            <div className="rounded-2xl bg-zinc-900 border border-yellow-500/30 p-5 text-center">
              <p className="text-5xl font-black text-yellow-400">500</p>
              <p className="text-zinc-400 text-sm mt-1 font-semibold">калории<br />за 20 мин</p>
            </div>
            <div className="rounded-2xl bg-yellow-400 p-5 text-center">
              <p className="text-5xl font-black text-black">2x</p>
              <p className="text-black/70 text-sm mt-1 font-bold">пъти седмично<br />е достатъчно</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 p-5 text-center">
            <p className="text-black font-black text-xl">ПЪРВА ТРЕНИРОВКА - БЕЗПЛАТНА</p>
            <p className="text-black/70 text-sm mt-1">Ела, пробвай костюма и виж дали е за теб - без ангажимент.</p>
            <a href="/kontakti" className="inline-block mt-4 bg-black text-yellow-400 font-bold px-7 py-3 rounded-full text-base hover:scale-105 transition">
              ЗАПИШИ БЕЗПЛАТНА ПРОБА →
            </a>
          </div>

          <p className="text-zinc-500 text-xs mt-3 text-center">* Не се препоръчва при бременност, пейсмейкър и епилепсия - питай треньора на място.</p>
        </div>
      </div>
    </div>
  </div>
</section>
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
