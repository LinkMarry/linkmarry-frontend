import type {Meta, StoryObj} from "@storybook/react";
import {Textarea} from "./index";

const meta: Meta<typeof Textarea> = {
    title: "Core/Textarea",
    component: Textarea,
    decorators: [
        Story => (
            <div style={{width: 320}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {placeholder: "메시지를 입력하세요"},
};
