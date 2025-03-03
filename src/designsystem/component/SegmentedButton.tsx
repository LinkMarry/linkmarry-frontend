import React, {ComponentPropsWithoutRef} from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/core/CustomStyle";

const SegmentedButton = ({items, selectedTab, onChange, customStyle}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    customStyle?: RuleSet;
}) => {
    return (
        <Row $alignItems={'stretch'} $customStyle={css`
            background: var(--g-100);
            border-radius: 12px;
            height: 48px;
            position: relative;
            ${customStyle};
        `}>
            <CustomStyle $customStyle={css`
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
                <Item selected={index === selectedTab} text={item} onClick={() => {
                    console.log(`index ${index}`);
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
        <Row flex={1} $customStyle={css`
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
            <Text type={'p3'} customStyle={css`
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
