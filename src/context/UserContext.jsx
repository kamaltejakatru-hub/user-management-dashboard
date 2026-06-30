import { createContext, useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchUsers();

        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}