import React, {ForwardedRef, forwardRef, HTMLAttributes, useState} from 'react';
import styled from "styled-components";
import makeText from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Spacer from "@designsystem/component/spacer";
import {Row} from "@designsystem/component/flexLayout";
import {DraggableProvidedDragHandleProps} from "react-beautiful-dnd";
import {OptionTypeMode} from "@page/invitation/design/OptionType";
import Toggle from "@designsystem/component/toggle";

interface OptionCellProps extends HTMLAttributes<HTMLDivElement> {
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
        <S.container ref={ref} {...props}>
            <S.titleWrapper style={{
                outline: opened ? `1px solid ${colors.g100}` : undefined
            }}>
                <Row
                    $alignItems={'center'}
                    $alignSelf={'stretch'}
                    gap={12}
                    flex={1}
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={() => setOpened(opened => !opened)}
                >
                    <Icon
                        style={{
                            rotate: opened ? '90deg' : '-90deg'
                        }}
                        type={IconType.ExpandArrow}
                        size={24}
                        tint={colors.g600}
                    />
                    <S.title>{title}</S.title>
                    <Spacer/>
                </Row>
                {mode === 'draggable' && (
                    <div style={{display: 'flex'}} {...dragHandleProps}>
                        <Icon type={IconType.Hamburger} size={14} tint={colors.g600}/>
                    </div>
                )}
                {mode === 'toggle' && toggleModeProps && (
                    <Toggle
                        checked={toggleModeProps.checked}
                        onChange={toggleModeProps.onChange}
                        style={{
                            marginRight: -16
                        }}
                    />
                )}
            </S.titleWrapper>
            <div style={{
                display: opened ? undefined : 'none'
            }}>
                {children}
            </div>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        background: ${colors.white};
        border-radius: 4px;
        margin-bottom: 20px;
    `,
    titleWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 62px;
        gap: 12px;
        padding-left: 36px;
        padding-right: 32px;
    `,
    title: styled.span`
        ${makeText('p2')};
        color: ${colors.black};
    `
}

export default forwardRef(OptionCell);