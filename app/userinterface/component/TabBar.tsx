import {type ComponentPropsWithoutRef} from 'react';
import {hideScrollBarStyle, interactionEffectStyles} from "~/userinterface/css.util";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";


const TabBar = ({items, selectedTab, onChange, ui}: {
    items: string[];
    selectedTab: number;
    onChange: (tab: number) => void;
    ui?: LinariaClassName;
}) => {
    return (
        <View ui={cx(
            hideScrollBarStyle,
            css`
                flex-direction: row !important;
                gap: 8px;
                overflow-x: scroll;
            `,
            ui
        )}>
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
        <View ui={cx(
            css`
                align-items: center;
                min-width: 68px;
                padding: 10px 0;
                border-radius: 6px;
                position: relative;
            `,
            interactionEffectStyles.strong
        )} {...props}>
            <Text type={'p3'} bold={true} ui={selected ? css`
                color: var(--g-800);
            ` : css`
                color: var(--g-500);
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
        </View>
    );
}

export default TabBar;
