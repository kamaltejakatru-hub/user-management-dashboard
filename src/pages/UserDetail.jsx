import { useContext } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiBriefcase,
  FiGlobe,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { UserContext } from "../context/UserContext";

function UserDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    users,
    loading,
    error,
  } = useContext(UserContext);

  if (loading) {
    return (
      <div className="container">
        <h2>Loading user details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h2>{error}</h2>
      </div>
    );
  }

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return (
      <main className="container">
        <h2>User not found</h2>

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />

          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="container">
      <section className="detail-card">
        <h1>{user.name}</h1>

        <div className="detail-row">
          <strong>
            <FiMail />

            Email
          </strong>

          <span>{user.email}</span>
        </div>

        <div className="detail-row">
          <strong>
            <FiPhone />

            Phone
          </strong>

          <span>{user.phone}</span>
        </div>

        <div className="detail-row">
          <strong>
            <FiBriefcase />

            Company
          </strong>

          <span>{user.company.name}</span>
        </div>

        <div className="detail-row">
          <strong>
            <FiGlobe />

            Website
          </strong>

          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </div>

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />

          Go Back
        </button>
      </section>
    </main>
  );
}

export default UserDetail;