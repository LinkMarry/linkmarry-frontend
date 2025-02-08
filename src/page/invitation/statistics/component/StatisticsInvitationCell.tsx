import React, {ComponentPropsWithoutRef, HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import makeText from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Spacer from "@designsystem/component/Spacer";
import Text from "@designsystem/component/Text";
import WeddingInfo from "@remote/value/WeddingInfo";

interface InvitationCellProps extends ComponentPropsWithoutRef<'div'> {
    weddingInfo: WeddingInfo;
}

function StatisticsInvitationCell(
    {
        weddingInfo,
        ...props
    }: InvitationCellProps
) {
    return (
        <S.container {...props}>
            <S.image src={weddingInfo.img} alt=""/>
            <Column gap={4} $alignItems={'stretch'} $customStyle={css`
                padding: 20px 20px 32px 20px;
                background: var(--g-100);
            `}>
                <Row gap={8}>
                    <S.urlLabel>{weddingInfo.url}</S.urlLabel>
                    <Spacer/>
                    <Icon
                        iconType={IconType.Detail}
                        size={20}
                        customStyle={css`
                            fill: black;
                            cursor: pointer;
                        `}
                        onClick={() => {
                            // todo: handle
                        }}
                    />
                </Row>
                <Text type={'caption1'} customStyle={css`
                    color: var(--g-500);
                `}>{weddingInfo.createdDate}</Text>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 300px;
        height: 420px;
        flex-direction: column;
        border: 1px solid var(--g-200);
        border-radius: 12px;
        overflow: hidden;
        break-inside: avoid-column; // column 잘림 방지
        cursor: pointer;
    `,
    image: styled.img`
        display: flex;
        flex: 1;
        object-fit: cover;
        min-height: 0;
    `,
    urlLabel: styled.span`
        ${makeText('p5')};
        color: black;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
};

export default StatisticsInvitationCell;