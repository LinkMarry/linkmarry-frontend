import type {Meta, StoryObj} from "@storybook/react";
import {Input} from "./index";

const meta: Meta<typeof Input> = {
    title: "Core/Input",
    component: Input,
    decorators: [
        Story => (
            <div style={{width: 320}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {
    args: {placeholder: "이름을 입력하세요"},
};

export const WithPrefix: Story = {
    args: {placeholder: "전화번호", prefix: "+82"},
};

export const WithoutLabel: Story = {
    args: {placeholder: "검색", hasLabel: false},
};
