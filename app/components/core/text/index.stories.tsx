import type {Meta, StoryObj} from "@storybook/react";
import {Text} from "./index";

const meta: Meta<typeof Text> = {
    title: "Core/Text",
    component: Text,
    args: {
        children: "가나다라마바사 ABCDEFG 12345",
        type: "p3",
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Bold: Story = {
    args: {bold: true},
};

export const Heading: Story = {
    args: {type: "h2"},
};
