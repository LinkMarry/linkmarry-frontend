import {PreviewTemplate, View, Text, Spacer} from "~/components";
import {type ComponentProps} from "react";

import {css, cx} from "@linaria/core";
import {getDetails, getBaseInfoByBrideMarkFirst} from "~/domain";

import {format} from "date-fns";

import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

export const RomanticForestPreviewTemplate = ({
    weddingDesign,
    baseInfo,
    weddingSchedule,
}: ComponentProps<typeof PreviewTemplate>) => {
    const {isValidDate, date} = getDetails(weddingSchedule);
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    return (
        <View
            ui={cx(
                "override-font",
                fontFamilyStyle.GangwonEduAll,
                css`
                    position: relative;
                `,
            )}
        >
            <View
                as={"img"}
                src={weddingDesign.titleImgUrl}
                ui={css`
                    height: 100dvh;
                    max-height: 810px;
                    object-fit: cover;
                `}
            />
            <View
                ui={css`
                    background: linear-gradient(180deg, rgba(61, 61, 61, 0.8) 0%, rgba(61, 61, 61, 0) 100%);
                    height: 200px;
                    position: absolute;
                    top: 0;
                    width: 100%;
                `}
            />
            {isValidDate && (
                <Text
                    size={24}
                    weight={700}
                    ui={css`
                        position: absolute;
                        color: white;
                        top: 60px;
                        left: 50%;
                        white-space: nowrap;
                        transform: translateX(-50%);
                    `}
                >
                    {format(date, "yyyy. MM. dd E HH:mm")}
                </Text>
            )}
            <View
                ui={css`
                    background: linear-gradient(0, rgba(61, 61, 61, 0.8) 0%, rgba(61, 61, 61, 0) 100%);
                    height: 200px;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                `}
            />
            <Text
                size={24}
                weight={700}
                ui={css`
                    color: white;
                    bottom: 32px;
                    margin: 0 32px;
                    width: calc(100% - 32px * 2);
                    position: absolute;
                `}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: flex-start;
                    `}
                >
                    <span>
                        {first.korean} {first.name}
                    </span>
                    <Spacer />
                    <span>
                        {second.korean} {second.name}
                    </span>
                </View>
            </Text>
        </View>
    );
};
