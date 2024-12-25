import React from 'react';
import styled from "styled-components";
import {Column, Row} from "../../../../designsystem/component/flexLayout";
import HorizontalDivider from "../../../../designsystem/component/horizontalDivider";
import OptionLabel from "../component/OptionLabel";
import OptionTextField from "../component/OptionTextField";
import Checkbox from "../../../../designsystem/component/checkbox";
import makeText, {TextType} from "../../../../designsystem/foundation/text/textType";
import colors from "../../../../designsystem/foundation/colors";
import OptionTextarea from "../component/OptionTextarea";

function RSVPOption() {
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
                </Column>
                <HorizontalDivider/>
                <Column gap={32}>
                    <Row gap={12}>
                        <OptionLabel label={'항목'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={12}>
                            <Checkbox label={'식사 여부'} checked={false} onChange={() => {}}/>
                            <Checkbox label={'참석 인원'} checked={false} onChange={() => {}}/>
                            <Checkbox label={'연락처'} checked={false} onChange={() => {}}/>
                            <Checkbox label={'추가 전달사항'} checked={false} onChange={() => {}}/>
                        </Column>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'팝업 안내'} style={{alignSelf: 'flex-start'}}/>
                        <Column gap={15}>
                            <Row gap={16}>
                                <Checkbox checked={false} onChange={() => {}}/>
                                <S.popUpInfoCheckboxLabel>청첩장 열 때 팝업 안내</S.popUpInfoCheckboxLabel>
                            </Row>
                            <OptionTextarea width={264}/>
                        </Column>
                    </Row>
                </Column>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    popUpInfoCheckboxLabel: styled.span`
        ${makeText(TextType.caption1)};
        color: ${colors.g300};
    `
}

export default RSVPOption;