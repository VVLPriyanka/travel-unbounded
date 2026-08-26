// Static/dummy destination data.
// Per the assignment, destination and pricing data does not need a database —
// it is intentionally kept as a local module.

export const destinations = [
  // ---------- India ----------
  {
    id: 1,
    name: "Kerala",
    country: "India",
    category: "india",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    description:
      "Drift through the backwaters on a converted rice-barge, wake up to mist over the tea hills, and eat lunch off a banana leaf.",
    price: 28500,
  },
  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    category: "india",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pine forests, single-lane mountain roads, and villages where the Wi-Fi gives up before the view does.",
    price: 24000,
  },
  {
    id: 3,
    name: "Ladakh",
    country: "India",
    category: "india",
    image:
      "https://images.unsplash.com/photo-1589554011533-f1e8a0e5c6a5?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-altitude desert, cobalt lakes, and monasteries clinging to cliffs above the Indus.",
    price: 32000,
  },
  {
    id: 4,
    name: "Andaman",
    country: "India",
    category: "india",
    image:
      "https://images.unsplash.com/photo-1589179447845-9d3e94c9a48d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Reefs you can snorkel straight off the beach, and islands with more coconut trees than people.",
    price: 35000,
  },
  {
    id: 5,
    name: "Goa",
    country: "India",
    category: "india",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Portuguese-era lanes by day, beach shacks and sunset by the Arabian Sea by evening.",
    price: 18500,
  },

  // ---------- International ----------
  {
    id: 6,
    name: "Kenya",
    country: "Kenya",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    description:
      "Dawn game drives across the Masai Mara, with the Big Five and the great migration on the itinerary.",
    price: 165000,
  },
  {
    id: 7,
    name: "Vietnam",
    country: "Vietnam",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    description:
      "Limestone karsts rising out of Ha Long Bay, street food in Hanoi, and rice terraces up north.",
    price: 92000,
  },
  {
    id: 8,
    name: "Tanzania",
    country: "Tanzania",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80",
    description:
      "The Serengeti's endless plains, Ngorongoro's crater floor, and campfire nights under wide skies.",
    price: 178000,
  },
  {
    id: 9,
    name: "Iceland",
    country: "Iceland",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80",
    description:
      "Glaciers, black-sand coasts, and a real shot at the northern lights depending on the season.",
    price: 210000,
  },
  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    category: "international",
    image:
      "https://images.unsplash.com/photo-1586183189334-1fd6c0aad0e2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Tea plantations rolling into the hills, ancient rock fortresses, and coastline for the last leg.",
    price: 68000,
  },
];

export const indiaDestinations = destinations.filter(
  (d) => d.category === "india"
);

export const internationalDestinations = destinations.filter(
  (d) => d.category === "international"
);

export function getDestinationById(id) {
  return destinations.find((d) => d.id === Number(id));
}