import { Slot, component$ } from "@builder.io/qwik";

export const Button = component$(() => {
  return (
    <button class="rounded-full border-2 border-black bg-[#42E2B8] p-3 font-semibold uppercase">
      <Slot />
    </button>
  );
});
