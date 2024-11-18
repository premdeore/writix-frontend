import React from "react";
import SearchBar from "./searchbar/SearchBar";
import "./home.css";
import NoteCards from "./cards/NoteCards";

const Home: React.FC = () => {
  return (
    <div>
      <div className="app-view">
        <SearchBar />
      </div>
      <div>
        <NoteCards />
      </div>
    </div>
  );
};

export default Home;
