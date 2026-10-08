export default function RoomCard({ room }) {
  return (
    <div className="room-card">

      <div className="room-header">
        <h2>
          {room.name}
        </h2>

        <span
          className={`status ${
            room.available
              ? "status-available"
              : "status-unavailable"
          }`}
        >
          {room.available ? "Available" : "Occupied"}
        </span>
      </div>

      <div className="room-details">
        <p>
          <strong>Building:</strong> {room.building}
        </p>

        <p>
          <strong>Capacity:</strong> {room.capacity} students
        </p>
      </div>

      <button
        disabled={!room.available}
        className="room-button"
      >
        {room.available ? "Available for Booking" : "Currently Unavailable"}
      </button>

    </div>
  )
}

