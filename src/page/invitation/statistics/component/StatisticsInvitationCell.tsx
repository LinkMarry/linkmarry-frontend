import React from 'react';
import WeddingDashboard from "../../../../remote/value/WeddingDashboard";
import styled from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import Button from "../../../../designsystem/component/button";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";
import Spacer from "../../../../designsystem/component/spacer";
import Text from "../../../../designsystem/component/text";

interface InvitationCellProps {
    weddingDashboard: WeddingDashboard;
}

function StatisticsInvitationCell(
    {
        weddingDashboard
    }: InvitationCellProps
) {
    return (
        <S.container>
            <S.image src={weddingDashboard.weddingInfo[0].img} alt=""/>
            <Column gap={4} $alignItems={'stretch'} style={{padding: '20px 20px 32px 20px', background: colors.g100}}>
                <Row gap={8}>
                    <S.urlLabel>{weddingDashboard.weddingInfo[0].url}</S.urlLabel>
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
                <Text text={weddingDashboard.weddingInfo[0].createdDate} type={TextType.caption1} color={colors.g500}/>
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
    `,
    image: styled.img`
        display: flex;
        flex: 1;
        object-fit: cover;
    `,
    urlLabel: styled.span`
        ${makeText(TextType.p5)};
        color: ${colors.black};
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
};

export default StatisticsInvitationCell;