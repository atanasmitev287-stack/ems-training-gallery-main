const words = ["Сила", "Дисциплина", "Промяна", "Енергия", "Резултат", "Характер"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4" aria-hidden>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center gap-8 px-8 font-display text-xl font-black uppercase text-primary-foreground sm:text-2xl"
              >
                {w}
                <span className="h-2 w-2 rotate-45 bg-primary-foreground" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
