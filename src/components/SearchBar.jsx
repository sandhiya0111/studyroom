export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">

      <label>
        Search Study Rooms
      </label>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by room name or building..."
        className="search-input"
      />

    </div>
  )
}
