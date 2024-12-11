import { component$ } from "@builder.io/qwik";
import { type RequestEventLoader, routeLoader$ } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export const usePokemonId = routeLoader$<number>(
  ({ params, redirect }: RequestEventLoader) => {
    const id = Number(params.id);

    if (isNaN(id)) throw redirect(301, "/");
    if (id <= 0) throw redirect(301, "/");
    if (id > 1025) throw redirect(301, "/");

    return id;
  },
);

export default component$(() => {
  // const loc = useLocation();
  const pokemonId = usePokemonId();

  return (
    <>
      {/* <span class="text-5xl">Pokemon: {loc.params.id}</span> */}
      <span class="text-5xl">Pokemon: {pokemonId}</span>

      <PokemonImage id={pokemonId.value} />
    </>
  );
});
