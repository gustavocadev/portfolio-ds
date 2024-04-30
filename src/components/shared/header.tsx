import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="grid grid-cols-1 lg:grid-cols-2">
      <section class="flex flex-col justify-center gap-4">
        <div>
          <h2 class="text-6xl font-semibold leading-[77px]">Hola a Todos!</h2>
          <h1 class="text-7xl font-bold leading-[95px]">Soy Gustavo</h1>
        </div>
        <p class="w-full break-words text-base lg:w-7/12">
          Una Frontend Developer que le encanta implementar diseños que inspiran
          y atraen a las personas.
        </p>
      </section>
      <section>
        <figure class="mx-auto">
          <img src="/person.png" alt="" class="w-full" />
        </figure>
      </section>
    </header>
  );
});
