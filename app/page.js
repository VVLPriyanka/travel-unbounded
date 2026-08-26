import Link from "next/link";
import Hero from "@/components/Hero";
import DestinationSection from "@/components/DestinationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { indiaDestinations, internationalDestinations } from "@/data/destinations";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "India's most trusted experiential travel experts. Explore hand-built trips across India and beyond, then send a booking enquiry in minutes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <DestinationSection
        id="india"
        eyebrow="Within India"
        title="India, off the postcard"
        description="Five regions our team keeps going back to — and keeps sending people to."
        destinations={indiaDestinations}
      />

      <div className="container-page">
        <div className="route-divider text-ink/15" />
      </div>

      <DestinationSection
        id="international"
        eyebrow="Beyond India"
        title="Further afield"
        description="From safari plains to glacier coastlines, picked for the same reason as everything else on this site — we've actually been."
        destinations={internationalDestinations}
      />

      <WhyChooseUs />

      <section className="bg-ink">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <h2 className="max-w-xl font-display text-3xl italic text-sand sm:text-4xl">
            Tell us where, and we&apos;ll handle the how.
          </h2>
          <p className="max-w-md text-sm text-sand/60">
            Send a booking enquiry and one of our travel experts will get
            back to you within 24 hours with a plan built around you.
          </p>
          <Link href="/contact" className="btn-primary">
            Plan Your Trip
          </Link>
        </div>
      </section>
    </>
  );
}