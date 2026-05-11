import {Text, Input, Spacer, Checkbox, View} from "~/components";
import {css} from "@linaria/core";

import EditorInspectorWrapper from "~/routes/editor/wedding-invitation/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";

import type {Wedding} from "~/domain";

const WeddingInvitationEditorBrideInspector = ({value: {baseInfo}, update}: Binding<Wedding>) => {
    return (
        <EditorInspectorWrapper type={"bride"}>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    신부 성함
                </Text>
                <View
                    ui={css`
                        gap: 8px;
                    `}
                >
                    <View
                        flexDirection={"row"}
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <Input
                            placeholder={"성"}
                            value={baseInfo.brideFirstName}
                            onChange={event =>
                                update(draft => {
                                    draft.baseInfo.brideFirstName = event.target.value;
                                })
                            }
                        />
                        <Input
                            placeholder={"이름"}
                            value={baseInfo.brideLastName}
                            onChange={event =>
                                update(draft => {
                                    draft.baseInfo.brideLastName = event.target.value;
                                })
                            }
                        />
                        <Input
                            placeholder={"관계"}
                            value={baseInfo.brideFamilyName}
                            onChange={event =>
                                update(draft => {
                                    draft.baseInfo.brideFamilyName = event.target.value;
                                })
                            }
                        />
                    </View>
                    <View
                        flexDirection={"row"}
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <Input
                            placeholder={"영문 이름"}
                            value={baseInfo.brideEnglishName}
                            onChange={event =>
                                update(draft => {
                                    draft.baseInfo.brideEnglishName = event.target.value;
                                })
                            }
                            ui={css`
                                flex: 1;
                            `}
                        />
                        <Spacer />
                        <Spacer />
                    </View>
                </View>
            </View>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    신부 아버지
                </Text>
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 8px;
                        align-items: center;
                    `}
                >
                    <Input
                        placeholder={"성"}
                        value={baseInfo.brideFatherFirstName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideFatherFirstName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Input
                        placeholder={"이름"}
                        value={baseInfo.brideFatherLastName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideFatherLastName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Input
                        placeholder={"관계"}
                        value={baseInfo.brideFatherFamilyName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideFatherFamilyName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                </View>
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: flex-start;
                        gap: 8px;
                    `}
                >
                    <Checkbox
                        checked={baseInfo.brideFatherStatus}
                        OnChange={checked =>
                            update(draft => {
                                draft.baseInfo.brideFatherStatus = checked;
                            })
                        }
                        label={"故"}
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Spacer />
                    <Spacer />
                </View>
            </View>
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    신부 어머니
                </Text>
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 8px;
                        align-items: center;
                    `}
                >
                    <Input
                        placeholder={"성"}
                        value={baseInfo.brideMotherFirstName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideMotherFirstName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Input
                        placeholder={"이름"}
                        value={baseInfo.brideMotherLastName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideMotherLastName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Input
                        placeholder={"관계"}
                        value={baseInfo.brideMotherFamilyName}
                        onChange={event =>
                            update(draft => {
                                draft.baseInfo.brideMotherFamilyName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                        `}
                    />
                </View>
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: flex-start;
                        gap: 8px;
                    `}
                >
                    <Checkbox
                        checked={baseInfo.brideMotherStatus}
                        OnChange={checked =>
                            update(draft => {
                                draft.baseInfo.brideMotherStatus = checked;
                            })
                        }
                        label={"故"}
                        ui={css`
                            flex: 1;
                        `}
                    />
                    <Spacer />
                    <Spacer />
                </View>
            </View>
        </EditorInspectorWrapper>
    );
};

export default WeddingInvitationEditorBrideInspector;
