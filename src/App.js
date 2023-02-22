import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import data from "./data";
import Players from "./components/Players";
import FilteredPlayers from "./components/FilteredPlayers";

const App = () => {
  const [player, setPlayer] = useState(data);

  const filterPlayers = (position) => {
    if (position === "All Players") {
      setPlayer(data);
    } else {
      const updatedPlayer = data.filter((player) => {
        return player.position === position;
      });
      setPlayer(updatedPlayer);
    }
  };

  // conert array to set & set to array
  const playerPosition = [
    "All Players",
    ...new Set(
      data.map((player) => {
        return player.position;
      })
    ),
  ];

  return (
    <div className="main">
      <div className="logo-container">
        <h1 className="title">Real Madrid Squad</h1>
        <img
          src="https://img.icons8.com/color/256/real-madrid.png"
          alt="logo"
          className="logo"
        />
      </div>
      <Players filterPlayers={filterPlayers} playerPosition={playerPosition} />
      <FilteredPlayers players={player} />
    </div>
  );
};

export default App;
