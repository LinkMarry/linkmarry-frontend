import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import {css} from "@linaria/core";
import Checkbox from "~/userinterface/component/Checkbox.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorGroom = (
    {
        value: {baseInfo},
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'groom'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>신랑 성함</Text>
                <View ui={css`
                    gap: 8px;
                `}>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 8px;
                    `}>
                        <Input placeholder={'성'} value={baseInfo.groomFirstName} onChange={event => update(draft => {
                            draft.baseInfo.groomFirstName = event.target.value;
                        })}/>
                        <Input placeholder={'이름'} value={baseInfo.groomLastName} onChange={event => update(draft => {
                            draft.baseInfo.groomLastName = event.target.value;
                        })}/>
                        <Input placeholder={'관계'} value={baseInfo.groomFamilyName} onChange={event => update(draft => {
                            draft.baseInfo.groomFamilyName = event.target.value;
                        })}/>
                    </View>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 8px;
                    `}>
                        <Input placeholder={'영문 이름'} value={baseInfo.groomEnglishName}
                               onChange={event => update(draft => {
                                   draft.baseInfo.groomEnglishName = event.target.value;
                               })} ui={css`
                            flex: 1;
                        `}/>
                        <Spacer/>
                        <Spacer/>
                    </View>
                </View>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>신랑 아버지</Text>
                <View ui={css`
                    flex-direction: row !important;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Input placeholder={'성'} value={baseInfo.groomFatherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.groomFatherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.groomFatherLastName} onChange={event => update(draft => {
                        draft.baseInfo.groomFatherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.groomFatherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.groomFatherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </View>
                <View ui={css`
                    flex-direction: row !important;
                    gap: 8px;
                    align-items: flex-start;
                `}>
                    <Checkbox checked={baseInfo.groomFatherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.groomFatherStatus = checked;
                    })} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </View>
            </View>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>신랑 어머니</Text>
                <View ui={css`
                    flex-direction: row !important;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Input placeholder={'성'} value={baseInfo.groomMotherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.groomMotherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.groomMotherLastName} onChange={event => update(draft => {
                        draft.baseInfo.groomMotherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.groomMotherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.groomMotherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </View>
                <View ui={css`
                    flex-direction: row !important;
                    gap: 8px;
                    align-items: flex-start;
                `}>
                    <Checkbox checked={baseInfo.groomMotherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.groomMotherStatus = checked;
                    })} label={'故'} ui={css`
                        flex: 1;
                    `}/>
                    <Spacer/>
                    <Spacer/>
                </View>
            </View>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorGroom;
