import { PokemonStyled } from './Pokemon.styles'

import PokemonInterface from 'interfaces/Pokemon'

interface Props {
  pokemon: PokemonInterface
}

export default function Pokemon({ pokemon }: Props) {
  const { name, image } = pokemon

  return (
    <PokemonStyled>
      <h1>{name}</h1>
      <img src={image} alt={`pokemon ${name}`} />
    </PokemonStyled>
  )
}
