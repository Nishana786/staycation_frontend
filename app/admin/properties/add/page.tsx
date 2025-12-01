"use client";

import { useState } from "react";
import { API } from "../../../utils/api";

export default function AddProperty() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bed, setBed] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch(`${API}/properties`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, location, price, bedrooms: bed, image }),
    });

    alert("Property Added Successfully");
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input className="border p-2" placeholder="Title"
          value={title} onChange={(e) => setTitle(e.target.value)} />

        <input className="border p-2" placeholder="Location"
          value={location} onChange={(e) => setLocation(e.target.value)} />

        <input className="border p-2" placeholder="Price"
          value={price} onChange={(e) => setPrice(e.target.value)} />

        <input className="border p-2" placeholder="Bedrooms"
          value={bed} onChange={(e) => setBed(e.target.value)} />

        <input className="border p-2" placeholder="Image URL"
          value={image} onChange={(e) => setImage(e.target.value)} />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Property
        </button>
      </form>
    </div>
  );
}
