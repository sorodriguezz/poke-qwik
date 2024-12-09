import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal<number>(1); // para primitivos
  const showBackImage = useSignal<boolean>(false);
  // const pokemonId = useStore(); // para objecto y arreglos

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value = pokemonId.value + value;
  });

  const changeShowBackIamge = $(() => {showBackImage.value = !showBackImage.value;});

  return (
    <>
      <span class="mt-12 text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} size={400} backImagen={showBackImage.value} />

      <div class="mt-2">
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button
          onClick$={() => changePokemonId(1)}
          class="btn btn-primary mr-2"
        >
          Siguiente
        </button>
        <button
          onClick$={() => changeShowBackIamge()}
          class="btn btn-primary mr-2"
        >
          Voltear
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
