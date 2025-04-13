import React from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Input from "@src/userinterface/component/Input";
import FormToggle from "@src/userinterface/component/FormToggle";
import EditorInspectorWrapper from "@src/feature/editor/inspector/EditorInspectorWrapper";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import FormatUtil from "@src/shared/format.util";

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
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>신랑 신부 전화번호</Text>
                <Input placeholder={'신랑'} value={phone.groomTel} onChange={event => update(draft => {
                    const value = event.target.value;
                    draft.phone.groomTel = FormatUtil.formatPhone(value);
                })}/>
                <Input placeholder={'신부'} value={phone.brideTel} onChange={event => update(draft => {
                    const value = event.target.value;
                    draft.phone.brideTel = FormatUtil.formatPhone(value);
                })}/>
            </Column>
            <Column $alignItems={'stretch'} $gap={12}>
                <Text type={'p3'} bold={true}>혼주 전화번호</Text>
                <FormToggle checked={phone.parentTel} OnChange={checked => update(draft => {
                    draft.phone.parentTel = checked;
                })} label={'혼주 연락처'}/>
            </Column>
            {phone.parentTel && (
                <>
                    <Column $alignItems={'stretch'} $gap={12}>
                        <Text type={'p3'} bold={true}>신랑측 혼주</Text>
                        <Input placeholder={'신랑 아버지'} value={phone.groomFatherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.groomFatherTel = FormatUtil.formatPhone(value);
                        })}/>
                        <Input placeholder={'신부 어머니'} value={phone.groomMotherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.groomMotherTel = FormatUtil.formatPhone(value);
                        })}/>
                    </Column>
                    <Column $alignItems={'stretch'} $gap={12}>
                        <Text type={'p3'} bold={true}>신부측 혼주</Text>
                        <Input placeholder={'신부 아버지'} value={phone.brideFatherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.brideFatherTel = FormatUtil.formatPhone(value);
                        })}/>
                        <Input placeholder={'신부 어머니'} value={phone.brideMotherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.brideMotherTel = FormatUtil.formatPhone(value);
                        })}/>
                    </Column>
                </>
            )}
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorPhone;
