/**
 * vite.config.js
 *
 * Vite configuration for the Agato React application.
 *
 * The React plugin enables proper JSX transformation and
 * React-specific development features such as Fast Refresh.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [
        react()
    ],

    server: {
        host: "0.0.0.0",
        port: 5173
    }
});