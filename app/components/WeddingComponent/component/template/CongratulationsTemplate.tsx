import {Text, Divider, Button, ContactingCongratulationDialog, FadeIn, View} from "~/components";
import {useRef, useState} from "react";

import {css} from "@linaria/core";
import {getBaseInfoByBrideMarkFirst, backgroundStyle} from "~/domain";
import type {BaseInfo, Phone} from "~/domain";

import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";

import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";

interface CongratulationsProps {
    baseInfo: BaseInfo;
    phone: Phone;
    weddingDesignColor: string;
    mode: WeddingMode;
}

export const CongratulationsTemplate = ({baseInfo, phone, weddingDesignColor, mode}: CongratulationsProps) => {
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);

    const congratulationsRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(congratulationsRef, [phone], mode === "preview");

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <View
            ui={css`
                padding: 92px 60px;
            `}
            style={{
                background: backgroundStyle(weddingDesignColor),
            }}
            ref={congratulationsRef}
        >
            <View
                ui={css`
                    gap: 96px;
                `}
            >
                <View
                    ui={css`
                        gap: 40px;
                    `}
                >
                    <FadeIn>
                        <View
                            ui={css`
                                gap: 8px;
                                align-items: center;
                            `}
                        >
                            <Text
                                font={"GangwonEduAll"}
                                weight={100}
                                size={24}
                                ui={css`
                                    color: var(--g-600);
                                    display: flex;
                                    justify-content: center;
                                    align-self: stretch;
                                    word-break: break-all;
                                `}
                            >
                                <View
                                    flexDirection={"row"}
                                    ui={css`
                                        align-items: center;
                                        justify-content: center;
                                        gap: 4px;
                                    `}
                                >
                                    {first.fatherStatus && <img src={"/Flower.svg"} alt="" />}
                                    {first.fatherName}·{first.motherStatus && <img src={"/Flower.svg"} alt="" />}
                                    {first.motherName}의 {first.familyName}
                                </View>
                            </Text>
                            <View
                                flexDirection={"row"}
                                ui={css`
                                    gap: 8px;
                                    align-items: center;
                                `}
                            >
                                <Text
                                    weight={100}
                                    size={24}
                                    ui={css`
                                        color: var(--g-600);
                                    `}
                                >
                                    {first.korean}&nbsp;
                                </Text>
                                <Text weight={100} size={18}>
                                    {first.name}
                                </Text>
                            </View>
                        </View>
                    </FadeIn>
                    <FadeIn>
                        <Divider
                            ui={css`
                                color: var(--g-200);
                            `}
                        />
                    </FadeIn>
                    <FadeIn>
                        <View
                            ui={css`
                                gap: 8px;
                                align-items: center;
                            `}
                        >
                            <Text
                                font={"GangwonEduAll"}
                                weight={100}
                                size={24}
                                ui={css`
                                    color: var(--g-600);
                                    display: flex;
                                    justify-content: center;
                                    align-self: stretch;
                                    word-break: break-all;
                                `}
                            >
                                <View
                                    flexDirection={"row"}
                                    ui={css`
                                        align-items: center;
                                        justify-content: center;
                                        gap: 4px;
                                    `}
                                >
                                    {second.fatherStatus && <img src={"/Flower.svg"} alt="" />}
                                    {second.fatherName}·{second.motherStatus && <img src={"/Flower.svg"} alt="" />}
                                    {second.motherName}의 {second.familyName}
                                </View>
                            </Text>
                            <View
                                flexDirection={"row"}
                                ui={css`
                                    gap: 8px;
                                    align-items: center;
                                `}
                            >
                                <Text
                                    weight={100}
                                    size={24}
                                    ui={css`
                                        color: var(--g-600);
                                    `}
                                >
                                    {second.korean}&nbsp;
                                </Text>
                                <Text weight={100} size={18}>
                                    {second.name}
                                </Text>
                            </View>
                        </View>
                    </FadeIn>
                </View>
                <FadeIn
                    ui={css`
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                    `}
                >
                    <Button
                        text={"축하 연락하기"}
                        onClick={() => {
                            setShowContactingCongratulationDialog(true);
                        }}
                    />
                </FadeIn>
            </View>

            <ContactingCongratulationDialog
                show={showContactingCongratulationDialog}
                baseInfo={baseInfo}
                phone={phone}
                dismiss={() => setShowContactingCongratulationDialog(false)}
            />
        </View>
    );
};
