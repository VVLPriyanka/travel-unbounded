import { HOTEL_CATEGORIES } from "@/models/Enquiry";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts 7-15 digits, optionally with spaces/dashes, since formats vary by country.
const PHONE_REGEX = /^[0-9\s-]{7,15}$/;
const COUNTRY_CODE_REGEX = /^\+[0-9]{1,4}$/;

/**
 * Validates and normalizes a raw enquiry payload from the client.
 * Never trust the request body directly — this is the server's own
 * check, independent of whatever the frontend already validated.
 *
 * Returns { valid: true, data } or { valid: false, errors }.
 */
export function validateEnquiry(body) {
  const errors = {};

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  if (!fullName) {
    errors.fullName = "Full name is required.";
  }

  const countryCode =
    typeof body.countryCode === "string" ? body.countryCode.trim() : "";
  if (!countryCode || !COUNTRY_CODE_REGEX.test(countryCode)) {
    errors.countryCode = "A valid country code is required (e.g. +91).";
  }

  const contactNumber =
    typeof body.contactNumber === "string" ? body.contactNumber.trim() : "";
  if (!contactNumber || !PHONE_REGEX.test(contactNumber)) {
    errors.contactNumber = "A valid contact number is required.";
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "A valid email address is required.";
  }

  let dateOfTravel = null;
  if (!body.dateOfTravel) {
    errors.dateOfTravel = "Date of travel is required.";
  } else {
    const parsed = new Date(body.dateOfTravel);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(parsed.getTime())) {
      errors.dateOfTravel = "Date of travel is invalid.";
    } else if (parsed < today) {
      errors.dateOfTravel = "Date of travel must be in the future.";
    } else {
      dateOfTravel = parsed;
    }
  }

  const numberOfPeople = Number(body.numberOfPeople);
  if (!Number.isFinite(numberOfPeople) || numberOfPeople < 1) {
    errors.numberOfPeople = "Number of people must be at least 1.";
  }

  const numberOfChildren =
    body.numberOfChildren === undefined || body.numberOfChildren === ""
      ? 0
      : Number(body.numberOfChildren);
  if (!Number.isFinite(numberOfChildren) || numberOfChildren < 0) {
    errors.numberOfChildren = "Number of children cannot be negative.";
  }

  const hotelCategory =
    typeof body.hotelCategory === "string" ? body.hotelCategory.trim() : "";
  if (!HOTEL_CATEGORIES.includes(hotelCategory)) {
    errors.hotelCategory = `Hotel category must be one of: ${HOTEL_CATEGORIES.join(
      ", "
    )}.`;
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      fullName,
      countryCode,
      contactNumber,
      email,
      dateOfTravel,
      numberOfPeople,
      numberOfChildren,
      hotelCategory,
    },
  };
}