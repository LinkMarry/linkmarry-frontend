import type {StorybookConfig} from "@storybook/react-vite";
import type {Plugin} from "vite";

function isReactRouterPlugin(plugin: Plugin | false | undefined | null): boolean {
    if (!plugin || typeof plugin !== "object") return false;
    const name = "name" in plugin ? String(plugin.name) : "";
    return name.includes("react-router");
}

const config: StorybookConfig = {
    stories: ["../app/components/core/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
    framework: {
        name: "@storybook/react-vite",
        options: {
            builder: {
                viteConfigPath: "./vite.storybook.ts",
            },
        },
    },
    async viteFinal(config) {
        return config;
    },
};

export default config;
