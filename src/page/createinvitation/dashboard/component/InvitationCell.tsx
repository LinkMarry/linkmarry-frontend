import React from 'react';
import WeddingDashboard from "../../../../remote/data/value/WeddingDashboard";
import styled from "styled-components";
import colors from "../../../../designsystem/foundation/colors";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import Button from "../../../../designsystem/component/button";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import Icon, {IconType} from "../../../../designsystem/foundation/icon";

interface InvitationCellProps {
    weddingDashboard: WeddingDashboard;
}

function InvitationCell(
    {
        weddingDashboard
    }: InvitationCellProps
) {
    return (
        <S.container>
            
            {/*image*/}
            <Column gap={12} style={{padding: 20, background: colors.g100}}>
                <Column gap={4}>
                    <Row>
                        <S.urlLabel>{weddingDashboard.weddingInfo[0].url}</S.urlLabel>{/* TODO: Fix dummy */}
                        <Icon type={IconType.Detail} tint={colors.black} size={20}/>
                    </Row>
                    <S.dateLabel>{weddingDashboard.weddingInfo[0].createdDate}</S.dateLabel>{/* TODO: Fix dummy */}
                </Column>
                <Row gap={10}>
                    <Button text={'워터마크 제거'} role={'assistive'} style={{background: colors.white}}/>
                    <Button text={'수정하기'} role={'assistive'} style={{background: colors.white}}/>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        height: 361px;
        flex-direction: column;
        border: 1px solid ${colors.g200};
        border-radius: 12px;
        overflow: hidden;
    `,
    urlLabel: styled.span`
        ${makeText(TextType.p5)};
        color: ${colors.black};
    `,
    dateLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g500};
    `
};

export default InvitationCell;