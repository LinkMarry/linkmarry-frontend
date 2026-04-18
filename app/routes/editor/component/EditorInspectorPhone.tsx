import Text from "~/components/core/Text.tsx";
import Input from "~/components/core/Input.tsx";
import FormToggle from "~/components/core/FormToggle.tsx";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {formatPhone} from "~/lib/format-util.ts";
import View from "~/components/core/View.tsx";
import {css} from "@linaria/core";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorPhone = (
    {
        value: {phone},
        update
    }: Binding<Wedding>
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
