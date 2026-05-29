import type {Meta, StoryObj} from "@storybook/react";
import {Spacer} from "./index";
import {View} from "~/components/core/view";
import {css} from "@linaria/core";

const meta: Meta<typeof Spacer> = {
    title: "Core/Spacer",
    component: Spacer,
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const FlexGrow: Story = {
    render: () => (
        <View
            flexDirection="row"
            ui={css`
                width: 320px;
                padding: 8px;
                background: var(--g-100);
            `}
        >
            <span>Left</span>
            <Spacer />
            <span>Right</span>
        </View>
    ),
};

export const FixedSize: Story = {
    render: () => (
        <View flexDirection="row">
            <span>A</span>
            <Spacer w={32} />
            <span>B</span>
        </View>
    ),
};
