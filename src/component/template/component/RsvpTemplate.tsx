import React from 'react';
import Rsvp from "@remote/value/Rsvp";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import {TemplateColor} from "@remote/value/Template";
import Button from "@designsystem/component/button";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import Icon, {IconType} from "@designsystem/foundation/icon";
import BaseInfo, {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";
import WeddingSchedule from "@remote/value/WeddingSchedule";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";

interface RsvpTemplateProps {
    templateColor: TemplateColor;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    rsvp: Rsvp;
    onClickCreateRsvp: () => void;
}

function RsvpTemplate(
    {
        templateColor,
        baseInfo,
        weddingSchedule,
        rsvp,
        onClickCreateRsvp
    }: RsvpTemplateProps
) {
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());

    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <Column gap={40} padding={'92px 60px'} $alignItems={'center'} background={templateColor}>
            <Column $alignItems={'center'}>
                <Text
                    size={24} weight={300} color={colors.g600}
                    style={{wordBreak: 'break-all', textAlign: 'center'}}
                >RSVP</Text>
                <Text
                    size={18} weight={300} color={colors.g600}
                    style={{wordBreak: 'break-all', textAlign: 'center'}}
                >참석의사를 알려주세요!</Text>
            </Column>
            <Column
                padding={'32px 28px'} $alignItems={'stretch'} $alignSelf={'stretch'} gap={62}
                background={colors.white} style={{borderRadius: 12}}
            >
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={20} $alignItems={'stretch'}>
                        <Row gap={6} $alignItems={'center'} padding={'5px 0'}>
                            <Text size={16} weight={300} style={{flex: 1, textAlign: 'center'}}>{first.korean} {first.name}</Text>
                            <Icon type={IconType.HeartFill} size={16} tint={colors.g600}/>
                            <Text size={16} weight={300} style={{flex: 1, textAlign: 'center'}}>{second.korean} {second.name}</Text>
                        </Row>
                        <HorizontalDivider/>
                    </Column>
                    <Column gap={12} $alignItems={'center'}>
                        {isValidDate && (
                            <>
                                <Text type={'p3'} color={colors.g600}>{format(date, 'yyyy년 M월 d일')}</Text>
                                <Text type={'p3'} color={colors.g600}>{format(date, 'EEEE a h시', {locale: ko})}</Text>
                            </>
                        )}
                    </Column>
                </Column>
                <Button text={'참석의사 보내기'} onClick={onClickCreateRsvp}/>
            </Column>
        </Column>
    );
}

export default RsvpTemplate;