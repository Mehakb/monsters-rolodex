import { useEffect, useState } from "react";
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(
      users => { setMonsters(users); setFilteredMonsters(users); }
    );
  }, []);

  const [searchField, setSearchField] = useState("");

  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase())))
  }, [searchField])

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={(e) => setSearchField(e.target.value)} placeholder="Search Monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;