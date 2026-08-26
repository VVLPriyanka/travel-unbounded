import DestinationCard from "./DestinationCard";

export default function DestinationSection({
  id,
  eyebrow,
  title,
  description,
  destinations,
}) {
  return (
    <section id={id} className="container-page py-16 sm:py-20">
      <div className="mb-10 max-w-xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-marigoldDeep">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl text-ink sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}