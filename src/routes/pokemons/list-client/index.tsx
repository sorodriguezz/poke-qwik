import {
  $,
  component$,
  useContext,
  useOnDocument,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";
import { PokemonListContext } from "~/context";
import { getSmallPokemons } from "~/helpers/get-small-pokemons";

export default component$(() => {
  // useStylesScoped$(styles); // da el estilo solo a este componente

  const pokemonState = useContext(PokemonListContext);

  // useVisibleTask$(async ({ track }) => {
  //   track(() => pokemonState.currentPage);
  //   const pokemons = await getSmallPokemons(pokemonState.currentPage * 10);
  //   pokemonState.pokemons = [...pokemonState.pokemons, ...pokemons];
  // });

  useTask$(async ({ track }) => {
    track(() => pokemonState.currentPage);

    pokemonState.isLoading = true;
    const pokemons = await getSmallPokemons(pokemonState.currentPage * 10, 30);
    pokemonState.pokemons = [...pokemonState.pokemons, ...pokemons];
    pokemonState.isLoading = false;
  });

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (
        currentScroll + 200 >= maxScroll &&
        pokemonState.isLoading === false
      ) {
        pokemonState.currentPage++;
      }
    }),
  );

  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Página actual: {pokemonState.currentPage}</span>
        <span>Está cargando página: </span>
      </div>

      <div class="mt-10">
        {/* <button
          onClick$={() => pokemonState.currentPage--}
          class="btn btn-primary mr-2"
        >
          Anteriores
        </button> */}

        <button
          onClick$={() => pokemonState.currentPage++}
          class="btn btn-primary mr-2"
        >
          Siguiente
        </button>
      </div>

      <div class="mt-5 grid sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-6">
        {pokemonState.pokemons.map(({ name, id }) => (
          <div key={name} class="m-5 flex flex-col items-center justify-center">
            <PokemonImage id={id} />
            <span class="capitalize">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Client - List",
};
