import React from 'react';
import styled, {css} from "styled-components";
import {Column, Row} from "@designsystem/component/core/FlexLayout";
import Divider from "@designsystem/component/Divider";
import OptionLabel from "@page/design/component/OptionLabel";
import OptionTextField from "@page/design/component/OptionTextField";
import Checkbox from "@designsystem/component/Checkbox";
import GuestComment from "@remote/value/GuestComment";
import {designs, designRecord} from "@remote/enumeration/Design";
import OptionSegmentedButton from "@page/design/component/OptionSegmentedButton";
import Text from "@designsystem/component/Text";

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
        <Row $customStyle={css`
            padding: 36px;
        `}>
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
                <Divider/>
                <Row gap={12}>
                    <OptionLabel label={'표시'} style={{alignSelf: 'flex-start'}}/>
                    <Column gap={12}>
                        <Checkbox
                            label={'내용 공개'}
                            Checked={guestComment.privateContent}
                            OnChange={checked => onChange({...guestComment, privateContent: checked})}
                        />
                        <Row gap={16}>
                            <Checkbox
                                label={'날짜 숨김'}
                                Checked={guestComment.privateDate}
                                OnChange={checked => onChange({...guestComment, privateDate: checked})}
                            />
                            <Text type={'caption1'} customStyle={css`
                                color: var(--g-300);
                            `}>
                                방명록 작성 날짜를 숨김
                            </Text>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Row>
    );
}

export default GuestCommentOption;
