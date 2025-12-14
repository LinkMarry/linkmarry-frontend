import Text from "~/userinterface/component/Text.tsx";
import Input from "~/userinterface/component/Input.tsx";
import Spacer from "~/userinterface/component/Spacer.tsx";
import {css} from "@linaria/core";
import Checkbox from "~/userinterface/component/Checkbox.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import View from "~/userinterface/core/View.tsx";


const EditorInspectorBride = (
    {
        value: {
            baseInfo
        },
        update
    }: Binding<WeddingDto>
) => {
    return (
        <EditorInspectorWrapper type={'bride'}>
            <View ui={css`
                gap: 12px;
            `}>
                <Text type={'p3'} bold={true}>신부 성함</Text>
                <View ui={css`
                    gap: 8px;
                `}>
                    <View ui={css`
                        flex-direction: row;
                        gap: 8px;
                    `}>
                        <Input placeholder={'성'} value={baseInfo.brideFirstName} onChange={event => update(draft => {
                            draft.baseInfo.brideFirstName = event.target.value;
                        })}/>
                        <Input placeholder={'이름'} value={baseInfo.brideLastName} onChange={event => update(draft => {
                            draft.baseInfo.brideLastName = event.target.value;
                        })}/>
                        <Input placeholder={'관계'} value={baseInfo.brideFamilyName} onChange={event => update(draft => {
                            draft.baseInfo.brideFamilyName = event.target.value;
                        })}/>
                    </View>
                    <View ui={css`
                        flex-direction: row;
                        gap: 8px;
                    `}>
                        <Input placeholder={'영문 이름'} value={baseInfo.brideEnglishName}
                               onChange={event => update(draft => {
                                   draft.baseInfo.brideEnglishName = event.target.value;
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
                <Text type={'p3'} bold={true}>신부 아버지</Text>
                <View ui={css`
                    flex-direction: row;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Input placeholder={'성'} value={baseInfo.brideFatherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.brideFatherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.brideFatherLastName} onChange={event => update(draft => {
                        draft.baseInfo.brideFatherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.brideFatherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.brideFatherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </View>
                <View ui={css`
                    flex-direction: row;
                    align-items: flex-start;
                    gap: 8px;
                `}>
                    <Checkbox checked={baseInfo.brideFatherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.brideFatherStatus = checked;
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
                <Text type={'p3'} bold={true}>신부 어머니</Text>
                <View ui={css`
                    flex-direction: row;
                    gap: 8px;
                    align-items: center;
                `}>
                    <Input placeholder={'성'} value={baseInfo.brideMotherFirstName} onChange={event => update(draft => {
                        draft.baseInfo.brideMotherFirstName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'이름'} value={baseInfo.brideMotherLastName} onChange={event => update(draft => {
                        draft.baseInfo.brideMotherLastName = event.target.value;
                    })} ui={css`
                        flex: 1;
                    `}/>
                    <Input placeholder={'관계'} value={baseInfo.brideMotherFamilyName}
                           onChange={event => update(draft => {
                               draft.baseInfo.brideMotherFamilyName = event.target.value;
                           })} ui={css`
                        flex: 1;
                    `}/>
                </View>
                <View ui={css`
                    flex-direction: row;
                    align-items: flex-start;
                    gap: 8px;
                `}>
                    <Checkbox checked={baseInfo.brideMotherStatus} OnChange={checked => update(draft => {
                        draft.baseInfo.brideMotherStatus = checked;
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

export default EditorInspectorBride;
