import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetAttributify, presetTypography} from "unocss";

export default defineConfig({
  plugins: [
    UnoCSS({
      extractors: [
        extractorSvelte(),
      ],
      shortcuts: [
        { logo: "i-logos-svelte-icon w-6em h-6em transform transition-800 hover:rotate-180" },
        { foo: "bg-yellow-400" },
        { bar: "bg-green-400" }
      ],
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
        presetIcons({
          extraProperties: {
            "display": "inline-block",
            "vertical-align": "middle"
          }
        }),
      ]
    }),
    svelte()
  ]
});
