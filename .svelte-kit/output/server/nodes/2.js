

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BHgR7egz.js","_app/immutable/chunks/C7ZFKefg.js","_app/immutable/chunks/BoyJjPm4.js","_app/immutable/chunks/DLqDF0le.js"];
export const stylesheets = ["_app/immutable/assets/2.BJ67zkOn.css"];
export const fonts = [];
