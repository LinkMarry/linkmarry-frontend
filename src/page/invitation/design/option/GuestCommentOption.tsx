import React, {RefObject} from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox, {CheckboxRef} from "@designsystem/component/checkbox";
import makeText, {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";

interface GuestCommentOptionProps {
    refs: {
        titleRef: RefObject<HTMLInputElement>,
        contentRef: RefObject<HTMLInputElement>,
        designRef: RefObject<HTMLInputElement>,
        privateContentRef: RefObject<CheckboxRef>,
        privateDateRef: RefObject<CheckboxRef>
    }
}

function GuestCommentOption(
    {
        refs: {
            titleRef,
            contentRef,
            designRef,
            privateContentRef,
            privateDateRef,
        }
    }: GuestCommentOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField ref={titleRef} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField ref={contentRef} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'디자인'}/>
                        <OptionTextField ref={designRef} width={264}/>
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'} style={{alignSelf: 'flex-start'}}/>
                    <Column gap={12}>
                        <Checkbox ref={privateContentRef} label={'내용 공개'}/>
                        <Row gap={16}>
                            <Checkbox ref={privateDateRef} label={'날짜 숨김'}/>
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