import React, {ComponentPropsWithRef, ForwardedRef, forwardRef, HTMLAttributes, useState} from 'react';
import styled, {css} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Spacer from "@designsystem/component/Spacer";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {DraggableProvidedDragHandleProps} from "react-beautiful-dnd";
import {OptionTypeMode} from "@page/design/OptionType";
import Toggle from "@designsystem/component/Toggle";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/core/CustomStyle";

interface OptionCellProps extends ComponentPropsWithRef<'div'> {
    title: string;
    mode: OptionTypeMode;
    toggleModeProps?: {
        checked: boolean;
        onChange: (checked: boolean) => void;
    };
    dragHandleProps?: DraggableProvidedDragHandleProps | null | undefined;
    children?: React.ReactNode;
}

function OptionCell(
    {
        title,
        mode,
        toggleModeProps,
        dragHandleProps,
        children,
        ...props
    }: OptionCellProps,
    ref?: ForwardedRef<HTMLDivElement>
) {
    const [opened, setOpened] = useState(false);

    return (
        <Column ref={ref} $customStyle={css`
            background: white;
            border-radius: 4px;
            margin-bottom: 20px;
        `} {...props}>
            <Row $customStyle={css`
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 62px;
                gap: 12px;
                padding-left: 36px;
                padding-right: 32px;
                ${opened && css`
                    outline: 1px solid var(--g-100);
                `};
            `}>
                <Row
                    $alignItems={'center'}
                    $alignSelf={'stretch'}
                    gap={12}
                    flex={1}
                    $customStyle={css`
                        cursor: pointer;
                    `}
                    onClick={() => setOpened(opened => !opened)}
                >
                    <Icon
                        iconType={IconType.ExpandArrow}
                        size={24}
                        customStyle={css`
                            fill: var(--g-600);
                            ${opened ? css`
                                rotate: 90deg;
                            ` : css`
                                rotate: -90deg;
                            `}
                        `}
                    />
                    <Text type={'p2'}>{title}</Text>
                    <Spacer/>
                </Row>
                {mode === 'draggable' && (
                    <CustomStyle $customStyle={css`
                        display: flex;
                    `} {...dragHandleProps}>
                        <Icon iconType={IconType.Hamburger} size={14} customStyle={css`
                            fill: var(--g-600);
                        `}/>
                    </CustomStyle>
                )}
                {mode === 'toggle' && toggleModeProps && (
                    <Toggle
                        Checked={toggleModeProps.checked}
                        OnChange={toggleModeProps.onChange}
                        customStyle={css`
                            margin-right: -16px;
                        `}
                    />
                )}
            </Row>
            <div style={{
                display: opened ? undefined : 'none'
            }}>
                {children}
            </div>
        </Column>
    );
}

export default forwardRef(OptionCell);
