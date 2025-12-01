"use client";

import { useEffect, useState } from "react";
import { API } from "../../../../utils/api";

export default function EditProperty({ params }: any) {
  const id = params.id;

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`${API}/properties/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  async function update(e: any) {
    e.preventDefault();

    await fetch(`${API}/properties/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Updated Successfully");
  }

  if (!data) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Property</h1>

      <form onSubmit={update} className="flex flex-col gap-4">

        <input className="border p-2"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })} />

        <input className="border p-2"
          value={data.location}
          onChange={(e) => setData({ ...data, location: e.target.value })} />

        <input className="border p-2"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })} />

        <input className="border p-2"
          value={data.bedrooms}
          onChange={(e) => setData({ ...data, bedrooms: e.target.value })} />

        <input className="border p-2"
          value={data.image}
          onChange={(e) => setData({ ...data, image: e.target.value })} />

        <button className="bg-yellow-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
