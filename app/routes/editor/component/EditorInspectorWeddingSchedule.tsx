import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import FormToggleSet from "~/components/core/FormToggleSet.tsx";
import FormToggle from "~/components/core/FormToggle.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {formatDate} from "date-fns";
import View from "~/components/core/View.tsx";
import {css} from "@linaria/core";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorWeddingSchedule = (
    {
        value: {weddingSchedule}, update
    }: Binding<Wedding>
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
