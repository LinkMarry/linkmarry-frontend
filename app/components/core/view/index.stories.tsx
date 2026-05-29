import type {Meta, StoryObj} from "@storybook/react";
import {View} from "./index";
import {css} from "@linaria/core";

const meta: Meta<typeof View> = {
    title: "Core/View",
    component: View,
};

export default meta;

type Story = StoryObj<typeof View>;

export const Column: Story = {
    render: () => (
        <View
            ui={css`
                gap: 8px;
                padding: 16px;
                background: var(--g-100);
            `}
        >
            <View ui={css`padding: 8px; background: white;`}>Item 1</View>
            <View ui={css`padding: 8px; background: white;`}>Item 2</View>
        </View>
    ),
};

export const Row: Story = {
    render: () => (
        <View
            flexDirection="row"
            ui={css`
                gap: 8px;
                padding: 16px;
            `}
        >
            <View ui={css`padding: 8px 16px; background: var(--g-200);`}>A</View>
            <View ui={css`padding: 8px 16px; background: var(--g-200);`}>B</View>
        </View>
    ),
};
