import type {Meta, StoryObj} from "@storybook/react";
import {NotificationDetailContent} from "./index";

const meta: Meta<typeof NotificationDetailContent> = {
    title: "Components/NotificationDetailContent",
    component: NotificationDetailContent,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
