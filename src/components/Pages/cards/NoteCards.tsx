import React from "react";
import "./noteCards.css";

const NoteCards: React.FC = () => {
  const arr = Array.from({ length: 15 }, (_, i) => i + 1); // Dynamic array [1, 2, 3, ..., 15]

  return (
    <div className="cards-container-vertical">
      {arr.map((item) => (
        <div key={item} className="latest-cards">
          NoteCard {item}
        </div>
      ))}
    </div>
  );
};

export default NoteCards;
