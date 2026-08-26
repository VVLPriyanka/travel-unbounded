# Travel Unbounded

## Overview

A small production-style travel company website for "Travel Unbounded" —
built with Next.js. It showcases destination packages across India and
internationally, tells the company story, and captures travel enquiries
through a booking form that is validated and persisted to MongoDB.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- MongoDB Atlas
- Mongoose
- Vercel (deployment target)

## Features

- Responsive home page with hero, India destinations, international
  destinations, and a "why choose us" section
- About page with company story and office locations (Bengaluru HQ,
  Kochi, Nairobi)
- Booking enquiry form with client-side validation, loading state, and
  inline success/error UI (no `alert()`)
- `POST /api/enquiry` — server-side validation, MongoDB persistence,
  JSON success/failure responses with correct status codes (201/400/500)
- `GET /api/enquiry` (bonus) — returns stored enquiries, most recent first
- Basic per-page SEO metadata (title + description)
- Destination data kept as local static data (`data/destinations.js`) —
  no database needed for that part, per the assignment spec

## Project Structure

```
travel-unbounded/
├── app/
│   ├── layout.js            # root layout, fonts, nav/footer, default SEO
│   ├── page.js               # home page
│   ├── globals.css
│   ├── about/page.js         # about page
│   ├── contact/page.js       # contact / enquiry page
│   └── api/enquiry/route.js  # POST + GET /api/enquiry
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── DestinationCard.js
│   ├── DestinationSection.js
│   ├── WhyChooseUs.js
│   └── BookingForm.js
├── data/
│   └── destinations.js       # static India + international destination data
├── lib/
│   ├── mongodb.js            # cached Mongoose connection helper
│   └── validateEnquiry.js    # shared server-side validation
├── models/
│   └── Enquiry.js            # Mongoose schema for booking enquiries
├── .env.example
├── tailwind.config.js
└── package.json
```

## Local Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create a `.env.local` file in the project root (never commit this file):

```
MONGODB_URI=your_mongodb_atlas_connection_string
```

A blank template is provided in `.env.example`.

## API

### `POST /api/enquiry`

Accepts a booking enquiry, validates it server-side, and saves it.

Request body:

```json
{
  "fullName": "Jane Doe",
  "countryCode": "+91",
  "contactNumber": "9876543210",
  "email": "jane@example.com",
  "dateOfTravel": "2026-12-01",
  "numberOfPeople": 2,
  "hotelCategory": "Deluxe",
  "numberOfChildren": 1
}
```

Responses:

- `201` — `{ "success": true, "message": "Enquiry submitted successfully.", "id": "..." }`
- `400` — `{ "success": false, "message": "Invalid enquiry data.", "errors": { ... } }`
- `500` — `{ "success": false, "message": "Something went wrong..." }`

### `GET /api/enquiry` (bonus)

Returns `{ success: true, data: [...] }` with all stored enquiries, most
recent first. Not gated behind auth in this Phase 1 build — see
Assumptions below.

## Deployment

1. Push this repository to GitHub
2. Create a new Vercel project and import the repo
3. Add the `MONGODB_URI` environment variable in the Vercel project settings
4. Deploy
5. Verify the live form actually saves a document in MongoDB Atlas

Production URL: _add after deploying_
GitHub repo: _add after pushing_

## Assumptions / Features Skipped

- No authentication or admin dashboard was built — the bonus
  `GET /api/enquiry` endpoint is unauthenticated, since Phase 1 explicitly
  scopes out auth. In a real deployment this route would sit behind auth
  before being linked to any UI.
- No destination-details page — cards link straight to the enquiry form
  with the destination name pre-filled in the query string, since the
  assignment doesn't require a details page.
- Destination images are hotlinked from Unsplash for placeholder purposes,
  per the assignment's note that this is acceptable.
- Phone number validation accepts 7–15 digits (with optional spaces/dashes)
  rather than a country-specific format, since the form supports multiple
  country codes.
- Pricing is static/dummy data with no real inventory or pricing engine.

## Screenshots

_Optional — add after running locally._

## Live Demo

_Add after deploying._

## GitHub

_Add after pushing._