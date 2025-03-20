import React, {ReactNode} from 'react';
import View from "@designsystem/core/View";
import {css, RuleSet} from "styled-components";

interface Props {
    type: 'user' | 'ai';
    ui?: RuleSet;
    children?: ReactNode;
}

const BaseChat = ({type, ui, children}: Props) => {
    return (
        <View $ui={css`
            padding: 14px 26px;
            max-width: 280px;
            ${ui};
            ${type === 'user' ? css`
                background: var(--p-800);
                border-radius: 20px 0 20px 20px;
            ` : css`
                border-radius: 20px 20px 20px 0;
                background: var(--g-50);
            `};
        `}>
            {children}
        </View>
    );
};

export default BaseChat;
