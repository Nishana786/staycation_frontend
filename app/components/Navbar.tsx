"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

 
  useEffect(() => {
    const token = localStorage.getItem("access_token");
   
    setLogged(!!token);
  });

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("access_token");
    setLogged(false);
    router.push("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
              STAYCATION
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                pathname === "/"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/properties"
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                pathname.includes("/properties")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Properties
            </Link>

            <Link
              href="/my-booking"
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                pathname === "/my-booking"
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              My Booking
            </Link>

        
            {logged ? (
              <button
                onClick={logout}
                className="ml-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    pathname === "/login"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/properties" onClick={() => setMenuOpen(false)}>
              Properties
            </Link>
            <Link href="/my-booking" onClick={() => setMenuOpen(false)}>
              My Booking
            </Link>

            {logged ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-red-600 font-semibold"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
