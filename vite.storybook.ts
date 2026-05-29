import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import wyw from "@wyw-in-js/vite";

/** Storybook 전용 — react-router 플러그인 제외 */
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        wyw({
            include: ["**/*.{ts,tsx}"],
            babelOptions: {
                presets: ["@babel/preset-typescript", "@babel/preset-react", "@wyw-in-js/babel-preset"],
            },
        }),
    ],
});
