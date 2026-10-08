import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import BookRoom from "./pages/BookRoom"
import MyBookings from "./pages/MyBookings"

export default function App() {

  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("bookings")

    return savedBookings
      ? JSON.parse(savedBookings)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    )
  }, [bookings])

  const addBooking = (booking) => {
    setBookings((previousBookings) => [
      ...previousBookings,
      booking,
    ])
  }

  return (
    <BrowserRouter>

      <div className="app-shell">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/rooms"
            element={<Rooms />}
          />

          <Route
            path="/book"
            element={
              <BookRoom
                addBooking={addBooking}
              />
            }
          />

          <Route
            path="/my-bookings"
            element={
              <MyBookings
                bookings={bookings}
              />
            }
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

