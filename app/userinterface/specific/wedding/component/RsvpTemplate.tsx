import Text from "~/userinterface/component/Text";
import {backgroundStyle, type WeddingDesignColor} from "~/infrastructure/network/value/WeddingDesign";
import Button from "~/userinterface/component/Button";
import Divider from "~/userinterface/component/Divider";
import Icon from "~/userinterface/foundation/Icon";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import type WeddingSchedule from "~/infrastructure/network/value/WeddingSchedule";
import {format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import {css} from "@linaria/core";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import type Rsvp from "~/infrastructure/network/value/Rsvp";
import View from "~/userinterface/core/View.tsx";

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
                                    flex-direction: row;
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
