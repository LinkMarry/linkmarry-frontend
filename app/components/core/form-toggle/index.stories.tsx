import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {FormToggle} from "./index";

const meta: Meta<typeof FormToggle> = {
    title: "Core/FormToggle",
    component: FormToggle,
    decorators: [
        Story => (
            <div style={{width: 320}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof FormToggle>;

export const Default: Story = {
    render: function Render() {
        const [checked, setChecked] = useState(false);
        return <FormToggle label="알림 받기" checked={checked} OnChange={setChecked} />;
    },
};
