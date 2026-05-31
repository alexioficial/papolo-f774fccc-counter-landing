import { e as escape_html } from "../../chunks/escaping.js";
function Counter($$renderer) {
  let count = 0;
  $$renderer.push(`<div class="counter svelte-dfcawr"><button class="btn svelte-dfcawr" aria-label="Decrement">−</button> <span class="display svelte-dfcawr">${escape_html(count)}</span> <button class="btn svelte-dfcawr" aria-label="Increment">+</button></div>`);
}
function _page($$renderer) {
  $$renderer.push(`<main class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">Papolo Counter</h1> <p class="subtitle svelte-1uha8ag">A minimal SvelteKit counter</p> `);
  Counter($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
