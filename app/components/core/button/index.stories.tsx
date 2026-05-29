import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./index";

const meta: Meta<typeof Button> = {
    title: "Core/Button",
    component: Button,
    args: {
        text: "버튼",
        size: "large",
        buttonType: "filled",
        enabled: true,
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {};

export const Outlined: Story = {
    args: {buttonType: "outlined"},
};

export const Tonal: Story = {
    args: {buttonType: "tonal"},
};

export const WithLeadingIcon: Story = {
    args: {leadingIcon: "AddLine"},
};

export const Disabled: Story = {
    args: {enabled: false},
};

export const Sizes: Story = {
    render: () => (
        <div style={{display: "flex", gap: 12, alignItems: "center"}}>
            <Button text="Large" size="large" />
            <Button text="Medium" size="medium" />
            <Button text="Small" size="small" />
        </div>
    ),
};
