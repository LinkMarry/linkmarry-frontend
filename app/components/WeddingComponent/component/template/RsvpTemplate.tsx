import Text from "~/components/core/Text.tsx";
import {backgroundStyle, type WeddingDesignColor} from "~/api/value/WeddingDesign.ts";
import Button from "~/components/core/Button.tsx";
import Divider from "~/components/core/Divider.tsx";
import Icon from "~/components/core/icon";
import type BaseInfo from "~/api/value/BaseInfo.ts";
import {getBaseInfoByBrideMarkFirst} from "~/api/value/BaseInfo.ts";
import type WeddingSchedule from "~/api/value/WeddingSchedule.ts";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import {css} from "@linaria/core";
import FadeIn from "~/components/core/fadein/FadeIn.tsx";
import type Rsvp from "~/api/value/Rsvp.ts";
import View from "~/components/core/View.tsx";

interface RsvpTemplateProps {
    rsvp: Rsvp;
    weddingDesignColor: WeddingDesignColor;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    onClickCreateRsvp: () => void;
}

function RsvpTemplate(
    {
        rsvp,
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

    if (!rsvp.rsvpActivate) {
        return null;
    }

    return (
        <FadeIn>
            <View ui={css`
                gap: 40px;
                align-items: center;
                padding: 92px 60px;
            `} style={{
                background: backgroundStyle(weddingDesignColor)
            }}>
                <View ui={css`
                    align-items: center;
                `}>
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
                </View>
                <View ui={css`
                    gap: 62px;
                    padding: 32px 28px;
                    align-self: stretch;
                    background: white;
                    border-radius: 12px;
                `}>
                    <FadeIn>
                        <View ui={css`
                            gap: 40px;
                        `}>
                            <View ui={css`
                                gap: 20px;
                            `}>
                                <View ui={css`
                                    flex-direction: row !important;
                                    gap: 6px;
                                    align-items: center;
                                    padding: 5px 0;
                                `}>
                                    <Text
                                        size={16} weight={300}
                                        ui={css`
                                            flex: 1;
                                            text-align: center;
                                        `}
                                    >{first.korean} {first.name}</Text>
                                    <Icon iconType={'HeartFill'} size={16} ui={css`
                                        fill: var(--g-600);
                                    `}/>
                                    <Text size={16} weight={300} ui={css`
                                        flex: 1;
                                        text-align: center;
                                    `}>{second.korean} {second.name}</Text>
                                </View>
                                <Divider/>
                            </View>
                            {isValidDate && (
                                <Text type={'p3'} ui={css`
                                    color: var(--g-600);
                                `}>
                                    <View ui={css`
                                        gap: 12px;
                                        align-items: center;
                                    `}>
                                        <span>{format(date, 'yyyy년 M월 d일')}</span>
                                        <span>{format(date, 'EEEE a h시 m분', {locale: ko})}</span>
                                    </View>
                                </Text>
                            )}
                        </View>
                    </FadeIn>
                    <FadeIn ui={css`
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                    `}>
                        <Button text={'참석의사 보내기'} onClick={onClickCreateRsvp}/>
                    </FadeIn>
                </View>
            </View>
        </FadeIn>
    );
}

export default RsvpTemplate;
