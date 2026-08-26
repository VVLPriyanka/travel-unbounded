import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  const { name, country, image, description, price } = destination;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-ink">{name}</h3>
          <span className="text-xs font-medium uppercase tracking-wide text-ink/40">
            {country}
          </span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-ink/40">
              starting from
            </p>
            <p className="font-display text-lg text-ink">
              ₹{price.toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href={`/contact?destination=${encodeURIComponent(name)}`}
            className="btn-secondary !px-4 !py-2 text-xs"
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}