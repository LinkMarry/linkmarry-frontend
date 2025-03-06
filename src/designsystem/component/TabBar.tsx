import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import {hideScrollBar, makeInteractionEffect} from "@util/css.util";
import Text from "@designsystem/component/Text";
import View from "@designsystem/core/View";

export const dummyTabBarItems = [
    '모던',
    '빈티지',
    '레트로',
    '로맨틱',
    '클래식'
]

const TabBar = ({items, selectedTab, onChange, ui}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    ui?: RuleSet;
}) => {
    return (
        <Row gap={8} ui={css`
            overflow-x: scroll;
            ${hideScrollBar};
            ${ui};
        `}>
            {items.map((item, index) => (
                <Item key={index} selected={index === selectedTab} text={item} onClick={() => {
                    onChange(index);
                }}/>
            ))}
        </Row>
    );
};

const Item = ({selected, text, ...props}: {
    selected: boolean;
    text: string;
} & ComponentPropsWithoutRef<'div'>) => {
    return (
        <Column $alignItems={'center'} ui={css`
            min-width: 68px;
            padding: 10px 0;
            border-radius: 6px;
            position: relative;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Text type={'p3'} bold={true} ui={css`
                ${selected ? css`
                    color: var(--g-800);
                ` : css`
                    color: var(--g-500);
                `}
            `}>{text}</Text>
            {selected && (
                <View ui={css`
                    position: absolute;
                    width: 29px;
                    height: 2px;
                    border-radius: 10px;
                    background: var(--g-800);
                    bottom: 0;
                `}/>
            )}
        </Column>
    );
}

export default TabBar;
