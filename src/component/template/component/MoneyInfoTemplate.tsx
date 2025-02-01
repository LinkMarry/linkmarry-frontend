import React, {useRef, useState} from 'react';
import styled from "styled-components";
import MoneyInfo, {getMoneyInfoByBrideMarkFirst} from "@remote/value/MoneyInfo";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Icon, {IconType} from "@designsystem/foundation/icon";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";

interface MoneyInfoTemplateProps {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
}

function MoneyInfoTemplate(
    {
        baseInfo,
        moneyInfo
    }: MoneyInfoTemplateProps
) {
    const moneyInfoRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(moneyInfoRef, [moneyInfo]);
    
    return (
        <S.root ref={moneyInfoRef}>
            <Column gap={40} $alignItems={'center'}>
                <Text size={20} weight={300} color={colors.g600}>마음 전하실 곳</Text>
                <MoneyInfoComponent baseInfo={baseInfo} moneyInfo={moneyInfo}/>
            </Column>
        </S.root>
    );
}

interface MoneyInfoProps {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
}

function MoneyInfoComponent(
    {
        baseInfo,
        moneyInfo
    }: MoneyInfoProps
) {
    const [clickedGroom, setClickedGroom] = useState(false);
    const [clickedBride, setClickedBride] = useState(false);

    const {first: firstBaseInfo, second: secondBaseInfo} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {
        first: firstMoneyInfo,
        second: secondMoneyInfo
    } = getMoneyInfoByBrideMarkFirst(moneyInfo, baseInfo.brideMarkFirst);

    return (
        <S.container>
            <div>
                <div onClick={() => setClickedGroom(i => !i)}>
                    <Text type={'p4'} color={colors.g600} weight={'bold'}>{firstBaseInfo.korean}측</Text>
                    <Spacer/>
                    <Icon type={IconType.ExpandArrow} tint={colors.g600}
                          style={{rotate: clickedGroom ? '90deg' : '-90deg'}}/>
                </div>
                {clickedGroom && (
                    <>
                        <MoneyCell name={firstMoneyInfo.nameMoneyInfo} bankName={firstMoneyInfo.bankName}
                                   bankNumber={firstMoneyInfo.bankNumber} isGroom={true}/>
                        <MoneyCell name={firstMoneyInfo.fatherNameMoneyInfo} bankName={firstMoneyInfo.fatherBankName}
                                   bankNumber={firstMoneyInfo.fatherBankNumber} isGroom={true}/>
                        <MoneyCell name={firstMoneyInfo.motherNameMoneyInfo} bankName={firstMoneyInfo.motherBankName}
                                   bankNumber={firstMoneyInfo.motherBankNumber} isGroom={true}/>
                    </>
                )}
            </div>
            <div>
                <div onClick={() => setClickedBride(i => !i)}>
                    <Text type={'p4'} color={colors.p800} weight={'bold'}>{secondBaseInfo.korean}측</Text>
                    <Spacer/>
                    <Icon type={IconType.ExpandArrow} tint={colors.p800}
                          style={{rotate: clickedBride ? '90deg' : '-90deg'}}/>
                </div>
                {clickedBride && (
                    <>

                        <MoneyCell name={secondMoneyInfo.nameMoneyInfo} bankName={secondMoneyInfo.bankName}
                                   bankNumber={secondMoneyInfo.bankNumber} isGroom={false}/>
                        <MoneyCell name={secondMoneyInfo.fatherNameMoneyInfo} bankName={secondMoneyInfo.fatherBankName}
                                   bankNumber={secondMoneyInfo.fatherBankNumber} isGroom={false}/>
                        <MoneyCell name={secondMoneyInfo.motherNameMoneyInfo} bankName={secondMoneyInfo.motherBankName}
                                   bankNumber={secondMoneyInfo.motherBankNumber} isGroom={false}/>
                    </>
                )}
            </div>
        </S.container>
    );
}

const S = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        padding: 92px 60px;
        background: ${colors.white};
        align-items: stretch;
    `,
    container: styled.div`
        display: flex;
        flex-direction: column;
        align-self: stretch;
        gap: 16px;

        > div {
            border-radius: 12px;

            > div:first-child {
                display: flex;
                align-items: center;
                padding: 10px 20px;
                cursor: pointer;
            }
        }

        > div:first-child {
            background: ${colors.g100};

            > span {
                color: ${colors.g600};
            }
        }

        > div:nth-child(2) {
            background: ${colors.p100};

            > span {
                color: ${colors.p800};
            }
        }
    `
}

function MoneyCell(props: {
    name: string,
    bankName: string,
    bankNumber: string,
    isGroom: boolean,
}) {
    const fullBankNumber = `${props.bankName} ${props.bankNumber}`;
    return (
        <Column
            gap={8}
            $alignItems={'stretch'}
            style={{
                padding: '12px 20px',
                borderTop: `1px solid ${props.isGroom ? colors.g200 : colors.p400}`,
            }}
        >
            <Text type={'p5'}>{props.name}</Text>
            <Row $alignItems={'center'} style={{
                padding: '8px 16px',
                background: colors.white,
                borderRadius: 4
            }}>
                <Text type={'btn1'}>{fullBankNumber}</Text>
                <Spacer/>
                <Icon type={IconType.Copy} tint={colors.g400} size={20} onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(fullBankNumber);
                        alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                    } catch (error) {
                        console.error(error);
                    }
                }}/>
            </Row>
        </Column>
    );
}

export default MoneyInfoTemplate;