
export default function AwardsStats() {
  const stats = [
    ["20+", "Award Categories"],
    ["150+", "Nominations"],
    ["20+", "Industry Leaders"],
    ["1", "Grand Ceremony"],
  ];

  return (
    <section className="relative -mt-16 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map(([number, title]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-5xl font-bold text-orange-500">
                {number}
              </h3>

              <p className="mt-3 text-slate-600">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
