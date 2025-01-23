import React, {useState} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import Button from "@designsystem/component/button";
import styled from "styled-components";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import ContactingCongratulationDialog from "@src/component/template/dialog/ContactingCongratulationDialog";
import Phone from "@remote/value/Phone";

interface CongratulationsProps {
    baseInfo: BaseInfo;
    phone: Phone;
    templateColor: string;
}

function CongratulationsTemplate(
    {
        baseInfo,
        phone,
        templateColor
    }: CongratulationsProps
) {
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <S.root background={templateColor}>
            <Column gap={96} $alignItems={'stretch'}>
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={8} $alignItems={'center'}>
                        <Text
                            font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignSelf: 'stretch',
                                wordBreak: 'break-all',
                            }}
                        >
                            <Row $alignItems={'center'} gap={4}>
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
                        <Row gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}>
                                {first.korean}&nbsp;
                            </Text>
                            <Text font={'GangwonEduAll'} weight={100} size={24}>
                                {first.name}
                            </Text>
                        </Row>
                    </Column>
                    <HorizontalDivider color={colors.g200}/>
                    <Column gap={8} $alignItems={'center'}>
                        <Text
                            font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignSelf: 'stretch',
                                wordBreak: 'break-all'
                            }}
                        >
                            <Row $alignItems={'center'} gap={4}>
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
                        <Row gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24}
                                  color={colors.g600}>
                                {second.korean}&nbsp;
                            </Text>
                            <Text font={'GangwonEduAll'} weight={100} size={24}>
                                {second.name}
                            </Text>
                        </Row>
                    </Column>
                </Column>
                <Button text={'축하 연락하기'} onClick={() => {
                    setShowContactingCongratulationDialog(true);
                }}/>
            </Column>

            {showContactingCongratulationDialog && (
                <ContactingCongratulationDialog
                    baseInfo={baseInfo}
                    phone={phone}
                    dismiss={() => setShowContactingCongratulationDialog(false)}
                />
            )}
        </S.root>
    );
}


const S = {
    root: styled.div<{ background: string }>`
        display: flex;
        flex-direction: column;
        background: ${({background}) => background};
        padding: 92px 60px;
        align-items: stretch;
    `
};

export default CongratulationsTemplate;