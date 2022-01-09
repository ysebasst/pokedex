import Pokemon from 'interfaces/Pokemon'

export const createPokemon = (data: any): Pokemon => {
  return {
    name: data.name,
    image: data.sprites.other.home.front_default,
    stats: [
      {
        key: "NO.",
        value: data.id.toString().padStart(3, "000"),
      },
      {
        key: "LEVEL",
        value: 100,
      },
      {
        key: "TYPE",
        value: data.types[0].type.name,
      },
      {
        key: "HABILITY",
        value: data.abilities[0].ability.name,
      },
      {
        key: "HEIGHT",
        value: data.height,
      },
      {
        key: "WEIGHT",
        value: data.weight,
      },
    ],
  }
}