import { component$ } from "@builder.io/qwik";
import { useCounter } from "~/hooks/use-counter";

export default component$(() => {
  const { counter, decrease, increase } = useCounter(15);

  return (
    <>
      <span class="text-2xl">Counter</span>
      <span class="text-7xl">{counter}</span>

      <div>
        <button onClick$={decrease} class="btn btn-primary mr-2">
          -1
        </button>
        <button onClick$={increase} class="btn btn-primary mr-2">
          +1
        </button>
      </div>
    </>
  );
});
