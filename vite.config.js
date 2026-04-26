// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // Build settings
    build: {
        ssr: false, // SSR ko completely disable kar deta hai
    },

    // Agar aapko specific packages ko SSR se bachana ho
    ssr: {
        noExternal: ['masonry-layout'], // masonry-layout ko SSR me include mat karo
    },

    // Optional: agar Angular ke saath plugins use kar rahe ho
    plugins: [
        // yahan Angular/Vite plugin add karo agar use karte ho
    ]
});
