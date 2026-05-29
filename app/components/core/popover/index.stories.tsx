import type {Meta, StoryObj} from "@storybook/react";
import {Popover} from "./index";

const meta: Meta<typeof Popover> = {
    title: "Core/Popover",
    component: Popover,
    decorators: [
        Story => (
            <div style={{position: "relative", width: 200, height: 200}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    args: {
        dismiss: () => {},
        items: [
            {icon: "Edit", text: "수정", onClick: () => {}},
            {icon: "Copy", text: "복사", onClick: () => {}},
            {icon: "Trash", text: "삭제", type: "destructive", onClick: () => {}},
        ],
    },
};
