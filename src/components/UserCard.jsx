import { memo } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiBriefcase,
  FiMail,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

const UserCard = memo(function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.id}`}
      className="user-card"
    >
      <div className="user-card-content">

        <h2>
          <FiUser className="card-icon" />
          {user.name}
        </h2>

        <p>
          <FiMail className="card-icon" />
          {user.email}
        </p>

        <p>
          <FiMapPin className="card-icon" />
          {user.address.city}
        </p>

        <div className="company-section">
          <FiBriefcase className="card-icon" />

          <div>
            <small>Company</small>

            <h4>{user.company.name}</h4>
          </div>
        </div>

        <div className="view-details">
          <span>View Details</span>

          <FiArrowRight />
        </div>

      </div>
    </Link>
  );
});

export default UserCard;