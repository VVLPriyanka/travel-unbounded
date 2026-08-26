import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { validateEnquiry } from "@/lib/validateEnquiry";

// POST /api/enquiry
// Accepts a booking enquiry payload, validates it server-side (never trusts
// the client), saves it to MongoDB, and returns a success/failure JSON response.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const result = validateEnquiry(body);
  if (!result.valid) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid enquiry data.",
        errors: result.errors,
      },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();
    const enquiry = await Enquiry.create(result.data);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        id: enquiry._id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to save enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

// GET /api/enquiry (bonus, not required)
// Returns all stored enquiries, most recent first. Intended to power a
// simple internal view of submissions — no auth is implemented in Phase 1.
export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: enquiries }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch enquiries:", err);
    return NextResponse.json(
      { success: false, message: "Could not fetch enquiries." },
      { status: 500 }
    );
  }
}