import React, {ForwardedRef, forwardRef, HTMLAttributes, useState} from 'react';
import styled from "styled-components";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";
import Spacer from "../../../../designsystem/component/spacer";
import {Row} from "../../../../designsystem/component/flexLayout";
import {DraggableProvidedDragHandleProps} from "react-beautiful-dnd";

interface OptionCellProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
    children?: React.ReactNode;
}

function OptionCell(
    {
        title,
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
                <div style={{display: 'flex'}} {...dragHandleProps}>
                    <Icon type={IconType.Hamburger} size={14} tint={colors.g600}/>
                </div>
            </S.titleWrapper>
            {opened && children}
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
        ${makeText(TextType.p2)};
        color: ${colors.black};
    `
}

export default forwardRef(OptionCell);