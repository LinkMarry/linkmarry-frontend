import {PreviewTemplate, View, Text} from "~/components";
import {type ComponentProps} from "react";

import {css, cx} from "@linaria/core";

import {format} from "date-fns";
import {getDetails, getBaseInfoByBrideMarkFirst} from "~/domain";

import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

export const DreamWeddingPreviewTemplate = ({
    baseInfo,
    weddingDesign,
    weddingSchedule,
}: ComponentProps<typeof PreviewTemplate>) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <View
            ui={cx(
                "override-font",
                css`
                    padding: 78px 28px 72px 28px;
                    position: relative;
                    gap: 64px;
                `,
                fontFamilyStyle.GangwonEduAll,
            )}
        >
            <View
                as={"img"}
                src={weddingDesign.titleImgUrl}
                ui={css`
                    object-fit: cover;
                    min-height: 517px;

                    * {
                        color: #4a3f35;
                    }
                `}
            />
            <Text
                size={88}
                font={"iceJaram"}
                ui={cx(
                    "override-font",
                    css`
                        position: absolute;
                        top: 36px;
                        left: 28px;
                        color: #aaad99;
                    `,
                )}
            >
                love
            </Text>
            <View
                ui={css`
                    gap: 32px;
                    align-items: center;
                `}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        gap: 24px;
                        align-items: flex-end;
                    `}
                >
                    <Text size={28} weight={700}>
                        {first.name}
                    </Text>
                    <Text size={24} weight={700}>
                        그리고
                    </Text>
                    <Text size={28} weight={700}>
                        {second.name}
                    </Text>
                </View>
                {isValidDate && (
                    <Text size={20} weight={700}>
                        {format(date, "yyyy. MM. dd E HH:mm")}
                    </Text>
                )}
            </View>
        </View>
    );
};
