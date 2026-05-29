import type {Meta, StoryObj} from "@storybook/react";
import {HelmetMetaTags} from "./index";

const meta: Meta<typeof HelmetMetaTags> = {
    title: "Components/HelmetMetaTags",
    component: HelmetMetaTags,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
