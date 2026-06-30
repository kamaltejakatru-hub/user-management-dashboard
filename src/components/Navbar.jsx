import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div>
          <h1 className="logo">
            User Management Dashboard
          </h1>

          <p className="subtitle">
            Manage, Search, and Explore User Information Efficiently
          </p>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;