export default function BookingCard({ booking }) {
  return (
    <div className="booking-card">

      <h2>
        {booking.room}
      </h2>

      <div className="booking-details">
        <p>
          <strong>Student:</strong> {booking.studentName}
        </p>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <p>
          <strong>Time:</strong> {booking.time}
        </p>

        <p>
          <strong>Students:</strong> {booking.numberOfStudents}
        </p>
      </div>

      <div>
        <span className="booking-status">
          Booking Submitted
        </span>
      </div>

    </div>
  )
}

