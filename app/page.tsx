import {
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHome,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F5E9] to-[#C8E6C9]">
      {/* HERO SECTION with Background Image */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-700/60" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300/20 rounded-full blur-3xl animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 text-white text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300">
              Dream Stay
            </span>
          </h1>

          <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover luxury homes, cozy apartments, and stunning villas.
            Your perfect escape awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="group bg-white text-[#1B5E20] font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-green-500/40 hover:bg-[#F1F8F4] transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center gap-2"
            >
              <FaHome className="group-hover:scale-110 transition-transform" />
              Explore Properties
            </Link>

            <Link
              href="/my-bookings"
              className="group bg-linear-to-r from-[#2E7D32] to-[#1B5E20] text-white font-bold px-10 py-4 rounded-xl shadow-2xl hover:shadow-green-600/50 hover:from-[#1B5E20] hover:to-[#2E7D32] transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center gap-2"
            >
              Book Now
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* 🏠 FEATURED PROPERTIES PREVIEW */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured <span className="text-[#2E7D32]">Properties</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked homes for your next adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A5D6A7]/70">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071"
                  alt="Modern Villa"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#2E7D32] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaMapMarkerAlt className="text-[#2E7D32]" />
                  <span className="text-sm">Miami Beach, FL</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Modern Beach Villa
                </h3>
                <p className="text-gray-600 mb-4">
                  Stunning ocean views with private pool
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#2E7D32]">
                    $450
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A5D6A7]/70">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
                  alt="Luxury Apartment"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  New
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaMapMarkerAlt className="text-[#2E7D32]" />
                  <span className="text-sm">New York, NY</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Downtown Penthouse
                </h3>
                <p className="text-gray-600 mb-4">
                  Skyline views in the heart of the city
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#2E7D32]">
                    $380
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#A5D6A7]/70">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
                  alt="Cozy Cottage"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <FaMapMarkerAlt className="text-[#2E7D32]" />
                  <span className="text-sm">Aspen, CO</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Mountain Retreat
                </h3>
                <p className="text-gray-600 mb-4">
                  Cozy cabin surrounded by nature
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#2E7D32]">
                    $290
                    <span className="text-sm text-gray-500">/night</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 px-6 bg-linear-to-br from-[#E8F5E9] to-[#C8E6C9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Why Choose <span className="text-[#2E7D32]"> STAYCATION?</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Experience the difference with our premium service
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#2E7D32]">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaCheckCircle className="text-[#2E7D32] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#2E7D32] text-center">
                Premium Comfort
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Handpicked properties that feel like a home away from home. Every
                detail matters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaClock className="text-emerald-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-600 text-center">
                Instant Booking
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Book in seconds with our streamlined process. No waiting, no hassle.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-600">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">
                100% Secure
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Bank-level encryption protects your data and payments. Your safety
                is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#2E7D32] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Properties</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#2E7D32] mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Happy Guests</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#2E7D32] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Cities</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#2E7D32] mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-emerald-900/90 to-emerald-700/90" />
        </div>

        <div className="relative z-10 text-white text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Dream Stay?
          </h2>
          <p className="text-xl opacity-95 mb-10 max-w-2xl mx-auto">
            Join thousands of happy travelers and find your perfect escape today.
          </p>

          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-white text-[#1B5E20] font-bold px-12 py-4 rounded-xl shadow-2xl hover:bg-[#F1F8F4] hover:shadow-green-300/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <FaHome />
            Start Exploring Now
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
