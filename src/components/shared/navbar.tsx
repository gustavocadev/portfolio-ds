import { component$, useSignal } from "@builder.io/qwik";
import { Button } from "./button";

export const Navbar = component$(() => {
  const links = useSignal(["Home", "About", "Contact"]);
  return (
    <nav class="flex items-center justify-between px-[16px] pt-8 lg:px-[128px]">
      <h2 class="text-3xl font-bold uppercase">Logo</h2>

      <ul class="hidden gap-11 lg:flex">
        {links.value.map((link) => (
          <li key={link}>
            <a href="" class="font-semibold uppercase">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <Button>DESCARGAR CURRÍCULUM</Button>
    </nav>
  );
});
