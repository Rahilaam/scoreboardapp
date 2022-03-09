import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  
//   const randomizeScore=()=>{
//       props.randomScore(props.id)
//   }



  return (
    <div>
      <li className="Player">
        <p>
          {props.name} (score:{props.score})
          <button onClick={onClickIncrement}>Increment</button>
          {/* <button onClick={randomizeScore}>Randomize score</button> */}
        </p>
      </li>
    </div>
  );
}
