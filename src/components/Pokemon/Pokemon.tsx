import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PokemonStyled,
  PokemonHeaderStyled,
  PokemonNameStyled,
  PokemonImageStyled,
  PokemonInfoStyled,
  PokemonStatStyled,
} from "./Pokemon.styles";

import PokemonInterface from "interfaces/Pokemon";
import { createPokemon } from "utlis/pokemon";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<PokemonInterface>({});

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const paramId = id ? id : 6;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${paramId}`);
      const data = await res.json();
      setPokemon(createPokemon(data));
    })();
  }, [id]);

  return (
    <PokemonStyled>
      <PokemonHeaderStyled>
        <PokemonNameStyled>{pokemon.name}</PokemonNameStyled>
        <PokemonImageStyled
          src={pokemon.image}
          alt={`pokemon ${pokemon.name}`}
        />
      </PokemonHeaderStyled>
      <PokemonInfoStyled>
        {pokemon.stats?.map((stat) => (
          <PokemonStatStyled key={stat.key}>
            <span>{stat.key}</span>
            <span>{stat.value}</span>
          </PokemonStatStyled>
        ))}
      </PokemonInfoStyled>
    </PokemonStyled>
  );
}
