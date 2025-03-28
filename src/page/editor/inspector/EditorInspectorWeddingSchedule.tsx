import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Input from "@designsystem/component/Input";
import FormToggleSet from "@designsystem/component/FormToggleSet";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import {formatDate} from "date-fns";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorWeddingSchedule = (
    {
        value: {weddingSchedule}, update
    }: Props
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
