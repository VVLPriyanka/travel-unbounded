import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-sand">
      <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sand/20 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-sand/70">
            10 destinations · 2 continents
          </span>

          <h1 className="mt-6 font-display text-4xl italic leading-[1.1] sm:text-5xl lg:text-6xl">
            India&apos;s Most Trusted
            <span className="not-italic"> Experiential</span> Travel Experts
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-sand/70">
            Discover journeys built around people, culture and unforgettable
            experiences — from the backwaters of Kerala to the Serengeti&apos;s
            open plains.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Plan Your Trip
            </Link>
            <a href="#india" className="text-sm font-medium text-sand/80 underline underline-offset-4 hover:text-sand">
              Browse destinations
            </a>
          </div>

          <div className="route-divider mt-12 max-w-sm text-sand/40" />
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
              alt="Backwaters of Kerala at sunset"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-marigold px-5 py-4 shadow-lg sm:block">
            <p className="font-display text-2xl font-medium text-ink">10+</p>
            <p className="text-xs font-medium text-ink/70">
              hand-built itineraries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}