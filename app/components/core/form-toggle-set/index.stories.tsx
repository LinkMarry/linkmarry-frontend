import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {FormToggle} from "~/components/core/form-toggle";
import {FormToggleSet} from "./index";

const meta: Meta<typeof FormToggleSet> = {
    title: "Core/FormToggleSet",
    component: FormToggleSet,
    decorators: [
        Story => (
            <div style={{width: 320}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof FormToggleSet>;

export const Default: Story = {
    render: function Render() {
        const [a, setA] = useState(true);
        const [b, setB] = useState(false);
        return (
            <FormToggleSet>
                <FormToggle label="옵션 A" checked={a} OnChange={setA} />
                <FormToggle label="옵션 B" checked={b} OnChange={setB} />
            </FormToggleSet>
        );
    },
};
