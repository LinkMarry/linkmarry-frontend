import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {DesignColor} from "@remote/value/WeddingDesign";
import Button from "@designsystem/component/Button";
import Divider from "@designsystem/component/Divider";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import {css} from "styled-components";
import FadeIn from "@src/component/fadein/FadeIn";

interface RsvpTemplateProps {
    weddingDesignColor: DesignColor;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    onClickCreateRsvp: () => void;
}

function RsvpTemplate(
    {
        weddingDesignColor,
        baseInfo,
        weddingSchedule,
        onClickCreateRsvp
    }: RsvpTemplateProps
) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <FadeIn>
            <Column gap={40} alignment={'center'} ui={css`
                padding: 92px 60px;
                background: ${weddingDesignColor};
            `}>
                <Column alignment={'center'}>
                    <FadeIn>
                        <Text size={24} weight={300} ui={css`
                            color: var(--g-600);
                            word-break: break-all;
                            text-align: center;
                        `}>RSVP</Text>
                    </FadeIn>
                    <FadeIn>
                        <Text size={18} weight={300} ui={css`
                            color: var(--g-600);
                            word-break: break-all;
                            text-align: center;
                        `}>참석의사를 알려주세요!</Text>
                    </FadeIn>
                </Column>
                <Column alignment={'stretch'} $alignSelf={'stretch'} gap={62} ui={css`
                    padding: 32px 28px;
                    background: white;
                    border-radius: 12px;
                `}>
                    <FadeIn>
                        <Column gap={40} alignment={'stretch'}>
                            <Column gap={20} alignment={'stretch'}>
                                <Row gap={6} alignment={'center'} ui={css`
                                    padding: 5px 0;
                                `}>
                                    <Text
                                        size={16} weight={300}
                                        ui={css`
                                            flex: 1;
                                            text-align: center;
                                        `}
                                    >{first.korean} {first.name}</Text>
                                    <Icon iconType={IconType.HeartFill} size={16} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                    <Text size={16} weight={300} ui={css`
                                        flex: 1;
                                        text-align: center;
                                    `}>{second.korean} {second.name}</Text>
                                </Row>
                                <Divider/>
                            </Column>
                            {isValidDate && (
                                <Text type={'p3'} ui={css`
                                    color: var(--g-600);
                                `}>
                                    <Column gap={12} alignment={'center'}>
                                        <span>{format(date, 'yyyy년 M월 d일')}</span>
                                        <span>{format(date, 'EEEE a h시', {locale: ko})}</span>
                                    </Column>
                                </Text>
                            )}
                        </Column>
                    </FadeIn>
                    <FadeIn ui={css`
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                    `}>
                        <Button text={'참석의사 보내기'} onClick={onClickCreateRsvp}/>
                    </FadeIn>
                </Column>
            </Column>
        </FadeIn>
    );
}

export default RsvpTemplate;
