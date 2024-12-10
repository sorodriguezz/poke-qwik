import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const numRandom = Math.floor(Math.random() * 1025) + 1;
  const pokemonId = useSignal<number>(numRandom); // para primitivos
  const showBackImage = useSignal<boolean>(false);
  const showVisibileImage = useSignal<boolean>(false);

  const changePokemonId = $(() => {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;

    pokemonId.value = randomNumber;
  });

  const changeShowBackIamge = $(
    () => (showBackImage.value = !showBackImage.value),
  );

  const changeShowVisibileImage = $(
    () => (showVisibileImage.value = !showVisibileImage.value),
  );

  return (
    <>
      <span class="text-2xl pokemon-title">¿Quién es ese Pokémon?</span>
      {/* <span class="text-9xl">{pokemonId}</span> */}

      <PokemonImage
        id={pokemonId.value}
        size={400}
        backImagen={showBackImage.value}
        isVisible={showVisibileImage.value}
      />

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
