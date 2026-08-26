"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+91", label: "+91 (India)" },
  { code: "+1", label: "+1 (US/Canada)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+61", label: "+61 (Australia)" },
  { code: "+254", label: "+254 (Kenya)" },
  { code: "+94", label: "+94 (Sri Lanka)" },
];

const HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9\s-]{7,15}$/;

const initialFormData = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: 1,
  hotelCategory: "",
  numberOfChildren: 0,
};

function todayISODate() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().split("T")[0];
}

// Pure function so it can be reasoned about (and tested) independently of
// component state. Mirrors the checks the server repeats in
// lib/validateEnquiry.js — the client copy exists purely for fast feedback.
function validate(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!formData.contactNumber.trim() || !PHONE_REGEX.test(formData.contactNumber.trim())) {
    errors.contactNumber = "Enter a valid contact number.";
  }

  if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.dateOfTravel) {
    errors.dateOfTravel = "Date of travel is required.";
  } else if (formData.dateOfTravel < todayISODate()) {
    errors.dateOfTravel = "Date of travel cannot be in the past.";
  }

  if (!formData.numberOfPeople || Number(formData.numberOfPeople) < 1) {
    errors.numberOfPeople = "At least 1 traveller is required.";
  }

  if (formData.numberOfChildren !== "" && Number(formData.numberOfChildren) < 0) {
    errors.numberOfChildren = "Number of children cannot be negative.";
  }

  if (!formData.hotelCategory) {
    errors.hotelCategory = "Please select a hotel category.";
  }

  return errors;
}

export default function BookingForm({ prefillDestination = "" }) {
  const [formData, setFormData] = useState({
    ...initialFormData,
    // If the user arrived via "Enquire" on a destination card, fold that
    // into the message context but keep the schema unchanged — it's not
    // a required backend field per the assignment spec.
    fullName: initialFormData.fullName,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the field's error as soon as the user starts correcting it.
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data.message || "Something went wrong while submitting your enquiry."
        );
        return;
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setServerMessage(
        "Something went wrong while submitting your enquiry. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/20 bg-teal/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal text-sand">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl text-ink">
          Thank you! Your enquiry is in.
        </h3>
        <p className="mt-2 text-sm text-ink/60">
          Our travel expert will contact you within 24 hours to start
          building your trip.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {prefillDestination && (
        <p className="rounded-lg bg-marigold/10 px-4 py-2.5 text-sm text-ink/70">
          Enquiring about <span className="font-semibold">{prefillDestination}</span>
        </p>
      )}

      <div>
        <label htmlFor="fullName" className="field-label">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          className="field-input"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Jane Doe"
        />
        {errors.fullName && <p className="field-error">{errors.fullName}</p>}
      </div>

      <div className="grid grid-cols-[7.5rem_1fr] gap-3">
        <div>
          <label htmlFor="countryCode" className="field-label">Code</label>
          <select
            id="countryCode"
            name="countryCode"
            className="field-input"
            value={formData.countryCode}
            onChange={handleChange}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contactNumber" className="field-label">Contact Number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            className="field-input"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="98765 43210"
          />
          {errors.contactNumber && (
            <p className="field-error">{errors.contactNumber}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="field-label">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="field-input"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="dateOfTravel" className="field-label">Date of Travel</label>
          <input
            id="dateOfTravel"
            name="dateOfTravel"
            type="date"
            min={todayISODate()}
            className="field-input"
            value={formData.dateOfTravel}
            onChange={handleChange}
          />
          {errors.dateOfTravel && (
            <p className="field-error">{errors.dateOfTravel}</p>
          )}
        </div>

        <div>
          <label htmlFor="hotelCategory" className="field-label">Hotel Category</label>
          <select
            id="hotelCategory"
            name="hotelCategory"
            className="field-input"
            value={formData.hotelCategory}
            onChange={handleChange}
          >
            <option value="">Select…</option>
            {HOTEL_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.hotelCategory && (
            <p className="field-error">{errors.hotelCategory}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="numberOfPeople" className="field-label">Number of People</label>
          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            min={1}
            className="field-input"
            value={formData.numberOfPeople}
            onChange={handleChange}
          />
          {errors.numberOfPeople && (
            <p className="field-error">{errors.numberOfPeople}</p>
          )}
        </div>

        <div>
          <label htmlFor="numberOfChildren" className="field-label">
            Children <span className="text-ink/40">(optional)</span>
          </label>
          <input
            id="numberOfChildren"
            name="numberOfChildren"
            type="number"
            min={0}
            className="field-input"
            value={formData.numberOfChildren}
            onChange={handleChange}
          />
          {errors.numberOfChildren && (
            <p className="field-error">{errors.numberOfChildren}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}