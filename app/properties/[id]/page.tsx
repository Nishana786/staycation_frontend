// app/properties/[id]/page.tsx

import BookingForm from "../../components/BookingForm";
import { API } from "../../utils/api";
import {
  MapPin,
  BedDouble,
  Bath,
  Users,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Star,
  Home,
  CheckCircle,
  IndianRupee,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Params {
  id: string;
}

async function getProperty(id: string) {
  try {
    const res = await fetch(`${API}/properties/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }
    return await res.json();
  } catch (err) {
    return null;
  }
}

export default async function PropertyDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E8F5E9]">
        <div className="text-center">
          <div className="w-24 h-24 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-12 h-12 text-[#2E7D32]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-2">Property Not Found</h2>
          <p className="text-gray-600 mb-6">Try selecting another property.</p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-[#2E7D32] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition"
          >
            <ArrowLeft size={20} />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: Wifi, label: "Free WiFi", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]" },
    { icon: Car, label: "Parking", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]" },
    { icon: Coffee, label: "Kitchen", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]" },
    { icon: Tv, label: "Smart TV", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]" },
    { icon: Wind, label: "Air Conditioning", color: "text-[#2E7D32]", bg: "bg-[#E8F5E9]" },
  ];

  const highlights = [
    "Prime location — great for travelers",
    "Rated 4.9 for cleanliness & comfort",
    "Flexible cancellation",
    "Self check-in available",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F5E9] to-[#C8E6C9]">
      
      {/* Header Bar */}
      <div className="bg-white border-b border-[#C8E6C9] sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-[#2E7D32] hover:text-[#1B5E20] font-semibold transition"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-3">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-3">
                {property.title}
              </h1>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={20} className="text-[#2E7D32]" />
                  <span className="text-lg font-medium">{property.location}</span>
                </div>

                <div className="flex items-center gap-1 bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9]">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-800">4.9</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-linear-to-r from-[#2E7D32] to-[#1B5E20] text-white px-6 py-3 rounded-2xl shadow-md">
              <div className="flex items-center gap-2">
                <IndianRupee size={24} />
                <span className="text-3xl font-bold">{property.price}</span>
                <span className="text-green-100">/ night</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={property.image}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#2E7D32] text-white px-4 py-2 rounded-full shadow-md font-semibold">
              Featured
            </div>
          </div>

          {/* Side images */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
              "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-56 md:h-60 rounded-xl overflow-hidden group shadow"
              >
                <img
                  src={`${src}?q=80&w=2070`}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* LEFT Column */}
          <div className="lg:col-span-2 space-y-10">

            {/* Details */}
            <div className="bg-white p-8 rounded-2xl border border-[#C8E6C9] shadow">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">
                Property Details
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* Beds */}
                <div className="flex items-center gap-3 bg-[#E8F5E9] p-4 rounded-xl border border-[#C8E6C9]">
                  <BedDouble className="text-[#2E7D32]" size={24} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                </div>

                {/* Baths */}
                <div className="flex items-center gap-3 bg-[#E8F5E9] p-4 rounded-xl border border-[#C8E6C9]">
                  <Bath className="text-[#2E7D32]" size={24} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex items-center gap-3 bg-[#E8F5E9] p-4 rounded-xl border border-[#C8E6C9]">
                  <Users className="text-[#2E7D32]" size={24} />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {property.guests}
                    </div>
                    <div className="text-sm text-gray-600">Guests</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white p-8 rounded-2xl border border-[#C8E6C9] shadow">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">
                Highlights
              </h2>

              <div className="space-y-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#2E7D32]" size={20} />
                    <span className="text-gray-700">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-2xl border border-[#C8E6C9] shadow">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((am, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 ${am.bg} p-4 rounded-xl border border-[#C8E6C9]`}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow">
                      <am.icon className={am.color} size={20} />
                    </div>
                    <span className="font-semibold text-gray-800">{am.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl border border-[#C8E6C9] shadow">
              <h2 className="text-2xl font-bold text-[#1B5E20] mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description ||
                  "Enjoy a peaceful and relaxing stay surrounded by nature. This home offers comfort, design, and luxury amenities in a calming environment."}
              </p>
            </div>

          </div>

          {/* RIGHT Column – Booking Card */}
          <div>
            <div className="sticky top-24 bg-white p-8 rounded-2xl border border-[#C8E6C9] shadow-lg">
              <BookingForm property={property} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
