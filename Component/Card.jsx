import { useState } from "react";

const initialData = [
  { id: 1, name: "Iron Man", actor: "Robert Downey Jr" },
  { id: 2, name: "Captain America", actor: "Chris Evans" },
  { id: 3, name: "Thor", actor: "Chris Hemsworth" },
  { id: 4, name: "Black Widow", actor: "Scarlett Johansson" },
];

const Card = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <h3>{item.actor}</h3>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button>Edit</button>
      <hr />
    </div>
  );
};
function CardList() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const filteredActor = data.filter((actor) =>
    actor.actor.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setSearch(searchInput);
  };
  const handleDelete = (id) => {
    setData(data.filter((movie) => movie.id !== id)); // Remove the movie with the matching ID
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchInput.toLowerCase()}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        Filtered Actor:
        {search ? (
          filteredActor.map((actor) => (
            <Card
              key={actor.id}
              item={actor}
              onDelete={handleDelete}
              onEdit={handleDelete}
            />
          ))
        ) : (
          <p>Start typing to search actors...</p>
        )}
      </div>
    </>
  );
}

export default CardList;
