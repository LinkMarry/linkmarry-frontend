import {type ComponentPropsWithoutRef} from 'react';
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";

const SegmentedButton = ({items, selectedTab, onChange, ui}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    ui?: LinariaClassName;
}) => {
    return (
        <View ui={cx(
            css`
                flex-direction: row;
                background: var(--g-100);
                border-radius: 12px;
                height: 48px;
                position: relative;
            `,
            ui
        )}>
            <View ui={css`
                position: absolute;
                height: 40px;
                top: 4px;
                background: white;
                border-radius: 8px;
                transition: left 0.2s ease-out;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
            `} style={{
                width: `calc(100% / ${items.length} - 8px)`,
                left: `calc(${selectedTab} * (100% / ${items.length}) + 4px)`
            }}/>
            {items.map((item, index) => (
                <Item key={index} selected={index === selectedTab} text={item} onClick={() => {
                    onChange(index);
                }}/>
            ))}
        </View>
    );
};

const Item = ({selected, text, ...props}: {
    selected: boolean;
    text: string;
} & ComponentPropsWithoutRef<'div'>) => {
    return (
        <View ui={css`
            flex-direction: row;
            flex: 1;
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
            <Text type={'p3'} ui={selected ? css`
                color: var(--g-900);
            ` : css`
                color: var(--g-600);
            `}>{text}</Text>
        </View>
    );
};

export default SegmentedButton;
