import React, {useState} from 'react';
import styled, {css} from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import makeText from "@src/userinterface/foundation/text/TextType";
import Phone from "@src/infrastructure/network/value/Phone";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@src/infrastructure/network/value/BaseInfo";
import Spacer from "@src/userinterface/component/Spacer";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";

interface ContactTemplateDialogProps {
    baseInfo: BaseInfo;
    phone: Phone;
    dismiss: () => void;
}

interface Tel {
    name: string;
    familyName: string;
    tel: string;
}

function ContactingCongratulationDialog(
    {
        baseInfo,
        phone,
        dismiss
    }: ContactTemplateDialogProps
) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const tels = ((): Tel[] => {
        const groomTels: Tel[] = [
            {
                name: baseInfo.groomFirstName + baseInfo.groomLastName,
                familyName: '신랑',
                tel: phone.groomTel
            },
            ...(phone.parentTel ? [
                {
                    name: baseInfo.groomFatherFirstName + baseInfo.groomFatherLastName,
                    familyName: '아버지',
                    tel: phone.groomFatherTel
                },
                {
                    name: baseInfo.groomMotherFirstName + baseInfo.groomMotherLastName,
                    familyName: '어머니',
                    tel: phone.groomMotherTel
                }
            ] : []),
        ];

        const brideTels: Tel[] = [
            {
                name: baseInfo.brideFirstName + baseInfo.brideLastName,
                familyName: '신부',
                tel: phone.brideTel
            },
            ...(phone.parentTel ? [
                {
                    name: baseInfo.brideFatherFirstName + baseInfo.brideFatherLastName,
                    familyName: '아버지',
                    tel: phone.brideFatherTel
                },
                {
                    name: baseInfo.brideMotherFirstName + baseInfo.brideMotherLastName,
                    familyName: '어머니',
                    tel: phone.brideMotherTel
                }
            ] : [])
        ];

        const firstTels = baseInfo.brideMarkFirst ? brideTels : groomTels;
        const secondTels = baseInfo.brideMarkFirst ? groomTels : brideTels
        return selectedIndex === 0 ? firstTels : secondTels;
    })();

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $ui={css`
                width: 90vw;
                min-width: 240px;
                max-width: 388px;
                padding: 44px 24px;
                gap: 40px;
                align-items: stretch;
                background: white;
                border-radius: 12px;
                ${applyBaseDialogContent()};
            `}>
                <Column $gap={4} $alignItems={'center'}>
                    <Text type={'p1'} bold={true}>축하 연락하기</Text>
                    <Text type={'caption1'} ui={css`
                        color: var(--g-400);
                    `}>축하의 마음을 전하세요</Text>
                </Column>
                <Row $alignItems={'stretch'}>
                    <S.selector selected={selectedIndex === 0}
                                onClick={() => setSelectedIndex(0)}>{first.korean}측</S.selector>
                    <S.selector selected={selectedIndex === 1}
                                onClick={() => setSelectedIndex(1)}>{second.korean}측</S.selector>
                </Row>
                <Column $gap={16} $alignItems={'stretch'}>
                    {tels.map(tel => (
                        <Row $ui={css`
                            padding: 20px 16px;
                            align-items: center;
                            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
                            border-radius: 8px;
                        `}>
                            <Row $gap={12} $alignItems={'center'}>
                                <Text type={'p3'}>{tel.name}</Text>
                                <Text type={'caption1'} ui={css`
                                    color: var(--g-400);
                                `}>{tel.familyName}</Text>
                            </Row>
                            <Spacer/>
                            <Row $gap={12} $alignItems={'center'}>
                                <S.iconWrapper onClick={() => {
                                    window.open(`sms:${tel.tel}`)
                                }}>
                                    <Icon iconType={IconType.Chat} size={20} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                </S.iconWrapper>
                                <S.iconWrapper onClick={() => {
                                    window.open(`tel:${tel.tel}`);
                                }}>
                                    <Icon iconType={IconType.Call} size={20} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                </S.iconWrapper>
                            </Row>
                        </Row>
                    ))}
                </Column>
            </Column>
        </BaseDialog>
    );
}

const S = {
    selector: styled.div<{ selected: boolean }>`
        display: flex;
        height: 45px;
        flex: 1;
        align-items: center;
        justify-content: center;
        ${makeText('caption1')};
        ${({selected}) => selected ? css`
            border-bottom: 1px solid var(--p-800);
        ` : css`
            border-bottom: 1px solid var(--g-100);
        `};
        cursor: pointer;
    `,
    iconWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 100px;
        background: var(--g-100);
        cursor: pointer;
    `
}

export default ContactingCongratulationDialog;
