import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import {hideScrollBar, makeInteractionEffect} from "@util/css.util";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/core/CustomStyle";

export const dummyTabBarItems = [
    '모던',
    '빈티지',
    '레트로',
    '로맨틱',
    '클래식'
]

const TabBar = ({items, selectedTab, onChange, customStyle}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    customStyle?: RuleSet;
}) => {
    return (
        <Row gap={8} $customStyle={css`
            overflow-x: scroll;
            ${hideScrollBar};
            ${customStyle};
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
        <Column $alignItems={'center'} $customStyle={css`
            min-width: 68px;
            padding: 10px 0;
            border-radius: 6px;
            position: relative;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Text type={'p3'} bold={true} customStyle={css`
                ${selected ? css`
                    color: var(--g-800);
                ` : css`
                    color: var(--g-500);
                `}
            `}>{text}</Text>
            {selected && (
                <CustomStyle $customStyle={css`
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
