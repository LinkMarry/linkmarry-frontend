import React, {ComponentPropsWithoutRef} from 'react';
import {Row} from "@src/userinterface/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";

const SegmentedButton = ({items, selectedTab, onChange, ui}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    ui?: RuleSet;
}) => {
    return (
        <Row $alignItems={'stretch'} $ui={css`
            background: var(--g-100);
            border-radius: 12px;
            height: 48px;
            position: relative;
            ${ui};
        `}>
            <View $ui={css`
                position: absolute;
                height: 40px;
                width: calc(100% / ${items.length} - 8px);
                top: 4px;
                left: calc(${selectedTab} * (100% / ${items.length}) + 4px);
                background: white;
                border-radius: 8px;
                transition: left 0.2s ease-out;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
            `}/>
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
        <Row $flex={1} $ui={css`
            justify-content: center;
            align-items: center;
            outline: none;
            border: none;
            background: transparent;
            margin: 4px;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1;
        `} {...props}>
            <Text type={'p3'} ui={css`
                ${selected ? css`
                    color: var(--g-900);
                ` : css`
                    color: var(--g-600);
                `}
            `}>{text}</Text>
        </Row>
    );
};

export default SegmentedButton;
