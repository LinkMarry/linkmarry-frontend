import React from 'react';
import Text from "@src/userinterface/component/Text";
import {Column} from "@src/userinterface/core/FlexLayout";
import Input from "@src/userinterface/component/Input";
import Textarea from "@src/userinterface/component/Textarea";
import {css} from "styled-components";
import FormToggle from "@src/userinterface/component/FormToggle";
import FormToggleSet from "@src/userinterface/component/FormToggleSet";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import Divider from "@src/userinterface/component/Divider";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";

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
            checked: rsvp.rsvpActivate,
            OnChange: checked => update(draft => {
                draft.rsvp.rsvpActivate = checked;
            })
        }}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={rsvp.rsvpTitle} onChange={event => update(draft => {
                    draft.rsvp.rsvpTitle = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={rsvp.rsvpContent} onChange={event => update(draft => {
                    draft.rsvp.rsvpContent = event.target.value;
                })} $ui={css`
                    height: 194px;
                `}/>
            </Column>
            <FormToggle checked={rsvp.startPopupStatus} OnChange={checked => update(draft => {
                draft.rsvp.startPopupStatus = checked;
            })} label={'청첩장 접속 시 팝업 띄우기'}/>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>표시 항목</Text>
                <FormToggleSet>
                    <FormToggle checked={rsvp.attendMealStatus} OnChange={checked => update(draft => {
                        draft.rsvp.attendMealStatus = checked;
                    })} label={'식사 여부'}/>
                    <FormToggle checked={rsvp.attendGuestCntStatus} OnChange={checked => update(draft => {
                        draft.rsvp.attendGuestCntStatus = checked;
                    })} label={'참석 인원'}/>
                    <FormToggle checked={rsvp.attendPhoneStatus} OnChange={checked => update(draft => {
                        draft.rsvp.attendPhoneStatus = checked;
                    })} label={'연락처'}/>
                    <FormToggle checked={rsvp.attendBusStatus} OnChange={checked => update(draft => {
                        draft.rsvp.attendBusStatus = checked;
                    })} label={'버스 탑승 여부'}/>
                    <FormToggle checked={rsvp.attendEtcStatus} OnChange={checked => update(draft => {
                        draft.rsvp.attendEtcStatus = checked;
                    })} label={'추가 전달사항'}/>
                </FormToggleSet>
            </Column>
            <Divider/>
            <Text type={'p3'} ui={css`
                color: var(--g-400);
            `}>
                참석 여부는 내정보 {'>'} 모바일 청첩장 메뉴에서 확인하실 수 있습니다.
            </Text>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorRsvp;
