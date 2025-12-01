import { API } from "../../utils/api";

async function getProperties() {
  const res = await fetch(`${API}/properties`, { cache: "no-store" });
  return res.json();
}

export default async function AdminProperties() {
  const properties = await getProperties();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">All Properties</h1>

      <a
        href="/admin/properties/add"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        + Add Property
      </a>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {properties.map((p: any) => (
          <div key={p.id} className="border p-4 rounded shadow">
            
            {/*  FIX: SAFE fallback image */}
            <img
              src={p.image || "/no-image.jpg"}
              className="w-full h-48 object-cover rounded"
              alt={p.title}
            />

            <h2 className="text-xl font-semibold mt-2">{p.title}</h2>
            <p className="text-gray-700">{p.location}</p>
            <p className="font-bold">₹ {p.price}</p>

            <div className="flex gap-2 mt-3">
              <a
                href={`/admin/properties/edit/${p.id}`}
                className="bg-yellow-500 text-white px-3 py-2 rounded"
              >
                Edit
              </a>

              <form action={`${API}/properties/${p.id}`} method="POST">
                <button className="bg-red-600 text-white px-3 py-2 rounded">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
