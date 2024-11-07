import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState();

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setname(res.data.name);
      setmoves(res.data.moves.length + " moves");
    }
    getdata();
  });
  return (
    <>
      <h1>
        You choose <span>{pokemon}</span> value
      </h1>
      <h1>
        My Name is <span>{name}</span>
      </h1>
      <h1>
        I have
        <span> {moves}</span>
      </h1>
      <select
        name=""
        id=""
        value={pokemon}
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default Pokemon;
