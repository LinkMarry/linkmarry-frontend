import type {Meta, StoryObj} from "@storybook/react";
import {KakaoMapDialog} from "./index";

const meta: Meta<typeof KakaoMapDialog> = {
    title: "Components/KakaoMapDialog",
    component: KakaoMapDialog,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        show: true,
    },
};
