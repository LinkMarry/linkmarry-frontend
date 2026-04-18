import {useRef, useState} from 'react';
import {css, cx} from "@linaria/core";
import type MoneyInfo from "~/api/value/MoneyInfo.ts";
import {getMoneyInfoByBrideMarkFirst, type MoneyInfoByBrideMarkFirst} from "~/api/value/MoneyInfo.ts";
import Spacer from "~/components/core/Spacer.tsx";
import Icon from "~/components/core/icon";
import Text from "~/components/core/Text.tsx";
import type BaseInfo from "~/api/value/BaseInfo.ts";
import {getBaseInfoByBrideMarkFirst, type BaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate.ts";
import FadeIn from "~/components/core/fadein/FadeIn.tsx";
import View from "~/components/core/View.tsx";
import Button from "~/components/core/Button.tsx";
import type {WeddingMode} from "~/components/WeddingComponent/WeddingMode.ts";

interface Props {
    baseInfo: BaseInfo;
    moneyInfo: MoneyInfo;
    mode: WeddingMode;
}

function MoneyInfoTemplate(
    {
        baseInfo,
        moneyInfo,
        mode
    }: Props
) {
    const moneyInfoRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(moneyInfoRef, [moneyInfo], mode === 'preview');

    return (
        <View ref={moneyInfoRef} ui={css`
            padding: 92px 60px;
            background: white;
        `}>
            <View ui={css`
                gap: 40px;
            `}>
                <View ui={css`
                    gap: 12px;
                `}>
                    <Text size={20} weight={300} ui={css`
                        color: var(--g-600);
                        text-align: center;
                        word-break: break-all;
                    `}>{moneyInfo.infoTitle}</Text>
                    <Text size={16} weight={300} ui={css`
                        color: var(--g-600);
                        word-break: break-all;
                        text-align: center;
                        white-space: pre-line;
                    `}>{moneyInfo.infoContent}</Text>
                </View>
                <MoneyInfoComponent baseInfo={baseInfo} moneyInfo={moneyInfo}/>
            </View>
        </View>
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
        <View ui={css`
            align-self: stretch;
            gap: 16px;
        `}>
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
        </View>
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
        <View ui={css`
            border-radius: 12px;
            background: var(--g-100);
        `}>
            <View ui={css`
                flex-direction: row !important;
                align-items: center;
                padding: 10px 20px;
                cursor: pointer;
            `} onClick={() => setToggle(i => !i)}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-600);
                `}>{baseInfo.korean}측</Text>
                <Spacer/>
                <Icon iconType={'ExpandArrow'} ui={cx(
                    css`
                        fill: var(--g-400);
                    `,
                    toggle ? css`
                        rotate: 90deg;
                    ` : css`
                        rotate: -90deg;
                    `
                )}/>
            </View>
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
        <View ui={css`
            gap: 8px;
            padding: 16px 20px;
            background: white;
            border-top: 1px solid var(--g-100);
        `}>
            <View ui={css`
                flex-direction: row !important;
                gap: 4px;
            `}>
                <Text type={'p3'}>{moneyInfo.korean}</Text>
                <Text type={'p3'}>{moneyInfo.nameMoneyInfo}</Text>
            </View>
            <View ui={css`
                flex-direction: row !important;
                align-items: center;
                border-radius: 4px;
            `}>
                <Text type={'p3'}>{fullBankNumber}</Text>
                <Spacer/>
                <Icon iconType={'Copy'} size={20} ui={css`
                    fill: var(--g-400);
                `} onClick={async () => {
                    try {
                        await navigator.clipboard.writeText(fullBankNumber);
                        alert("복사되었습니다. 원하는 곳에 붙여넣기하여 주세요.");
                    } catch (error) {
                        console.error(error);
                    }
                }}/>
            </View>
            {kakaoStatus && (
                <Button
                    text={'카카오페이 간편송금'}
                    size={'medium'}
                    buttonType={'tonal'}
                    leadingIcon={'Kakao'}
                    onClick={() => window.open(moneyInfo.kakaoUrl)}
                />
            )}
        </View>
    );
}

export default MoneyInfoTemplate;
