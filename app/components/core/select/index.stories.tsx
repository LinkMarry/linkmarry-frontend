import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {Select} from "./index";

const meta: Meta<typeof Select> = {
    title: "Core/Select",
    component: Select,
    decorators: [
        Story => (
            <div style={{width: 240}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: function Render() {
        const [selected, setSelected] = useState<number | undefined>(undefined);
        return (
            <Select
                items={["서울", "부산", "대구", "인천"]}
                selected={selected}
                OnChange={setSelected}
                placeholder="지역 선택"
            />
        );
    },
};
