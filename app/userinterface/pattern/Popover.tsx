import {type ComponentPropsWithoutRef} from 'react';
import Icon, {type IconType} from "~/userinterface/foundation/Icon";
import Text from "~/userinterface/component/Text";
import fadeInAnimationStyle from "~/userinterface/animation/fadeInAnimationStyle";
import {interactionEffectStyles} from "~/userinterface/css.util";
import BasePopover from "~/userinterface/component/BasePopover";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

type ItemType = 'normal' | 'destructive';

export interface PopoverItem {
    icon: IconType;
    text: string;
    type?: ItemType;
    onClick: () => void;
    ui?: LinariaClassName;
}

const itemTypeStyle: Record<ItemType, {
    icon: LinariaClassName;
    text: LinariaClassName;
}> = {
    normal: {
        icon: css`
            fill: var(--g-800);
        `,
        text: css`
            color: var(--g-800);
        `
    },
    destructive: {
        icon: css`
            fill: #F33C2F;
        `,
        text: css`
            color: #F33C2F;
        `
    }
}

interface Props extends ComponentPropsWithoutRef<'div'> {
    items: PopoverItem[];
    dismiss: () => void;
    ui?: LinariaClassName;
}

function Popover(
    {
        items,
        dismiss,
        ui,
        ...props
    }: Props
) {
    return (
        <BasePopover dismiss={dismiss}>
            <View ui={cx(
                css`
                    gap: 4px;
                    width: 160px;
                    padding: 8px;
                    position: absolute;
                    border-radius: 10px;
                    background: white;
                    box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
                    z-index: 100;
                    ${fadeInAnimationStyle};
                `,
                ui
            )} {...props}>
                {items.map((item, index) => (
                    <View key={index} ui={cx(
                        css`
                            gap: 8px;
                            align-items: center;
                            flex-direction: row !important;
                            padding: 8px 12px;
                            border-radius: 6px;
                        `,
                        interactionEffectStyles.strong,
                        item.ui
                    )} onClick={() => {
                        item.onClick();
                        dismiss();
                    }}>
                        <Icon iconType={item.icon} width={20} height={20}
                              ui={itemTypeStyle[item.type ?? 'normal'].icon}/>
                        <Text type={'caption1'} bold={true}
                              ui={itemTypeStyle[item.type ?? 'normal'].text}>{item.text}</Text>
                    </View>
                ))}
            </View>
        </BasePopover>
    );
}

export default Popover;
