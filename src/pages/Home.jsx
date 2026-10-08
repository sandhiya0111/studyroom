import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            Campus Study Room Booking System
          </h1>

          <p>
            Find and book study rooms easily for group discussions,
            project work, and study sessions.
          </p>

          <div className="hero-buttons">

            <Link
              to="/rooms"
              className="btn btn-primary"
            >
              View Rooms
            </Link>

            <Link
              to="/book"
              className="btn btn-secondary"
            >
              Book a Room
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="container">

          <h2 className="section-title">
            Why Use Our System?
          </h2>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>
                Find Rooms
              </h3>
              <p>
                Quickly search for suitable study rooms.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>
                Book Rooms
              </h3>
              <p>
                Submit a booking request easily.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>
                Track Bookings
              </h3>
              <p>
                View all your submitted bookings.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

