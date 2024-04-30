import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header class="grid grid-cols-1 lg:grid-cols-2">
      <section class="order-2 flex flex-col justify-center gap-4 lg:order-1">
        <div>
          <h2 class="text-5xl font-semibold leading-[77px] lg:text-6xl lg:leading-[77px]">
            Hola a Todos!
          </h2>
          <h1 class="text-6xl font-bold leading-[95px] lg:text-7xl lg:leading-[95px]">
            Soy Gustavo
          </h1>
        </div>
        <p class="w-full break-words text-base lg:w-7/12">
          Una Frontend Developer que le encanta implementar diseños que inspiran
          y atraen a las personas.
        </p>
      </section>
      <section class="order-1 lg:order-2">
        <figure class="mx-auto">
          <img src="/person.png" alt="" class="w-full" />
        </figure>
      </section>
    </header>
  );
});
