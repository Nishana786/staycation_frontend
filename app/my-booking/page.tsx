"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { API } from "../utils/api";

import {
  Calendar,
  MapPin,
  Home,
  Trash2,
  IndianRupee,
} from "lucide-react";

// Skeleton Loader
function BookingSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-lg p-6 border border-[#A5D6A7]">
      <div className="flex gap-6">
        <div className="w-32 h-32 bg-[#C8E6C9] rounded-xl" />
        <div className="flex-1 space-y-3">
          <div className="h-6 w-2/3 bg-[#C8E6C9] rounded"></div>
          <div className="h-4 w-1/2 bg-[#E8F5E9] rounded"></div>
          <div className="h-4 w-3/4 bg-[#E8F5E9] rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2070";

  const cleanImage = (url: string) => {
    if (!url) return DEFAULT_IMAGE;
    if (url.includes("picsum.photos")) return DEFAULT_IMAGE;
    return url;
  };

  const loadBookings = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const res = await fetch(`${API}/bookings/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.log("Error loading:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const now = new Date();

  const filteredBookings = bookings.filter((b: any) => {
    const start = new Date(b.startDate);
    const end = new Date(b.endDate);

    if (filter === "upcoming") return start > now;
    if (filter === "past") return end < now;
    return true;
  });

  const handleCancel = async (id: number) => {
    if (!confirm("Cancel booking?")) return;

    try {
      const token = localStorage.getItem("access_token");

      const res = await fetch(`${API}/bookings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setBookings((prev) => prev.filter((b: any) => b.id !== id));
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  const upcomingCount = bookings.filter((b: any) => new Date(b.startDate) > now).length;
  const pastCount = bookings.filter((b: any) => new Date(b.endDate) < now).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F5E9] to-[#C8E6C9]">

      {/* HEADER */}
      <div className="bg-linear-to-r border-[#A5D6A7] to-[#2E7D32] text-white py-12 px-6 mb-10 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold flex items-center gap-3">
            <Calendar size={30} />
            My Bookings
          </h1>
          <p className="text-green-100 mt-2 text-lg">
            Track all your reservations
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        {/* FILTER BUTTONS */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 flex gap-2 border border-[#A5D6A7]">

          <button
            onClick={() => setFilter("all")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold ${
              filter === "all"
                ? "bg-[#2E7D32] text-white"
                : "hover:bg-[#E8F5E9] text-gray-800"
            }`}
          >
            All ({bookings.length})
          </button>

          <button
            onClick={() => setFilter("upcoming")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold ${
              filter === "upcoming"
                ? "bg-[#1B5E20] text-white"
                : "hover:bg-[#E8F5E9] text-gray-800"
            }`}
          >
            Upcoming ({upcomingCount})
          </button>

          <button
            onClick={() => setFilter("past")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold ${
              filter === "past"
                ? "bg-[#4CAF50] text-white"
                : "hover:bg-[#E8F5E9] text-gray-800"
            }`}
          >
            Past ({pastCount})
          </button>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="space-y-6">
            <BookingSkeleton />
            <BookingSkeleton />
          </div>
        )}

        {/* EMPTY */}
        {!loading && filteredBookings.length === 0 && (
          <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-[#A5D6A7]">
            <Calendar className="w-12 h-12 text-[#2E7D32] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              No Bookings Found
            </h2>
            <p className="text-gray-500 mb-6">
              You haven’t booked any stays yet.
            </p>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#2E7D32] text-white px-8 py-3 rounded-xl hover:bg-[#1B5E20]"
            >
              <Home size={20} /> Browse Properties
            </Link>
          </div>
        )}

        {/* BOOKINGS LIST */}
        <div className="space-y-6">
          {filteredBookings.map((b: any) => {
            if (!b.property) return null;

            const start = new Date(b.startDate);
            const end = new Date(b.endDate);

            return (
              <div
                key={b.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-[#A5D6A7] hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row gap-6">

                  {/* IMAGE */}
                  <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden">
                   <Image
  src={cleanImage(b.property?.image)}
  alt={b.property?.title}
  fill
  sizes="(max-width: 768px) 100vw, 200px"
  className="object-cover"
/>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {b.property?.title}
                      </h2>

                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <MapPin size={18} className="text-[#2E7D32]" />
                        {b.property?.location}
                      </div>

                      {/* DATES */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-[#E8F5E9] p-3 rounded-xl flex gap-3 items-center border border-[#A5D6A7]">
                          <Calendar className="text-[#1B5E20]" />
                          <div>
                            <p className="text-xs text-gray-600">Check-in</p>
                            <p className="font-bold">{start.toDateString()}</p>
                          </div>
                        </div>

                        <div className="bg-[#C8E6C9] p-3 rounded-xl flex gap-3 items-center border border-[#A5D6A7]">
                          <Calendar className="text-[#2E7D32]" />
                          <div>
                            <p className="text-xs text-gray-600">Check-out</p>
                            <p className="font-bold">{end.toDateString()}</p>
                          </div>
                        </div>
                      </div>

                      {/* PRICE */}
                      <div className="flex items-center gap-2 mt-4">
                        <IndianRupee className="text-[#1B5E20]" />
                        <span className="font-bold">{b.property?.price}</span>
                        <span className="text-sm text-gray-500">/night</span>
                      </div>
                    </div>

                    {/* CANCEL BUTTON */}
                    <div className="mt-4">
                      <button
                        onClick={() => handleCancel(b.id)}
                        className="flex items-center gap-2 bg-[#FFEBEE] text-[#D32F2F] px-6 py-3 rounded-xl hover:bg-[#FFCDD2] border border-[#EF9A9A]"
                      >
                        <Trash2 size={18} /> Cancel Booking
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
