import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import FormToggle from "~/userinterface/component/FormToggle.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {formatPhone} from "~/shared/format-util.ts";
import View from "~/userinterface/core/View.tsx";
import {css} from "@linaria/core";


const EditorInspectorPhone = (
    {
        value: {phone},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'phone'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>신랑 신부 전화번호</Text>
                <Input placeholder={'신랑'} value={phone.groomTel} onChange={event => update(draft => {
                    const value = event.target.value;
                    draft.phone.groomTel = formatPhone(value);
                })}/>
                <Input placeholder={'신부'} value={phone.brideTel} onChange={event => update(draft => {
                    const value = event.target.value;
                    draft.phone.brideTel = formatPhone(value);
                })}/>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>혼주 전화번호</Text>
                <FormToggle checked={phone.parentTel} OnChange={checked => update(draft => {
                    draft.phone.parentTel = checked;
                })} label={'혼주 연락처'}/>
            </View>
            {phone.parentTel && (
                <>
                    <View ui={css`
                        gap: 12px;
                    `}>
                        <Text type={'p3'} bold={true}>신랑측 혼주</Text>
                        <Input placeholder={'신랑 아버지'} value={phone.groomFatherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.groomFatherTel = formatPhone(value);
                        })}/>
                        <Input placeholder={'신부 어머니'} value={phone.groomMotherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.groomMotherTel = formatPhone(value);
                        })}/>
                    </View>
                    <View ui={css`
                        gap: 12px;
                    `}>
                        <Text type={'p3'} bold={true}>신부측 혼주</Text>
                        <Input placeholder={'신부 아버지'} value={phone.brideFatherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.brideFatherTel = formatPhone(value);
                        })}/>
                        <Input placeholder={'신부 어머니'} value={phone.brideMotherTel} onChange={event => update(draft => {
                            const value = event.target.value;
                            draft.phone.brideMotherTel = formatPhone(value);
                        })}/>
                    </View>
                </>
            )}
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorPhone;
