
export default function AwardsCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[40px] bg-[#255B7D] p-16 text-center text-white">
          {/* Label */}
          <div className="flex items-center justify-center gap-5">
            <span className="h-[2px] w-12 bg-red-500 sm:w-20" />

            <span className="whitespace-nowrap text-center font-poppins text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm md:text-base">
              REPAX AWARDS 2026
            </span>

            <span className="h-[2px] w-12 bg-red-500 sm:w-20" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-serif text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
            Ready To Get Recognized?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            Submit your nomination and showcase your achievements before
            industry leaders and innovators.
          </p>
        </div>
      </div>
    </section>
  );
}
