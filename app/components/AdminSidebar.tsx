import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 space-y-6">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <Link href="/admin/dashboard" className="block hover:text-gray-300">
        Dashboard
      </Link>
      <Link href="/admin/properties" className="block hover:text-gray-300">
        Properties
      </Link>
      <Link href="/admin/bookings" className="block hover:text-gray-300">
        Bookings
      </Link>
      <Link href="/admin/users" className="block hover:text-gray-300">
        Users
      </Link>
    </div>
  );
}
