import React, {ComponentPropsWithoutRef, useEffect, useRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Text from "@designsystem/component/Text";
import fadeInAnimationStyle from "@designsystem/animation/fadeInAnimationStyle";
import {makeInteractionEffect} from "@util/css.util";
import BasePopover from "@designsystem/component/BasePopover";

export interface PopoverItem {
    icon: IconType;
    text: string;
    type?: 'normal' | 'destructive';
    onClick: () => void;
}

interface Props extends ComponentPropsWithoutRef<'div'> {
    items: PopoverItem[];
    dismiss: () => void;
    ui?: RuleSet;
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
            <Column $gap={4} $alignItems={'stretch'} $ui={css`
                width: 160px;
                padding: 8px;
                position: absolute;
                border-radius: 10px;
                background: white;
                box-shadow: 0 10px 32px -4px rgba(24, 39, 75, 0.10);
                z-index: 100;
                ${ui};
                ${fadeInAnimationStyle};
            `} {...props}>
                {items.map((item, index) => (
                    <Row key={index} $gap={8} $alignItems={'center'} $ui={css`
                        padding: 8px 12px;
                        border-radius: 6px;
                        ${makeInteractionEffect('strong')};
                    `} onClick={() => {
                        item.onClick();
                        dismiss();
                    }}>
                        <Icon iconType={item.icon} width={20} height={20} ui={css`
                            ${(item.type ?? 'normal') === 'normal' ? css`
                                fill: var(--g-800);
                            ` : css`
                                fill: #F33C2F;
                            `};
                        `}/>
                        <Text type={'caption1'} bold={true} ui={css`
                            ${(item.type ?? 'normal') === 'normal' ? css`
                                color: var(--g-800);
                            ` : css`
                                color: #F33C2F;
                            `};
                        `}>{item.text}</Text>
                    </Row>
                ))}
            </Column>
        </BasePopover>
    );
}

export default Popover;
