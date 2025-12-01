export default function AdminDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/admin/properties" className="p-6 bg-blue-600 text-white rounded-lg text-center">
          🏡 Manage Properties
        </a>

        <a href="/admin/bookings" className="p-6 bg-green-600 text-white rounded-lg text-center">
          📅 Manage Bookings
        </a>

        <a href="/admin/users" className="p-6 bg-purple-600 text-white rounded-lg text-center">
          👤 Manage Users
        </a>
      </div>
    </div>
  );
}
