import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import Input from "@designsystem/component/Input";
import Textarea from "@designsystem/component/Textarea";
import {css} from "styled-components";
import FormToggle from "@designsystem/component/FormToggle";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Divider from "@designsystem/component/Divider";
import Binding from "@src/interface/Binding";
import Rsvp from "@remote/value/Rsvp";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorRsvp = (
    {
        value: {rsvp},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'rsvp'} toggle={{
            checked: false,
            OnChange: () => {
            }
        }}>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={rsvp.rsvpTitle} onChange={event => update(draft => {
                    draft.rsvp.rsvpTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={rsvp.rsvpContent} onChange={event => update(draft => {
                    draft.rsvp.rsvpContent = event.target.value;
                })} customStyle={css`
                    height: 194px;
                `}/>
            </Column>
            <FormToggle checked={rsvp.startPopupStatus} OnChange={checked => update(draft => {
                draft.rsvp.startPopupStatus = checked;
            })} label={'청첩장 접속 시 팝업 띄우기'}/>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>표시 항목</Text>
                <FormToggleSet>
                    <FormToggle checked={rsvp.attendMealStatus} OnChange={() => update(draft => {
                    })} label={'식사 여부'}/>
                    <FormToggle checked={rsvp.attendGuestCntStatus} OnChange={() => update(draft => {
                    })} label={'참석 인원'}/>
                    <FormToggle checked={rsvp.attendPhoneStatus} OnChange={() => update(draft => {
                    })} label={'연락처'}/>
                    <FormToggle checked={rsvp.attendBusStatus} OnChange={() => update(draft => {
                    })} label={'버스 탑승 여부'}/>
                    <FormToggle checked={rsvp.attendEtcStatus} OnChange={() => update(draft => {
                    })} label={'추가 전달사항'}/>
                </FormToggleSet>
            </Column>
            <Divider/>
            <Text type={'p3'} customStyle={css`
                color: var(--g-400);
            `}>
                참석 여부는 내정보 {'>'} 모바일 청첩장 메뉴에서 확인하실 수 있습니다.
            </Text>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorRsvp;
