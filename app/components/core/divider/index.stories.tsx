import type {Meta, StoryObj} from "@storybook/react";
import {Divider} from "./index";

const meta: Meta<typeof Divider> = {
    title: "Core/Divider",
    component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => (
        <div style={{width: 320}}>
            <Divider size="small" />
            <div style={{height: 16}} />
            <Divider size="medium" />
            <div style={{height: 16}} />
            <Divider size="large" />
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div style={{display: "flex", height: 120, alignItems: "stretch"}}>
            <Divider direction="vertical" size="small" />
            <Divider direction="vertical" size="medium" />
            <Divider direction="vertical" size="large" />
        </div>
    ),
};
