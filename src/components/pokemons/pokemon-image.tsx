import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  backImagen: boolean;
  isVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImagen = false, isVisible = false }: Props) => {
    const imageLoaded = useSignal(false);
    const back = backImagen ? "back/" : "";

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    return (
      <div
        class="m-12 flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <span class={{ hidden: imageLoaded.value }}>Cargando...</span>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${back}/${id}.png`}
          alt="Pokeom Sprite"
          width={size}
          height={size}
          onLoad$={() => (imageLoaded.value = true)}
          class={[
            { hidden: !imageLoaded.value, "brightness-0": isVisible },
            "transition-all",
          ]}
        />
        {/* <span class={{ hidden: !imageLoaded.value }}>{`${name}`}</span> */}
      </div>
    );
  },
);
