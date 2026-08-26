import mongoose from "mongoose";

const HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

const EnquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    countryCode: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    dateOfTravel: {
      type: Date,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    hotelCategory: {
      type: String,
      required: true,
      enum: HOTEL_CATEGORIES,
    },
    numberOfChildren: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
  },
  {
    // adds createdAt and updatedAt automatically
    timestamps: true,
  }
);

// Avoid recompiling the model on every hot reload in dev.
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);

export { HOTEL_CATEGORIES };