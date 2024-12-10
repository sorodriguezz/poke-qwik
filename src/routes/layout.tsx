import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";
// import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  // useStyles$(styles);
  return (
    <>
      <ul class="m-5">
        <li>
          <Link href="/">Pokémon</Link>
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
    </>
  );
});
