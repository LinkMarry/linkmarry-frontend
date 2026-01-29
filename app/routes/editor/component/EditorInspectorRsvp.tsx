import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Textarea from "~/userinterface/component/Textarea.tsx";
import {css} from "@linaria/core";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import FormToggleSet from "~/userinterface/component/FormToggleSet.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import Divider from "~/userinterface/component/Divider.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorRsvp = (
    {
        value: {rsvp},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'rsvp'} toggle={{
            checked: rsvp.rsvpActivate,
            OnChange: checked => update(draft => {
                draft.rsvp.rsvpActivate = checked;
            })
        }}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>제목</Text>
                <Input hasLabel={false} value={rsvp.rsvpTitle} onChange={event => update(draft => {
                    draft.rsvp.rsvpTitle = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>내용</Text>
                <Textarea hasLabel={false} value={rsvp.rsvpContent} onChange={event => update(draft => {
                    draft.rsvp.rsvpContent = event.target.value;
                })} ui={css`
                    height: 194px;
                `}/>
            </View>
            <FormToggle checked={rsvp.startPopupStatus} OnChange={checked => update(draft => {
                draft.rsvp.startPopupStatus = checked;
            })} label={'청첩장 접속 시 팝업 띄우기'}/>
            <View ui={css`
                gap: 12px;
            `}>
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
            </View>
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
