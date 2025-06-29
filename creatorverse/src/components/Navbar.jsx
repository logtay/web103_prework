import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="container" style={{ display: "block", textAlign: "center", marginBlock: "2rem" }}
    >
      <h1 style={{ margin: "0 0 1rem" }}>Creatorverse</h1>

      <ul
        style={{
          display: "inline-flex",
          gap: "0.75rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          <Link to="/" role="button">
            View All Creators
          </Link>
        </li>
        <li>
          <Link to="/add" role="button">
            Add a Creator
          </Link>
        </li>
      </ul>
    </nav>
  );
}
