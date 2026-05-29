import type {Meta, StoryObj} from "@storybook/react";
import {ToolTip} from "./index";
import {Button} from "~/components/core/button";

const meta: Meta<typeof ToolTip> = {
    title: "Core/ToolTip",
    component: ToolTip,
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
    args: {
        content: "도움말 텍스트",
        children: <Button text="호버하세요" />,
    },
};
