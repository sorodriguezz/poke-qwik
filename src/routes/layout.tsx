import { component$, Slot } from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";
import { PokemonProvider } from "~/context";
// import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  // useStyles$(styles);

  return (
    <PokemonProvider>
      <ul class="m-5">
        <li>
          <Link href="/">Pokémon</Link>
        </li>
        <li>
          <Link href="/counter">CounterHook</Link>
        </li>
        <li>
          <Link href="/pokemons/list-ssr/">SSR - List</Link>
        </li>
        <li>
          <Link href="/pokemons/list-client/">Client - List</Link>
        </li>
      </ul>
      <main class="mt-12 flex flex-col items-center justify-center">
        <Slot />
      </main>
    </PokemonProvider>
  );
});
