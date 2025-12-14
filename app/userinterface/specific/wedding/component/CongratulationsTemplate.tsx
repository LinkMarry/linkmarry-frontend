import {useRef, useState} from 'react';
import Text from "~/userinterface/component/Text";
import Divider from "~/userinterface/component/Divider";
import Button from "~/userinterface/component/Button";
import {css} from "@linaria/core";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import ContactingCongratulationDialog from "~/userinterface/specific/wedding/dialog/ContactingCongratulationDialog";
import type Phone from "~/infrastructure/network/value/Phone";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import {backgroundStyle} from "~/infrastructure/network/value/WeddingDesign";
import View from "~/userinterface/core/View.tsx";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";

interface CongratulationsProps {
    baseInfo: BaseInfo;
    phone: Phone;
    weddingDesignColor: string;
    mode: WeddingMode;
}

function CongratulationsTemplate(
    {
        baseInfo,
        phone,
        weddingDesignColor,
        mode
    }: CongratulationsProps
) {
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);

    const congratulationsRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(congratulationsRef, [phone], mode === 'preview');

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <View ui={css`
            padding: 92px 60px;
        `} style={{
            background: backgroundStyle(weddingDesignColor)
        }} ref={congratulationsRef}>
            <View ui={css`
                gap: 96px;
            `}>
                <View ui={css`
                    gap: 40px;
                `}>
                    <FadeIn>
                        <View ui={css`
                            gap: 8px;
                            align-items: center;
                        `}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                color: var(--g-600);
                                display: flex;
                                justify-content: center;
                                align-self: stretch;
                                word-break: break-all;
                            `}>
                                <View ui={css`
                                    flex-direction: row;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 4px;
                                `}>
                                    {first.fatherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {first.fatherName}·
                                    {first.motherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {first.motherName}의 {first.familyName}
                                </View>
                            </Text>
                            <View ui={css`
                                flex-direction: row;
                                gap: 8px;
                                align-items: center;
                            `}>
                                <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{first.korean}&nbsp;</Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {first.name}
                                </Text>
                            </View>
                        </View>
                    </FadeIn>
                    <FadeIn>
                        <Divider ui={css`
                            color: var(--g-200);
                        `}/>
                    </FadeIn>
                    <FadeIn>
                        <View ui={css`
                            gap: 8px;
                            align-items: center;
                        `}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                color: var(--g-600);
                                display: flex;
                                justify-content: center;
                                align-self: stretch;
                                word-break: break-all;
                            `}>
                                <View ui={css`
                                    flex-direction: row;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 4px;
                                `}>
                                    {second.fatherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {second.fatherName}·
                                    {second.motherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {second.motherName}의 {second.familyName}
                                </View>
                            </Text>
                            <View ui={css`
                                flex-direction: row;
                                gap: 8px;
                                align-items: center;
                            `}>
                                <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{second.korean}&nbsp;</Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {second.name}
                                </Text>
                            </View>
                        </View>
                    </FadeIn>
                </View>
                <FadeIn ui={css`
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                `}>
                    <Button text={'축하 연락하기'} onClick={() => {
                        setShowContactingCongratulationDialog(true);
                    }}/>
                </FadeIn>
            </View>

            {showContactingCongratulationDialog && (
                <ContactingCongratulationDialog
                    baseInfo={baseInfo}
                    phone={phone}
                    dismiss={() => setShowContactingCongratulationDialog(false)}
                />
            )}
        </View>
    );
}

export default CongratulationsTemplate;
