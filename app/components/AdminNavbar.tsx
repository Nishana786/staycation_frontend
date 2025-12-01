"use client";

import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  }

  return (
    <div className="w-full flex items-center justify-between bg-white shadow p-4 mb-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded bg-red-600 text-white text-sm"
      >
        Logout
      </button>
    </div>
  );
}
