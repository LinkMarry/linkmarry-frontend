import React, {HTMLAttributes} from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import makeText from "@designsystem/foundation/text/textType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Spacer from "@designsystem/component/spacer";
import Text from "@designsystem/component/text";
import WeddingInfo from "@remote/value/WeddingInfo";

interface InvitationCellProps extends HTMLAttributes<HTMLDivElement> {
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
            <Column gap={4} $alignItems={'stretch'} style={{padding: '20px 20px 32px 20px', background: colors.g100}}>
                <Row gap={8}>
                    <S.urlLabel>{weddingInfo.url}</S.urlLabel>
                    <Spacer/>
                    <Icon
                        type={IconType.Detail}
                        tint={colors.black}
                        size={20}
                        onClick={() => {

                        }}
                        style={{
                            cursor: "pointer",
                        }}
                    />
                </Row>
                <Text type={'caption1'} color={colors.g500}>{weddingInfo.createdDate}</Text>
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
        border: 1px solid ${colors.g200};
        border-radius: 12px;
        overflow: hidden;
        break-inside: avoid-column; // column 잘림 방지
        cursor: pointer;
    `,
    image: styled.img`
        display: flex;
        flex: 1;
        object-fit: cover;
    `,
    urlLabel: styled.span`
        ${makeText('p5')};
        color: ${colors.black};
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
};

export default StatisticsInvitationCell;