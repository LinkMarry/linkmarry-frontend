import React, {useRef, useState} from 'react';
import styled, {css} from "styled-components";
import MoneyInfo, {getMoneyInfoByBrideMarkFirst, MoneyInfoByBrideMarkFirst} from "@remote/value/MoneyInfo";
import Spacer from "@designsystem/component/Spacer";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import BaseInfo, {BaseInfoByBrideMarkFirst, getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import FadeIn from "@src/component/fadein/FadeIn";
import View from "@designsystem/core/View";
import Button from "@designsystem/component/Button";

interface Props {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
}

function MoneyInfoTemplate(
    {
        baseInfo,
        moneyInfo
    }: Props
) {
    const moneyInfoRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(moneyInfoRef, [moneyInfo]);

    return (
        <Column $alignItems={'stretch'} ref={moneyInfoRef} $ui={css`
            padding: 92px 60px;
            background: white;
        `}>
            <Column $gap={40} $alignItems={'stretch'}>
                <Column $gap={12} $alignItems={'stretch'}>
                    <Text size={20} weight={300} ui={css`
                        color: var(--g-600);
                        text-align: center;
                        word-break: break-all;
                    `}>{moneyInfo.infoTitle}</Text>
                    <Text size={16} weight={300} ui={css`
                        color: var(--g-600);
                        word-break: break-all;
                        text-align: center;
                    `}>{moneyInfo.infoContent}</Text>
                </Column>
                <MoneyInfoComponent baseInfo={baseInfo} moneyInfo={moneyInfo}/>
            </Column>
        </Column>
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
    const {first: firstBaseInfo, second: secondBaseInfo} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {
        first,
        firstFather,
        firstMother,
        second,
        secondFather,
        secondMother
    } = getMoneyInfoByBrideMarkFirst(moneyInfo, baseInfo.brideMarkFirst);

    return (
        <Column $gap={16} $alignItems={'stretch'} $alignSelf={'stretch'}>
            <FadeIn>
                <MoneyInfoContainer
                    baseInfo={firstBaseInfo}
                    me={first}
                    father={firstFather}
                    mother={firstMother}
                    kakaoStatus={moneyInfo.kakaoStatus}
                />
            </FadeIn>
            <FadeIn>
                <MoneyInfoContainer
                    baseInfo={secondBaseInfo}
                    me={second}
                    father={secondFather}
                    mother={secondMother}
                    kakaoStatus={moneyInfo.kakaoStatus}
                />
            </FadeIn>
        </Column>
    );
}

interface MoneyInfoContainerProps {
    baseInfo: BaseInfoByBrideMarkFirst;
    me: MoneyInfoByBrideMarkFirst;
    father: MoneyInfoByBrideMarkFirst;
    mother: MoneyInfoByBrideMarkFirst;
    kakaoStatus: boolean;
}

const MoneyInfoContainer = ({baseInfo, me, father, mother, kakaoStatus}: MoneyInfoContainerProps) => {
    const [toggle, setToggle] = useState(false);
    return (
        <View $ui={css`
            border-radius: 12px;
            background: var(--g-100);
        `}>
            <Row $alignItems={'center'} $ui={css`
                padding: 10px 20px;
                cursor: pointer;
            `} onClick={() => setToggle(i => !i)}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-600);
                `}>{baseInfo.korean}측</Text>
                <Spacer/>
                <Icon iconType={IconType.ExpandArrow} ui={css`
                    fill: var(--g-400);
                    ${toggle ? css`
                        rotate: 90deg;
                    ` : css`
                        rotate: -90deg;
                    `}
                `}/>
            </Row>
            {toggle && (
                <>
                    {me.toggle && (
                        <MoneyCell moneyInfo={me} kakaoStatus={kakaoStatus}/>
                    )}
                    {father.toggle && (
                        <MoneyCell moneyInfo={father} kakaoStatus={kakaoStatus}/>
                    )}
                    {mother.toggle && (
                        <MoneyCell moneyInfo={mother} kakaoStatus={kakaoStatus}/>
                    )}
                </>
            )}
        </View>
    );
};

interface MoneyCellProps {
    moneyInfo: MoneyInfoByBrideMarkFirst;
    kakaoStatus: boolean;
}

function MoneyCell({moneyInfo, kakaoStatus}: MoneyCellProps) {
    const fullBankNumber = `${moneyInfo.bankName} ${moneyInfo.bankNumber}`;
    return (
        <Column
            $gap={8}
            $alignItems={'stretch'}
            $ui={css`
                padding: 16px 20px;
                background: white;

                border-top: 1px solid var(--g-100);
            `}
        >
            <Row $gap={4}>
                <Text type={'p3'}>{moneyInfo.korean}</Text>
                <Text type={'p3'}>{moneyInfo.nameMoneyInfo}</Text>
            </Row>
            <Row $alignItems={'center'} $ui={css`
                border-radius: 4px;
            `}>
                <Text type={'p3'}>{fullBankNumber}</Text>
                <Spacer/>
                <Icon iconType={IconType.Copy} size={20} ui={css`
                    fill: var(--g-400);
                `} onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(fullBankNumber);
                        alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                    } catch (error) {
                        console.error(error);
                    }
                }}/>
            </Row>
            {kakaoStatus && (
                <Button
                    text={'카카오페이 간편송금'}
                    size={'medium'}
                    buttonType={'tonal'}
                    leadingIcon={IconType.Kakao}
                    onClick={() => window.open(moneyInfo.kakaoUrl)}
                />
            )}
        </Column>
    );
}

export default MoneyInfoTemplate;
