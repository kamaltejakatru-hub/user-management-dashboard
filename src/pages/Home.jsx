import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

function Home() {
  const {
    users,
    loading,
    error,
    searchTerm,
    sortOrder,
    setSearchTerm,
    setSortOrder,
  } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 4;

  const filteredUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });

    return sorted;
  }, [users, searchTerm, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOrder]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * usersPerPage;

    return filteredUsers.slice(
      startIndex,
      startIndex + usersPerPage
    );
  }, [filteredUsers, currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Navbar />

      <main className="container">
        <section className="controls">
          <SearchBar
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          <SortDropdown
            value={sortOrder}
            onChange={(event) =>
              setSortOrder(event.target.value)
            }
          />
        </section>

        {filteredUsers.length === 0 ? (
          <div className="no-users">
            <h2>No users found</h2>
          </div>
        ) : (
          <>
            <section className="user-list">
              {paginatedUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                />
              ))}
            </section>

            {filteredUsers.length > usersPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}

export default Home;