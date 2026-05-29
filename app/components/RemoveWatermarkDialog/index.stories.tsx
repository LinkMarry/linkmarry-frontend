import type {Meta, StoryObj} from "@storybook/react";
import {RemoveWatermarkDialog} from "./index";

const meta: Meta<typeof RemoveWatermarkDialog> = {
    title: "Components/RemoveWatermarkDialog",
    component: RemoveWatermarkDialog,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        show: true,
    },
};
