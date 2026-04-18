import {useRef, useState} from 'react';
import Text from "~/components/core/Text.tsx";
import Divider from "~/components/core/Divider.tsx";
import Button from "~/components/core/Button.tsx";
import {css} from "@linaria/core";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import type BaseInfo from "~/api/value/BaseInfo.ts";
import ContactingCongratulationDialog
    from "~/components/WeddingComponent/component/dialog/ContactingCongratulationDialog.tsx";
import type Phone from "~/api/value/Phone.ts";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";
import FadeIn from "~/components/core/fadein/FadeIn.tsx";
import {backgroundStyle} from "~/api/value/WeddingDesign.ts";
import View from "~/components/core/View.tsx";
import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";

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
                                    flex-direction: row !important;
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
                                flex-direction: row !important;
                                gap: 8px;
                                align-items: center;
                            `}>
                                <Text weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{first.korean}&nbsp;</Text>
                                <Text weight={100} size={24}>
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
                                    flex-direction: row !important;
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
                                flex-direction: row !important;
                                gap: 8px;
                                align-items: center;
                            `}>
                                <Text weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{second.korean}&nbsp;</Text>
                                <Text weight={100} size={24}>
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
