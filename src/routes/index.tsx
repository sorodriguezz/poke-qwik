import { $, component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const nav = useNavigate();

  const numRandom = Math.floor(Math.random() * 1025) + 1;
  const pokemonId = useSignal<number>(numRandom);
  const showBackImage = useSignal<boolean>(false);
  const showVisibileImage = useSignal<boolean>(true);

  const changePokemonId = $(() => {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;
    pokemonId.value = randomNumber;
    showVisibileImage.value = true;
  });

  const changeShowBackIamge = $(
    () => (showBackImage.value = !showBackImage.value),
  );

  const changeShowVisibileImage = $(
    () => (showVisibileImage.value = !showVisibileImage.value),
  );

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonId.value}/`);
  });

  return (
    <>
      <span class="pokemon-title mt-12 text-2xl">¿Quién es ese Pokémon?</span>
      {/* <span class="text-9xl">{pokemonId}</span> */}

      <div onClick$={() => goToPokemon()}>
        <PokemonImage
          id={pokemonId.value}
          size={400}
          backImagen={showBackImage.value}
          isVisible={showVisibileImage.value}
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
