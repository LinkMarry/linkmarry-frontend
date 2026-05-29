import type {Meta, StoryObj} from "@storybook/react";
import {ClientOnly} from "./index";

const meta: Meta<typeof ClientOnly> = {
    title: "Components/ClientOnly",
    component: ClientOnly,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
