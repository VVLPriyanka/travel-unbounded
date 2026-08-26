const POINTS = [
  {
    title: "Personally vetted",
    body: "Every resort, guide and activity we recommend has been experienced firsthand by our own team — nothing is booked off a brochure.",
  },
  {
    title: "Local guides, real access",
    body: "We work with guides who grew up in the places we send you, which tends to open doors a standard tour package doesn't.",
  },
  {
    title: "Custom itineraries",
    body: "No fixed packages. Every trip is rebuilt around your pace, your budget and the things you actually want to see.",
  },
  {
    title: "24×7 support",
    body: "A missed connection or a change of plans at 2am shouldn't mean you're on your own — someone is always reachable.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-sandDeep">
      <div className="container-page py-16 sm:py-20">
        <div className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal">
            Why choose us
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">
            Built by people who&apos;ve actually been there
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <div key={point.title}>
              <span className="font-display text-sm text-marigoldDeep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}