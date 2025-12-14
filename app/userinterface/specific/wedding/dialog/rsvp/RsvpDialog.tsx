import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {css, cx} from "@linaria/core";
import Divider from "~/userinterface/component/Divider";
import Text from "~/userinterface/component/Text";
import type BaseInfo from "~/infrastructure/network/value/BaseInfo";
import {getBaseInfoByBrideMarkFirst} from "~/infrastructure/network/value/BaseInfo";
import type WeddingSchedule from "~/infrastructure/network/value/WeddingSchedule";
import type WeddingPlace from "~/infrastructure/network/value/WeddingPlace";
import {addDays, format, parse} from "date-fns";
import {ko} from "date-fns/locale";
import Button from "~/userinterface/component/Button";
import type Rsvp from "~/infrastructure/network/value/Rsvp";
import {useCookies} from "react-cookie";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";

interface RsvpDialogProps {
    url: string;
    baseInfo: BaseInfo;
    weddingSchedule: WeddingSchedule;
    weddingPlace: WeddingPlace;
    rsvp: Rsvp;
    onConfirm: () => void;
    dismiss: () => void;
}

function RsvpDialog(
    {
        url,
        baseInfo,
        weddingSchedule,
        weddingPlace,
        rsvp,
        onConfirm,
        dismiss
    }: RsvpDialogProps
) {
    const cookieKey = `hide_RsvpDialog_${url}`;
    const [, setCookie] = useCookies([cookieKey]);
    const dateString = `${weddingSchedule.weddingDate} ${weddingSchedule.weddingTime}`;
    const date = parse(dateString, 'yyyy-MM-dd HH:mm', new Date());
    const isValidDate = !isNaN(date.getTime());
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    gap: 48px;
                    max-width: 436px;
                    width: 90vw;
                    border-radius: 12px;
                    background: white;
                    padding: 44px 24px;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    gap: 24px;
                `}>
                    <View ui={css`
                        gap: 4px;
                        align-items: center;
                    `}>
                        <Text type={'p1'} bold={true} ui={css`
                            word-break: break-all;
                            text-align: center;
                        `}>{rsvp.rsvpTitle}</Text>
                        <Text type={'caption1'} ui={css`
                            word-break: break-all;
                            text-align: center;
                            color: var(--g-400);
                        `}>{rsvp.rsvpContent}</Text>
                    </View>
                    <Divider/>
                    <Text type={'caption1'}>
                        <View ui={css`
                            align-items: center;
                        `}>
                            <span>{first.korean} {first.name} & {second.korean} {second.name}</span>
                            {isValidDate && (
                                <span>{format(date, 'yyyy년 M월 d일 EEEE a h시 m분', {locale: ko})}</span>
                            )}
                            <span>{weddingPlace.placeName} ({weddingPlace.floorHall})</span>
                        </View>
                    </Text>
                </View>
                <View ui={css`
                    gap: 12px;
                    align-items: center;
                    align-self: stretch;
                `}>
                    <Button text={'참석의사 전달하기'} onClick={onConfirm} ui={css`
                        align-self: stretch;
                    `}/>
                    <Text
                        type={'caption1'}
                        ui={css`
                            color: var(--g-400);
                            cursor: pointer;
                        `}
                        onClick={() => {
                            // Tomorrow
                            const date = addDays(new Date(), 1);

                            setCookie(cookieKey, 'true', {
                                expires: date
                            });
                            dismiss();
                        }}
                    >오늘 하루 보지 않기</Text>
                </View>
            </View>
        </BaseDialog>
    );
}

export default RsvpDialog;
