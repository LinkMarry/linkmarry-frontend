import React from 'react';
import styled from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import OptionTextField from "@page/invitation/design/component/OptionTextField";
import Checkbox from "@designsystem/component/checkbox";
import makeText from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import GuestComment from "@remote/value/GuestComment";
import {designs, designRecord} from "@remote/enumeration/Design";
import OptionSegmentedButton from "@page/invitation/design/component/OptionSegmentedButton";

interface GuestCommentOptionProps {
    guestComment: GuestComment;
    onChange: (guestComment: GuestComment) => void;
}

function GuestCommentOption(
    {
        guestComment,
        onChange,
    }: GuestCommentOptionProps
) {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Column gap={16}>
                    <Row gap={12}>
                        <OptionLabel label={'제목'}/>
                        <OptionTextField fieldProps={{
                            value: guestComment.title,
                            onChange: event => onChange({...guestComment, title: event.target.value})
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'설명'}/>
                        <OptionTextField fieldProps={{
                            value: guestComment.content,
                            onChange: event => onChange({...guestComment, content: event.target.value})
                        }} width={264}/>
                    </Row>
                    <Row gap={12}>
                        <OptionLabel label={'디자인'}/>
                        <OptionSegmentedButton
                            selectedIndex={designRecord[guestComment.design].index}
                            items={designs.map(design => designRecord[design].korean)}
                            onClickItem={index => {
                                onChange({...guestComment, design: designs[index]})
                            }}
                            style={{width: 264}}
                        />
                    </Row>
                </Column>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'} style={{alignSelf: 'flex-start'}}/>
                    <Column gap={12}>
                        <Checkbox
                            label={'내용 공개'}
                            checked={guestComment.privateContent}
                            onChange={checked => onChange({...guestComment, privateContent: checked})}
                        />
                        <Row gap={16}>
                            <Checkbox
                                label={'날짜 숨김'}
                                checked={guestComment.privateDate}
                                onChange={checked => onChange({...guestComment, privateDate: checked})}
                            />
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
        ${makeText('caption1')};
        color: ${colors.g300};
    `
}

export default GuestCommentOption;