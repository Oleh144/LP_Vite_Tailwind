import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	plugins: [tailwindcss()],
	base: "/LP_Vite_Tailwind/",
});
