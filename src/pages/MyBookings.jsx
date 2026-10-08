import BookingCard from "../components/BookingCard"

export default function MyBookings({ bookings }) {

  return (
    <div className="container">

      <h1 className="page-title">
        My Bookings
      </h1>

      <p className="page-description">
        View your submitted study room bookings.
      </p>

      {bookings.length === 0 ? (

        <div className="empty-message">
          <p>
            You don't have any bookings yet.
          </p>
        </div>

      ) : (

        <div className="booking-grid">

          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))}

        </div>
      )}

    </div>
  )}
  