import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {Checkbox} from "./index";

const meta: Meta<typeof Checkbox> = {
    title: "Core/Checkbox",
    component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: function Render() {
        const [checked, setChecked] = useState(false);
        return <Checkbox checked={checked} OnChange={setChecked} label="동의합니다" />;
    },
};

export const Checked: Story = {
    render: () => <Checkbox checked OnChange={() => {}} label="선택됨" />,
};
