import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Campus Study Rooms
        </Link>

        <div className="nav-links">
          <Link
            to="/"
          >
            Home
          </Link>

          <Link
            to="/rooms"
          >
            Rooms
          </Link>

          <Link
            to="/book"
          >
            Book Room
          </Link>

          <Link
            to="/my-bookings"
          >
            My Bookings
          </Link>
        </div>

      </div>
    </nav>
  )
}

