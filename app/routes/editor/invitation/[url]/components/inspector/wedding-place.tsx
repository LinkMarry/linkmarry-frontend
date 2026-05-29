import {Text, Divider, Input, FormToggleSet, FormToggle, Button, Icon, View, KakaoMapDialog} from "~/components";
import {useState} from "react";

import EditorInspectorWrapper from "~/routes/editor/invitation/[url]/components/EditorInspectorWrapper.tsx";
import type Binding from "~/lib/Binding.ts";
import {getPlaceholder} from "~/domain";

import {css} from "@linaria/core";

import {formatPhone} from "~/lib/format-util.ts";
import type {Wedding} from "~/domain";

const EditorInspectorWeddingPlace = ({value: {weddingPlace}, update}: Binding<Wedding>) => {
    const [showKakaoMapDialog, setShowKakaoMapDialog] = useState(false);

    return (
        <EditorInspectorWrapper type={"weddingPlace"}>
            <KakaoMapDialog
                show={showKakaoMapDialog}
                weddingPlace={weddingPlace}
                onChange={weddingPlace =>
                    update(draft => {
                        draft.weddingPlace = weddingPlace;
                    })
                }
                dismiss={() => setShowKakaoMapDialog(false)}
            />

            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Input
                    placeholder={"예식장명"}
                    value={weddingPlace.placeName}
                    onChange={event =>
                        update(draft => {
                            draft.weddingPlace.placeName = event.target.value;
                        })
                    }
                    ui={css`
                        pointer-events: none;
                    `}
                />
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 12px;
                    `}
                >
                    <Input
                        placeholder={"주소"}
                        value={weddingPlace.addressName}
                        onChange={event =>
                            update(draft => {
                                draft.weddingPlace.addressName = event.target.value;
                            })
                        }
                        ui={css`
                            flex: 1;
                            min-width: 0;
                            pointer-events: none;
                        `}
                    />
                    <Button
                        text={"검색"}
                        buttonType={"tonal"}
                        ui={css`
                            height: auto;
                        `}
                        onClick={() => setShowKakaoMapDialog(true)}
                    />
                </View>
                <Input
                    placeholder={"층/홀"}
                    value={weddingPlace.floorHall}
                    onChange={event =>
                        update(draft => {
                            draft.weddingPlace.floorHall = event.target.value;
                        })
                    }
                />
                <Input
                    placeholder={"연락처"}
                    value={weddingPlace.placeTel}
                    onChange={event =>
                        update(draft => {
                            const value = event.target.value;
                            draft.weddingPlace.placeTel = formatPhone(value);
                        })
                    }
                />
            </View>
            <Divider />
            <View
                ui={css`
                    gap: 12px;
                `}
            >
                <Text type={"p3"} bold={true}>
                    교통편
                </Text>
                {Array.from(weddingPlace.placeTransportation).map((item, index) => {
                    const input = (
                        <Input
                            key={index}
                            placeholder={getPlaceholder(index)}
                            value={item}
                            onChange={event =>
                                update(draft => {
                                    draft.weddingPlace.placeTransportation[index] = event.target.value;
                                })
                            }
                            ui={css`
                                flex: 1;
                            `}
                        />
                    );
                    if (index <= 2) {
                        return input;
                    } else {
                        return (
                            <View
                                flexDirection={"row"}
                                ui={css`
                                    gap: 12px;
                                    align-items: center;
                                `}
                                key={index}
                            >
                                {input}
                                <View
                                    ui={css`
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    `}
                                    onClick={() => {
                                        const copiedPlaceTransportation = [...weddingPlace.placeTransportation];
                                        copiedPlaceTransportation.splice(index, 1);
                                        update(draft => {
                                            draft.weddingPlace.placeTransportation = copiedPlaceTransportation;
                                        });
                                    }}
                                >
                                    <Icon
                                        iconType={"Trash"}
                                        width={24}
                                        height={24}
                                        ui={css`
                                            padding: 8px;
                                            cursor: pointer;
                                        `}
                                    />
                                </View>
                            </View>
                        );
                    }
                })}
                <Button
                    text={"교통편 추가"}
                    leadingIcon={"AddLine"}
                    buttonType={"tonal"}
                    onClick={() => {
                        update(draft => {
                            draft.weddingPlace.placeTransportation.push("");
                        });
                    }}
                />
            </View>
            <Divider />
            <FormToggleSet>
                <FormToggle
                    checked={weddingPlace.placeStatus}
                    OnChange={checked =>
                        update(draft => {
                            draft.weddingPlace.placeStatus = checked;
                        })
                    }
                    label={"지도 표시"}
                />
                <FormToggle
                    checked={weddingPlace.placeLock}
                    OnChange={checked =>
                        update(draft => {
                            draft.weddingPlace.placeLock = checked;
                        })
                    }
                    label={"지도 잠금"}
                />
                <FormToggle
                    checked={weddingPlace.placeNav}
                    OnChange={checked =>
                        update(draft => {
                            draft.weddingPlace.placeNav = checked;
                        })
                    }
                    label={"네비게이션"}
                />
            </FormToggleSet>
        </EditorInspectorWrapper>
    );
};

export default EditorInspectorWeddingPlace;
