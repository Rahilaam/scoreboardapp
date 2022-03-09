import React, { useState } from "react";
//import Player from "./Player";

export default function AddPlayerForm(props) {
  const [name, set_name] = useState(" ");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          onChange={(event) => {
            set_name(event.target.value);
          }}
          type="text"
          placeholder="Name"
          value={name}
        />{" "}
        <button
          onClick={() => {
            console.log("hi am button", name);
            props.addPlayer(name);
            set_name("");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
