import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description:
    "Send a booking enquiry to Travel Unbounded and hear back from a travel expert within 24 hours.",
};

export default function ContactPage({ searchParams }) {
  const prefillDestination = searchParams?.destination || "";

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-marigoldDeep">
          Plan your trip
        </p>
        <h1 className="text-center text-3xl text-ink sm:text-4xl">
          Tell us about the trip you want
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-ink/60">
          Fill in a few details and one of our travel experts will reach out
          within 24 hours with a plan built around you.
        </p>

        <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <BookingForm prefillDestination={prefillDestination} />
        </div>
      </div>
    </section>
  );
}