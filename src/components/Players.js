import React from "react";

const Players = ({ filterPlayers, playerPosition }) => {
  return (
    <div>
      {/* categories */}
      <ul className="categories">
        {playerPosition.map((position, index) => {
          return (
            <li key={index} onClick={() => filterPlayers(position)}>
              {position}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Players;
