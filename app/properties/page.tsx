import { API } from "../utils/api";
import {
  MapPin,
  IndianRupee,
  BedDouble,
  Bath,
  Users,
  Star,
  Home,
  Wifi,
  Car,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getProperties() {
  const res = await fetch(`${API}/properties`, { cache: "no-store" });
  return res.json();
}

export default async function PropertiesPage() {
  const list = await getProperties();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F5E9] to-[#C8E6C9]">

      {/* HERO HEADER */}
      <div className="relative bg-linear-to-r from-[#2E7D32] to-[#2E7D32] text-white py-16 px-6 mb-12 shadow-xl">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-8 h-8 text-white" />
            <h1 className="text-5xl font-extrabold tracking-tight">
              Discover Nature Stays
            </h1>
          </div>

          <p className="text-xl text-green-100 max-w-2xl">
            Find peaceful homes surrounded by fresh air, greenery, and a touch of nature.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{list.length}+</div>
                <div className="text-sm text-green-100">Properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROPERTIES GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((p: any) => (
            <Link
              key={p.id}
              href={`/properties/${p.id}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#A5D6A7] relative"
            >

              {/* FEATURED BADGE */}
              {p.featured && (
                <div className="absolute top-4 left-4 z-10 bg-linear-to-r from-[#4CAF50] border-[#A5D6A7] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Featured
                </div>
              )}

              {/* IMAGE */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={
                    p.image ||
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
                  }
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  alt={p.title}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-[#A5D6A7]">
                  <div className="flex items-center gap-1">
                    <IndianRupee size={16} className="text-[#1B5E20]" />
                    <span className="text-lg font-bold text-gray-800">
                      {p.price}
                    </span>
                    <span className="text-xs text-gray-500">/night</span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2E7D32] transition-colors line-clamp-1">
                  {p.title}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <div className="w-8 h-8 bg-[#E8F5E9] rounded-full flex items-center justify-center border border-[#A5D6A7]">
                    <MapPin size={16} className="text-[#1B5E20]" />
                  </div>
                  <span className="font-medium">{p.location}</span>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] text-gray-700 px-3 py-2 rounded-lg">
                    <BedDouble className="text-[#2E7D32]" size={18} />
                    <span className="text-sm font-semibold">{p.bedrooms || 3} Beds</span>
                  </div>

                  <div className="flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] text-gray-700 px-3 py-2 rounded-lg">
                    <Bath className="text-[#1B5E20]" size={18} />
                    <span className="text-sm font-semibold">{p.bathrooms || 2} Baths</span>
                  </div>
                </div>

                {/* Extra Features */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <div className="flex items-center gap-1 bg-[#C8E6C9] text-[#2E7D32] px-2 py-1 rounded-md text-xs font-medium border border-[#A5D6A7]">
                    <Wifi size={12} />
                    WiFi
                  </div>
                  <div className="flex items-center gap-1 bg-[#C8E6C9] text-[#1B5E20] px-2 py-1 rounded-md text-xs font-medium border border-[#A5D6A7]">
                    <Car size={12} />
                    Parking
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 pt-4 border-t border-[#A5D6A7]">
                  <span className="w-full bg-linear-to-r from-[#2E7D32] to-[#1B5E20] text-white font-bold py-3 rounded-xl block text-center">
                    View Details →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {list.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#A5D6A7]">
              <Home className="w-12 h-12 text-[#1B5E20]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No Properties Found
            </h3>
            <p className="text-gray-600">Check back soon for new listings!</p>
          </div>
        )}
      </div>
    </div>
  );
}
