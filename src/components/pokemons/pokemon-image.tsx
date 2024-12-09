import { component$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  backImagen: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImagen = false }: Props) => {
    return (
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${backImagen ? "back/" : ""}/${id}.png`}
        alt="Pokeom Sprite"
        width={size}
        height={size}
      />
    );
  },
);
