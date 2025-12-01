import { API } from "../../utils/api";

async function getBookings() {
  const res = await fetch(`${API}/bookings`, { cache: "no-store" });
  const data = await res.json();
  console.log("ADMIN BOOKINGS RESPONSE:", data); 
  return data;
}


export default async function AdminBookings() {
  const bookings = await getBookings();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>

      {bookings.length === 0 && (
        <p className="text-gray-600">No bookings found</p>
      )}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Property</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b: any) => (
            <tr key={b.id}>
              <td className="border p-2">{b.id}</td>
              <td className="border p-2">{b.user?.name}</td>
              <td className="border p-2">{b.property?.title}</td>
              <td className="border p-2">
                {b.startDate} - {b.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
