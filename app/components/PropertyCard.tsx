import Link from "next/link";

export default function PropertyCard({ p }: any) {
  return (
    <Link href={`/properties/${p.id}`}>
      <div className="shadow p-4 rounded bg-white hover:shadow-lg transition cursor-pointer">
        <img src={p.image} className="w-full h-40 object-cover rounded" />
    
        <h2 className="font-semibold mt-2">{p.title}</h2>
        <p className="text-gray-500 text-sm">{p.location}</p>
        <p className="mt-1 text-blue-600 font-bold">₹{p.price}</p>
      </div>
    </Link>
  );
}
