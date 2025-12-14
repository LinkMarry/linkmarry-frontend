import {useState} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import Text from "~/userinterface/component/Text";
import type Phone from "~/infrastructure/network/value/Phone";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import Spacer from "~/userinterface/component/Spacer";
import Icon from "~/userinterface/foundation/Icon";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import {styled} from "@linaria/react";
import {textStyles} from "~/userinterface/foundation/text/TextType.ts";

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
            <View ui={cx(
                css`
                    width: 90vw;
                    min-width: 240px;
                    max-width: 388px;
                    padding: 44px 24px;
                    gap: 40px;
                    background: white;
                    border-radius: 12px;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    gap: 4px;
                    align-items: center;
                `}>
                    <Text type={'p1'} bold={true}>축하 연락하기</Text>
                    <Text type={'caption1'} ui={css`
                        color: var(--g-400);
                    `}>축하의 마음을 전하세요</Text>
                </View>
                <View ui={css`
                    flex-direction: row !important;
                `}>
                    <View
                        ui={cx(
                            SelectorStyle,
                            textStyles.caption1.normal,
                            selectedIndex === 0 ? css`
                                border-bottom: 1px solid var(--p-800);
                            ` : css`
                                border-bottom: 1px solid var(--g-100);
                            `
                        )}
                        onClick={() => setSelectedIndex(0)}
                    >{first.korean}측</View>
                    <View
                        ui={cx(
                            SelectorStyle,
                            textStyles.caption1.normal,
                            selectedIndex === 0 ? css`
                                border-bottom: 1px solid var(--p-800);
                            ` : css`
                                border-bottom: 1px solid var(--g-100);
                            `
                        )}
                        onClick={() => setSelectedIndex(1)}
                    >{second.korean}측</View>
                </View>
                <View ui={css`
                    gap: 16px;
                `}>
                    {tels.map(tel => (
                        <View ui={css`
                            flex-direction: row !important;
                            padding: 20px 16px;
                            align-items: center;
                            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
                            border-radius: 8px;
                        `}>
                            <View ui={css`
                                flex-direction: row !important;
                                gap: 12px;
                                align-items: center;
                            `}>
                                <Text type={'p3'}>{tel.name}</Text>
                                <Text type={'caption1'} ui={css`
                                    color: var(--g-400);
                                `}>{tel.familyName}</Text>
                            </View>
                            <Spacer/>
                            <View ui={css`
                                gap: 12px;
                                align-items: center;
                            `}>
                                <S.iconWrapper onClick={() => {
                                    window.open(`sms:${tel.tel}`)
                                }}>
                                    <Icon iconType={'Chat'} size={20} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                </S.iconWrapper>
                                <S.iconWrapper onClick={() => {
                                    window.open(`tel:${tel.tel}`);
                                }}>
                                    <Icon iconType={'Call'} size={20} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                </S.iconWrapper>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </BaseDialog>
    );
}

const SelectorStyle = css`
    height: 45px;
    flex: 1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const S = {
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
