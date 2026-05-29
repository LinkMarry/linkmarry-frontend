import type {Meta, StoryObj} from "@storybook/react";
import {Logo} from "./index";

const meta: Meta<typeof Logo> = {
    title: "Components/Logo",
    component: Logo,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
