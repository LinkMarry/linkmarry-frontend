import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {Toggle} from "./index";

const meta: Meta<typeof Toggle> = {
    title: "Core/Toggle",
    component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    render: function Render() {
        const [checked, setChecked] = useState(false);
        return <Toggle checked={checked} OnChange={setChecked} />;
    },
};

export const On: Story = {
    render: () => <Toggle checked OnChange={() => {}} />,
};
