import {BaseDialog, View, Button, Text, Icon} from "~/components";
import {type ChangeEvent} from "react";
import {css, cx} from "@linaria/core";

import {baseDialogContentStyle} from "~/components/core/dialog/baseDialogContentStyle.ts";
import {textStyles} from "~/components/core/text/TextType.ts";
import {useKakaoMapDialog} from "./hook.ts";
import type {WeddingPlace} from "~/domain";

interface KakaoMapDialogProps {
    show: boolean;
    weddingPlace: WeddingPlace;
    onChange: (weddingPlace: WeddingPlace) => void;
    dismiss: () => void;
}

export const KakaoMapDialog = ({show, weddingPlace, onChange, dismiss}: KakaoMapDialogProps) => {
    const {
        kakaoMapRef,
        places,
        selectedPlace,
        searchText,
        setSearchText,
        keywordSearch,
        handleSelectPlace,
        confirmSelection,
    } = useKakaoMapDialog({show, weddingPlace, onChange, dismiss});

    return (
        <BaseDialog show={show} dismiss={dismiss}>
            <View
                ui={cx(
                    css`
                        width: 90vw;
                        max-width: 412px;
                        height: 75vh;
                        border-radius: 12px;
                        background: white;
                    `,
                    baseDialogContentStyle,
                )}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: center;
                        padding-right: 20px;
                    `}
                >
                    <View
                        as={"input"}
                        value={searchText}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
                        onKeyDown={(event: KeyboardEvent) => {
                            if (event.key === "Enter") {
                                keywordSearch(searchText);
                            }
                        }}
                        placeholder={"장소 검색"}
                        ui={cx(
                            textStyles.p1.normal,
                            css`
                                padding: 20px;
                                outline: none;
                                border: none;
                                flex: 1;
                                min-width: 0;
                            `,
                        )}
                    />
                    <Icon
                        iconType={"Search"}
                        onClick={() => {
                            keywordSearch(searchText);
                        }}
                        size={28}
                        ui={css`
                            fill: var(--g-500);
                            cursor: pointer;
                        `}
                    />
                </View>
                <View
                    ref={kakaoMapRef}
                    ui={css`
                        display: flex;
                        flex: 1;
                        position: relative;
                    `}
                />
                {/* 결과 출력 */}
                <View
                    ui={css`
                        gap: 10px;
                        padding: 16px;
                    `}
                >
                    <Text
                        type={"p2"}
                        bold={true}
                        ui={css`
                            color: var(--g-500);
                            margin-left: 14px;
                            margin-top: 4px;
                        `}
                    >
                        장소 선택
                    </Text>
                    <View
                        as={"ul"}
                        ui={css`
                            gap: 4px;
                            height: 128px;
                            overflow-y: scroll;
                            padding: 4px;
                        `}
                    >
                        {places?.map((place, index) => {
                            const selected = place.id === selectedPlace?.id;
                            return (
                                <View
                                    key={index}
                                    as={"li"}
                                    ui={cx(
                                        css`
                                            &:hover {
                                                background: var(--g-100);
                                            }

                                            align-items: flex-start;
                                            border-radius: 8px;
                                            padding: 12px;
                                            transition: 0.1s background;
                                        `,
                                        selected
                                            ? css`
                                                  border: 1px solid var(--g-800);
                                              `
                                            : undefined,
                                    )}
                                    onClick={() => handleSelectPlace(place)}
                                >
                                    <Text type={"p2"}>{place.address_name}</Text>
                                    <Text
                                        type={"p3"}
                                        ui={css`
                                            text-decoration: underline;
                                            color: var(--g-500);
                                            cursor: pointer;
                                        `}
                                        onClick={() => {
                                            window.open(place.place_url, "_blank");
                                        }}
                                    >
                                        {place.place_name}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                    <Button text={"선택"} enabled={selectedPlace !== undefined} onClick={confirmSelection} />
                </View>
            </View>
        </BaseDialog>
    );
};
