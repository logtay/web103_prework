import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="hero">
    <h1>Creatorverse</h1>
    <ul>
      <li>
        <Link to="/" role="button" className="secondary">
          View All Creators
        </Link>
      </li>
      <li>
        <Link to="/add" role="button" className="secondary">
          Add a Creator
        </Link>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Navbar;
