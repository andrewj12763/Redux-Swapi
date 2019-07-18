import React from "react";

const Character = props => {
  return <li>{props.character.name} {"- "} {props.character.height} {"''"}</li>;
};

export default Character;