// app/reservations/page.tsx
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? +value : value,
    }));
  };

  const inputClass =
    "w-full px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all";

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-stone-900 flex items-center justify-center px-4">
        <div className="text-center p-8 max-w-md bg-stone-800 rounded-2xl border border-stone-700">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-white">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-gray-400 mb-8">
            Thank you, {formData.name}! Table for {formData.guests} on{" "}
            {formData.date} at {formData.time}. Confirmation sent to{" "}
            {formData.email}.
          </p>
          <Button onClick={() => setSubmitted(false)}>New Reservation</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-stone-900 min-h-screen">
      <section className="py-20 text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">
          Make a Reservation
        </h1>
        <p className="text-xl text-gray-400">
          Reserve your table for an unforgettable experience
        </p>
      </section>

      <section className="pb-20 px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-3xl mx-auto bg-stone-800 rounded-2xl p-8 border border-stone-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "name",
                type: "text",
                label: "Full Name",
                placeholder: "John Doe",
              },
              {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "john@example.com",
              },
              {
                name: "phone",
                type: "tel",
                label: "Phone",
                placeholder: "(555) 123-4567",
              },
              {
                name: "guests",
                type: "select",
                label: "Guests",
                options: [1, 2, 3, 4, 5, 6, 7, 8],
              },
              { name: "date", type: "date", label: "Date" },
              {
                name: "time",
                type: "select",
                label: "Time",
                options: [
                  "11:00 AM",
                  "12:00 PM",
                  "1:00 PM",
                  "5:00 PM",
                  "6:00 PM",
                  "7:00 PM",
                  "8:00 PM",
                  "9:00 PM",
                ],
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-gray-300 font-medium mb-2">
                  {field.label} *
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {field.name === "time" && (
                      <option value="">Select time</option>
                    )}
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>
                        {field.name === "guests"
                          ? `${opt} Guest${Number(opt) > 1 ? "s" : ""}`
                          : opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    min={
                      field.type === "date"
                        ? new Date().toISOString().split("T")[0]
                        : undefined
                    }
                    className={inputClass}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-gray-300 font-medium mb-2">
              Special Requests
            </label>
            <textarea
              name="specialRequests"
              rows={3}
              value={formData.specialRequests}
              onChange={handleChange}
              className={inputClass}
              placeholder="Dietary restrictions, special occasions..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full mt-8">
            Confirm Reservation
          </Button>
        </form>
      </section>
    </div>
  );
}
