import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "../../styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles); // da el estilo solo a este componente

  return <span>Hola Mundo</span>;
});

export const head: DocumentHead = {
  title: "Client - List",
};
