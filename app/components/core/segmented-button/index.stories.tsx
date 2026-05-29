import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {SegmentedButton} from "./index";

const meta: Meta<typeof SegmentedButton> = {
    title: "Core/SegmentedButton",
    component: SegmentedButton,
    decorators: [
        Story => (
            <div style={{width: 360}}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof SegmentedButton>;

export const Default: Story = {
    render: function Render() {
        const [tab, setTab] = useState(0);
        return <SegmentedButton items={["일", "주", "월"]} selectedTab={tab} onChange={setTab} />;
    },
};
