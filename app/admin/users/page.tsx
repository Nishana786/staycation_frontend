import { API } from "../../utils/api";

async function getUsers() {
  const res = await fetch(`${API}/users`, { cache: "no-store" });
  return res.json();
}

export default async function AdminUsers() {
  const users = await getUsers();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u: any) => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
