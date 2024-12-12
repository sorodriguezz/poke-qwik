import { $, component$, useContext } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";
import { PokemonGameContext } from "~/context";

export default component$(() => {
  const nav = useNavigate();

  const pokemonGame = useContext(PokemonGameContext);

  const changePokemonId = $(() => {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;
    pokemonGame.pokemonId = randomNumber;
    pokemonGame.isPokemonVisible = true;
  });

  const changeShowBackIamge = $(
    () => (pokemonGame.showBackImage = !pokemonGame.showBackImage),
  );

  const changeShowVisibileImage = $(
    () => (pokemonGame.isPokemonVisible = !pokemonGame.isPokemonVisible),
  );

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonGame.pokemonId}/`);
  });

  return (
    <>
      <span class="pokemon-title mt-12 text-2xl">¿Quién es ese Pokémon?</span>
      {/* <span class="text-9xl">{pokemonId}</span> */}

      <div onClick$={() => goToPokemon()}>
        <PokemonImage
          id={pokemonGame.pokemonId}
          size={400}
          backImagen={pokemonGame.showBackImage}
          isVisible={pokemonGame.isPokemonVisible}
        />
      </div>

      <div class="mt-2">
        <button onClick$={() => changePokemonId()} class="btn btn-primary mr-2">
          Siguiente
        </button>
        <button
          onClick$={() => changeShowBackIamge()}
          class="btn btn-primary mr-2"
        >
          Voltear
        </button>
        <button
          onClick$={() => changeShowVisibileImage()}
          class="btn btn-primary mr-2"
        >
          Revelar
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Aplicación en Qwik",
    },
  ],
};
