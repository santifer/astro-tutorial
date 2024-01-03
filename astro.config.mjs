import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://stirring-meringue-8ff1cc.netlify.app/',
  integrations: [preact()]
});