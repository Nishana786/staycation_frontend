"use client";

import { useState } from "react";
import { API } from "../utils/api";
import { Calendar, CheckCircle } from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  image: string;
}

interface BookingFormProps {
  property: Property | null;
}

export default function BookingForm({ property }: BookingFormProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!property)
    return <p className="text-red-500">Unable to load property.</p>;

  const handleBooking = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) return alert("Please login first!");
    if (!startDate || !endDate) return alert("Select both dates");

    const res = await fetch(`${API}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        propertyId: property.id,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Booking Successful!");
      setStartDate("");
      setEndDate("");
    } else {
      alert(data.message || "Booking failed");
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Calendar /> Book This Property
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="date"
          value={startDate}
          className="border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          className="border p-3 rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
        >
          <CheckCircle size={20} />
          Book Now
        </button>
      </div>
    </div>
  );
}
