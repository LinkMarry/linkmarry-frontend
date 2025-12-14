import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import FormToggleSet from "~/userinterface/component/FormToggleSet.tsx";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {formatDate} from "date-fns";
import View from "~/userinterface/core/View.tsx";
import {css} from "@linaria/core";


const EditorInspectorWeddingSchedule = (
    {
        value: {weddingSchedule}, update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'weddingSchedule'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>예식일</Text>
                <Input type={'date'} value={weddingSchedule.weddingDate} min={formatDate(new Date(), 'yyyy-MM-dd')} onChange={event => update(draft => {
                    draft.weddingSchedule.weddingDate = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>예식 시간</Text>
                <Input type={'time'} value={weddingSchedule.weddingTime} onChange={event => update(draft => {
                    draft.weddingSchedule.weddingTime = event.target.value;
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>추가 요소</Text>
                <FormToggleSet>
                    <FormToggle checked={weddingSchedule.calendar} OnChange={checked => update(draft => {
                        draft.weddingSchedule.calendar = checked;
                    })} label={'캘린더'}/>
                    <FormToggle checked={weddingSchedule.dday} OnChange={checked => update(draft => {
                        draft.weddingSchedule.dday = checked;
                    })} label={'디데이'}/>
                </FormToggleSet>
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorWeddingSchedule;
