import React, {useState} from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import Button from "@designsystem/component/button";
import styled from "styled-components";
import BaseInfo from "@remote/value/BaseInfo";
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
    
    return (
        <S.root background={templateColor}>
            <Column gap={96} $alignItems={'stretch'}>
                <Column gap={40} $alignItems={'center'}>
                    <Column gap={8} $alignItems={'center'}>
                        <Text font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}>
                            {baseInfo.groomFatherName}·{baseInfo.groomMotherName}의 {baseInfo.groomFamilyName}
                        </Text>
                        <Row gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24}
                                  color={colors.g600}>
                                신랑&nbsp;
                            </Text>
                            <Text font={'GangwonEduAll'} weight={100} size={24}>
                                {baseInfo.groomName}
                            </Text>
                        </Row>
                    </Column>
                    <HorizontalDivider color={colors.g200}/>
                    <Column gap={8} $alignItems={'center'}>
                        <Text font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}>
                            {baseInfo.brideFatherName}·{baseInfo.brideMotherName}의 {baseInfo.brideFamilyName}
                        </Text>
                        <Row gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24}
                                  color={colors.g600}>
                                신부&nbsp;
                            </Text>
                            <Text font={'GangwonEduAll'} weight={100} size={24}>
                                {baseInfo.brideName}
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