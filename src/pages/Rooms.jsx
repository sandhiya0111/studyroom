import { useState } from "react"
import rooms from "../data/rooms"
import RoomCard from "../components/RoomCard"
import SearchBar from "../components/SearchBar"

export default function Rooms() {

  const [searchTerm, setSearchTerm] = useState("")

  const filteredRooms = rooms.filter((room) => {
    const searchText = searchTerm.toLowerCase()

    return (
      room.name.toLowerCase().includes(searchText) ||
      room.building.toLowerCase().includes(searchText)
    )
  })

  return (
    <div className="container">

      <h1 className="page-title">
        Study Rooms
      </h1>

      <p className="page-description">
        Find a suitable room for your study session.
      </p>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredRooms.length === 0 ? (

        <div className="empty-message">
          <p>
            No study rooms found.
          </p>
        </div>

      ) : (

        <div className="room-grid">

          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>

      )}

    </div>
  )
}
