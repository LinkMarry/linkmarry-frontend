import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox from "../../../../designsystem/component/checkbox";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";

function GuestCommentOption() {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'디자인'}/>
                        <OptionTextField width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'} style={{alignSelf: 'flex-start'}}/>
                    <Column gap={12}>
                        <Checkbox label={'내용 공개'} checked={false} onChange={() => {}}/>
                        <Row gap={16}>
                            <Checkbox label={'날짜 숨김'} checked={false} onChange={() => {}}/>
                            <S.hideDateLabel>방명록 작성 날짜를 숨김</S.hideDateLabel>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    hideDateLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g300};
    `
}

export default GuestCommentOption;