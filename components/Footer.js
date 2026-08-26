import Link from "next/link";

const OFFICES = [
  {
    city: "Bengaluru — Headquarters",
    lines: ["541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
  },
  {
    city: "Kochi — Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  },
  {
    city: "Nairobi — Kenya Office",
    lines: ["Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950, Postal Code 00100", "Kenya"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-sand/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-lg font-medium text-sand">
            Travel Unbounded
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/60">
            The best journeys aren&apos;t sold from a catalogue — they&apos;re built
            around the people taking them.
          </p>
        </div>

        {OFFICES.map((office) => (
          <div key={office.city}>
            <h3 className="text-sm font-semibold text-sand">{office.city}</h3>
            <ul className="mt-3 space-y-1 text-sm text-sand/60">
              {office.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-sand/10 py-6 text-xs text-sand/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Travel Unbounded. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-sand">Home</Link>
          <Link href="/about" className="hover:text-sand">About</Link>
          <Link href="/contact" className="hover:text-sand">Plan a Trip</Link>
        </div>
      </div>
    </footer>
  );
}