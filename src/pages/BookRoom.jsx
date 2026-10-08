import { useState } from "react"
import rooms from "../data/rooms"

export default function BookRoom({ addBooking }) {

  const [formData, setFormData] = useState({
    studentName: "",
    room: "",
    date: "",
    time: "",
    numberOfStudents: "",
  })

  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const booking = {
      id: Date.now(),
      ...formData,
    }

    addBooking(booking)

    setMessage("Booking request submitted successfully!")

    setFormData({
      studentName: "",
      room: "",
      date: "",
      time: "",
      numberOfStudents: "",
    })
  }

  return (
    <div className="container form-container">

      <h1 className="page-title">
        Book a Study Room
      </h1>

      <p className="page-description">
        Enter your details to submit a room booking request.
      </p>

      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="booking-form"
      >

        {/* Student Name */}
        <div className="form-group">
          <label>
            Student Name
          </label>

          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="form-control"
          />
        </div>

        {/* Room */}
        <div className="form-group">
          <label>
            Select Room
          </label>

          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">
              Select a room
            </option>

            {rooms
              .filter((room) => room.available)
              .map((room) => (
                <option
                  key={room.id}
                  value={room.name}
                >
                  {room.name} - {room.building}
                </option>
              ))}
          </select>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>
            Date
          </label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Time */}
        <div className="form-group">
          <label>
            Time
          </label>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        {/* Number of Students */}
        <div className="form-group">
          <label>
            Number of Students
          </label>

          <input
            type="number"
            name="numberOfStudents"
            value={formData.numberOfStudents}
            onChange={handleChange}
            min="1"
            required
            placeholder="Enter number of students"
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Submit Booking
        </button>

      </form>

    </div>
  )
}