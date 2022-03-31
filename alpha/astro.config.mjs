import { defineConfig } from "astro/config"
import { resolve } from "path"
import react from "@astrojs/react"
import svelte from "@astrojs/svelte"

export default defineConfig({
  projectRoot: '.',
  // https://docs.astro.build/en/reference/configuration-reference/
  buildOptions: {
    site: "https://in-our-hands.com",
    sitemap: true
  },
  devOptions: {
    hostname: "0.0.0.0",
  },
  integrations: [react(), svelte()],
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
        "components": resolve("./src/components"),
        "layouts": resolve("./src/layouts"),
        "lib": resolve("./src/lib"),
        "pages": resolve("./src/pages"),
        "styles": resolve("./src/styles")
      }
    }
  }
})
