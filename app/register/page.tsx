"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill all the fields!");
      return;
    }

    const res = await fetch("https://staycation-api-1.onrender.com/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    console.log("Register Response:", data);

    if (res.ok) {
      alert("Registration Successful! Please login.");
      router.push("/login");
    } else {
      alert(data.message || "Registration failed");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        {/* TITLE */}
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#2E7D32" }}
        >
          Create Account
        </h1>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2"
            
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2"
          
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            className="w-full border border-gray-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2"
           
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full text-white py-3 rounded-lg transition font-semibold shadow-lg"
          style={{ backgroundColor: "#2E7D32" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1B5E20")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#2E7D32")
          }
        >
          Register
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?
          <a
            href="/login"
            className="font-semibold ml-1"
            style={{ color: "#2E7D32" }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
