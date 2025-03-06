import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import Input from "@designsystem/component/Input";
import FormToggle from "@designsystem/component/FormToggle";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorPhone = (
    {
        value: {phone},
        update
    }: Props
) => {
    return (
        <EditorInspectorWrapper type={'phone'}>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑 신부 전화번호</Text>
                <Input placeholder={'신랑'} value={phone.groomTel} onChange={event => update(draft => {
                    draft.phone.groomTel = event.target.value;
                })}/>
                <Input placeholder={'신부'} value={phone.brideTel} onChange={event => update(draft => {
                    draft.phone.brideTel = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>혼주 전화번호</Text>
                <FormToggle checked={false} OnChange={checked => {
                }} label={'혼주 연락처'}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신랑측 혼주</Text>
                <Input placeholder={'신랑 아버지'} value={phone.groomFatherTel} onChange={event => update(draft => {
                    draft.phone.groomFatherTel = event.target.value;
                })}/>
                <Input placeholder={'신부 어머니'} value={phone.groomMotherTel} onChange={event => update(draft => {
                    draft.phone.groomMotherTel = event.target.value;
                })}/>
            </Column>
            <Column $alignItems={'stretch'} gap={12}>
                <Text type={'p3'} bold={true}>신부측 혼주</Text>
                <Input placeholder={'신부 아버지'} value={phone.brideFatherTel} onChange={event => update(draft => {
                    draft.phone.brideFatherTel = event.target.value;
                })}/>
                <Input placeholder={'신부 어머니'} value={phone.brideMotherTel} onChange={event => update(draft => {
                    draft.phone.brideMotherTel = event.target.value;
                })}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorPhone;
