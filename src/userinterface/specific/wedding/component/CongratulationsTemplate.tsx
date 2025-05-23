import React, {useRef, useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Divider from "@src/userinterface/component/Divider";
import Button from "@src/userinterface/component/Button";
import {css} from "styled-components";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import ContactingCongratulationDialog from "@src/userinterface/specific/wedding/dialog/ContactingCongratulationDialog";
import Phone from "@src/infrastructure/network/value/Phone";
import useScrollOnUpdate from "@src/hook/useScrollOnUpdate";
import FadeIn from "@src/userinterface/specific/fadein/FadeIn";
import {backgroundStyle} from "@src/infrastructure/network/value/WeddingDesign";

interface CongratulationsProps {
    baseInfo: BaseInfo;
    phone: Phone;
    weddingDesignColor: string;
}

function CongratulationsTemplate(
    {
        baseInfo,
        phone,
        weddingDesignColor
    }: CongratulationsProps
) {
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);

    const congratulationsRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(congratulationsRef, [phone]);

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column $alignItems={'stretch'} $ui={css`
            ${backgroundStyle(weddingDesignColor)};
            padding: 92px 60px;
            align-items: stretch;
        `} ref={congratulationsRef}>
            <Column $gap={96} $alignItems={'stretch'}>
                <Column $gap={40} $alignItems={'stretch'}>
                    <FadeIn>
                        <Column $gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                color: var(--g-600);
                                display: flex;
                                justify-content: center;
                                align-self: stretch;
                                word-break: break-all;
                            `}>
                                <Row $alignItems={'center'} $gap={4}>
                                    {first.fatherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {first.fatherName}·
                                    {first.motherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {first.motherName}의 {first.familyName}
                                </Row>
                            </Text>
                            <Row $gap={8} $alignItems={'center'}>
                                <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{first.korean}&nbsp;</Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {first.name}
                                </Text>
                            </Row>
                        </Column>
                    </FadeIn>
                    <FadeIn>
                        <Divider ui={css`
                            color: var(--g-200);
                        `}/>
                    </FadeIn>
                    <FadeIn>
                        <Column $gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                color: var(--g-600);
                                display: flex;
                                justify-content: center;
                                align-self: stretch;
                                word-break: break-all;
                            `}>
                                <Row $alignItems={'center'} $gap={4}>
                                    {second.fatherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {second.fatherName}·
                                    {second.motherStatus && (
                                        <img src={'/Flower.svg'} alt=""/>
                                    )}
                                    {second.motherName}의 {second.familyName}
                                </Row>
                            </Text>
                            <Row $gap={8} $alignItems={'center'}>
                                <Text font={'GangwonEduAll'} weight={100} size={24} ui={css`
                                    color: var(--g-600);
                                `}>{second.korean}&nbsp;</Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {second.name}
                                </Text>
                            </Row>
                        </Column>
                    </FadeIn>
                </Column>
                <FadeIn ui={css`
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                `}>
                    <Button text={'축하 연락하기'} onClick={() => {
                        setShowContactingCongratulationDialog(true);
                    }}/>
                </FadeIn>
            </Column>

            {showContactingCongratulationDialog && (
                <ContactingCongratulationDialog
                    baseInfo={baseInfo}
                    phone={phone}
                    dismiss={() => setShowContactingCongratulationDialog(false)}
                />
            )}
        </Column>
    );
}

export default CongratulationsTemplate;
