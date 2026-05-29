import type {Meta, StoryObj} from "@storybook/react";
import {Loading} from "./index";

const meta: Meta<typeof Loading> = {
    title: "Core/Loading",
    component: Loading,
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
