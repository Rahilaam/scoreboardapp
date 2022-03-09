import Player from "./Player";

import React, { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";

const data = [
  { id: 1, name: "Violeta", score: 11 },
  { id: 2, name: "Eszter", score: 14 },
  { id: 3, name: "Jeroen v2", score: 4 },
  { id: 4, name: "Lisa", score: 42 },
];

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_player] = useState(data);
  const [sort_by, set_sort_by] = useState("score");

  // first "copy" the array
  // [...players]
  // then sort it with the `compare_score` callback function
  // players.sort(compare_score);
  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const incrementScore = (userId) => {
    const newArray = players.map((player, index) => {
      if (player.id === userId) {
        return { ...player, score: player.score + 1 };
      } else {
        return { ...player };
      }
    });

    set_player(newArray);
  };
  const reset = () => {
    const resetArray = players.map((player) => {
      return { ...player, score: 0 };
    });
    set_player(resetArray);
  };

  const randomScore = () => {
    const randomscoreplayers = players.map((player) => {
      return {
        ...player,
        score: Math.round(Math.random() * 1000),
      };
    });
    set_player(randomscoreplayers);
  };
  const addPlayer = (name) => {
    console.log("You are in add player", name);

    set_player([...players, { id: Math.random(), name, score: 0 }]);
  };

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <button onClick={reset}>reset</button>
      <button onClick={randomScore}>Randomize</button>
      <ul>
        {/* <Player name="Violeta" />
        <Player name="Eszter" />
        <Player name="Jeroen v2" />
        <Player name="Lisa" /> */}
        {players_sorted.map((player, index) => {
          return (
            <Player
              key={index}
              name={player.name}
              score={player.score}
              id={player.id}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
