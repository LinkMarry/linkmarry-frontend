import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import FormToggleSet from "@src/userinterface/component/FormToggleSet";
import FormToggle from "@src/userinterface/component/FormToggle";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import type Binding from "@src/shared/Binding";
import {type WeddingDto} from "@src/infrastructure/network/value/WeddingDto";
import {formatDate} from "date-fns";


const EditorInspectorWeddingSchedule = (
    {
        value: {weddingSchedule}, update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'weddingSchedule'}>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>예식일</Text>
                <Input type={'date'} value={weddingSchedule.weddingDate} min={formatDate(new Date(), 'yyyy-MM-dd')} onChange={event => update(draft => {
                    draft.weddingSchedule.weddingDate = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>예식 시간</Text>
                <Input type={'time'} value={weddingSchedule.weddingTime} onChange={event => update(draft => {
                    draft.weddingSchedule.weddingTime = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>추가 요소</Text>
                <FormToggleSet>
                    <FormToggle checked={weddingSchedule.calendar} OnChange={checked => update(draft => {
                        draft.weddingSchedule.calendar = checked;
                    })} label={'캘린더'}/>
                    <FormToggle checked={weddingSchedule.dday} OnChange={checked => update(draft => {
                        draft.weddingSchedule.dday = checked;
                    })} label={'디데이'}/>
                </FormToggleSet>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorWeddingSchedule;
