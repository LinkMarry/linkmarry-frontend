import type {Meta, StoryObj} from "@storybook/react";
import {LoadingOverlay} from "./index";

const meta: Meta<typeof LoadingOverlay> = {
    title: "Core/LoadingOverlay",
    component: LoadingOverlay,
    decorators: [
        Story => (
            <div style={{position: "relative", width: 320, height: 200, background: "var(--g-100)"}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {};
