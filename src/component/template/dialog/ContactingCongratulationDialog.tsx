import React, {useState} from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import makeText from "@designsystem/foundation/text/textType";
import Phone from "@remote/value/Phone";
import BaseInfo from "@remote/value/BaseInfo";
import Spacer from "@designsystem/component/spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";

interface ContactTemplateDialogProps {
    baseInfo: BaseInfo;
    phone: Phone;
    dismiss: () => void;
}

function ContactingCongratulationDialog(
    {
        baseInfo,
        phone,
        dismiss
    }: ContactTemplateDialogProps
) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tels: {
        name: string,
        familyName: string,
        tel: string;
    }[] = selectedIndex === 0
        ? [
            {
                name: baseInfo.groomName,
                familyName: '신랑',
                tel: phone.groomTel
            },
            {
                name: baseInfo.groomFatherName,
                familyName: '아버지',
                tel: phone.groomFatherTel
            },
            {
                name: baseInfo.groomMotherName,
                familyName: '어머니',
                tel: phone.groomMotherTel
            }
        ]
        : [
            {
                name: baseInfo.brideName,
                familyName: '신부',
                tel: phone.brideTel
            },
            {
                name: baseInfo.brideFatherName,
                familyName: '아버지',
                tel: phone.brideFatherTel
            },
            {
                name: baseInfo.brideMotherName,
                familyName: '어머니',
                tel: phone.brideMotherTel
            }
        ];

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={4} $alignItems={'center'}>
                    <Text type={'h6'}>축하 연락하기</Text>
                    <Text type={'caption1'} color={colors.g400}>축하의 마음을 전하세요</Text>
                </Column>
                <Row $alignItems={'stretch'}>
                    <S.selector selected={selectedIndex === 0} onClick={() => setSelectedIndex(0)}>신랑측</S.selector>
                    <S.selector selected={selectedIndex === 1} onClick={() => setSelectedIndex(1)}>신부측</S.selector>
                </Row>
                <Column gap={16} $alignItems={'stretch'}>
                    {tels.map(tel => (
                        <S.tel>
                            <Row gap={12} $alignItems={'center'}>
                                <Text type={'p5'}>{tel.name}</Text>
                                <Text type={'caption1'} color={colors.g300}>{tel.familyName}</Text>
                            </Row>
                            <Spacer/>
                            <Row gap={12} $alignItems={'center'}>
                                <S.iconWrapper onClick={() => {
                                    window.open(`sms:${tel.tel}`)
                                }}>
                                    <Icon type={IconType.Chat} tint={colors.g600} size={20}/>
                                </S.iconWrapper>
                                <S.iconWrapper onClick={() => {
                                    window.open(`tel:${tel.tel}`);
                                }}>
                                    <Icon type={IconType.Call} tint={colors.g600} size={20}/>
                                </S.iconWrapper>
                            </Row>
                        </S.tel>
                    ))}
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        width: 90vw;
        min-width: 240px;
        max-width: 388px;
        padding: 44px 24px;
        gap: 40px;
        align-items: stretch;
        background: ${colors.white};
        border-radius: 12px;
        ${applyBaseDialogContent()};
    `,
    selector: styled.div<{ selected: boolean }>`
        display: flex;
        height: 45px;
        flex: 1;
        align-items: center;
        justify-content: center;
        ${makeText('caption1')};
        border-bottom: 1px solid ${({selected}) => selected ? colors.p800 : colors.g100};
        cursor: pointer;
    `,
    tel: styled.div`
        display: flex;
        padding: 20px 16px;
        align-items: center;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
        border-radius: 8px;
    `,
    iconWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 100px;
        background: ${colors.g100};
        cursor: pointer;
    `
}

export default ContactingCongratulationDialog;