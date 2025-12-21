import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import wyw from '@wyw-in-js/vite';

export default defineConfig({
    plugins: [
        reactRouter(),
        tsconfigPaths(),
        wyw({
            include: ['**/*.{ts,tsx}'],
            babelOptions: {
                presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
        }),
    ],
    ssr: {
        noExternal: ["react-helmet-async"]
    },
    build: {
        outDir: 'build/web',
        emptyOutDir: true
    }
});
