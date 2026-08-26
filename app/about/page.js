import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "About Travel Unbounded",
  description:
    "Headquartered in Bengaluru with offices in Kochi and Nairobi — Travel Unbounded designs trips personally experienced by our own team.",
};

const OFFICES = [
  {
    city: "Bengaluru",
    tag: "Headquarters",
    lines: ["541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
  },
  {
    city: "Kochi",
    tag: "Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  },
  {
    city: "Nairobi",
    tag: "Kenya Office",
    lines: ["Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950", "Postal Code 00100, Kenya"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-sand">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-marigold">
              About us
            </p>
            <h1 className="mt-3 font-display text-4xl italic leading-tight sm:text-5xl">
              India&apos;s Most Trusted Experiential Travel Experts
            </h1>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-sand/70">
              <p>
                Travel Unbounded was born from a simple belief — that the
                best journeys aren&apos;t sold from a catalogue. They&apos;re
                built around the people taking them.
              </p>
              <p>
                Headquartered in Bengaluru with offices in Kerala and
                Nairobi, we design trips that blend comfort, culture, and raw
                nature. Every destination, resort, and activity we recommend
                has been personally experienced by our team.
              </p>
              <p>
                From spotting the Big Five at dawn in the Masai Mara to
                cruising Ha Long Bay at sunset — we go where real stories are
                written, and we bring you along.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="Safari plains at golden hour"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal">
          Where to find us
        </p>
        <h2 className="mb-10 text-3xl text-ink sm:text-4xl">Our offices</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              className="rounded-2xl border border-ink/10 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-marigoldDeep">
                {office.tag}
              </p>
              <h3 className="mt-1 font-display text-xl text-ink">
                {office.city}
              </h3>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-ink/60">
                {office.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}