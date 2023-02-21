# UnoCSS with Svelte

## 1. Create Project
```bash
pnpm create vite unocss-with-svelte --template svelte-ts
cd unocss-with-svelte
ncu -u
pnpm install
```

## 2. Add Dependencies
```bash
pnpm add -D unocss @iconify-json/logos @unocss/core @unocss/preset-icons @unocss/preset-uno
pnpm add -D svelte-preprocess
# optional
pnpm add -D eslint eslint-plugin-svelte3 eslint-config-prettier prettier prettier-plugin-svelte @typescript-eslint/eslint-plugin
pnpm add -D vitest
```

## 3. Replace vite.config.ts with
```ts
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import UnoCSS from "unocss/vite"
import presetIcons from "@unocss/preset-icons"
import presetUno from "@unocss/preset-uno"
import { extractorSvelte } from "@unocss/core"

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte],
			shortcuts: [
				{ logo: "i-logos-svelte-icon w-6em h-6em transform transition-800 hover:rotate-180" },
				{ foo: "bg-yellow-400" },
				{ bar: "bg-green-400" },
			],
			presets: [
				presetUno(),
				presetIcons({
					extraProperties: {
						"display": "inline-block",
						"vertical-align": "middle",
					},
				}),
			],
		}),
		svelte(),
	],
});
```

## 4. Dev
```bash
pnpm dev
```