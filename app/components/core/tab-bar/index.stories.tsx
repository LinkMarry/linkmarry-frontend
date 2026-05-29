import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import {TabBar} from "./index";

const meta: Meta<typeof TabBar> = {
    title: "Core/TabBar",
    component: TabBar,
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
    render: function Render() {
        const [tab, setTab] = useState(0);
        return <TabBar items={["홈", "갤러리", "RSVP", "연락처"]} selectedTab={tab} onChange={setTab} />;
    },
};
