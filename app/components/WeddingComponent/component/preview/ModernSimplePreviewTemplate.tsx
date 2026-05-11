import {PreviewTemplate, Text, View} from "~/components";
import {type ComponentProps} from "react";

import {css, cx} from "@linaria/core";

import {getBaseInfoByBrideMarkFirst, getDetails} from "~/domain";
import {format} from "date-fns";
import {fontFamilyStyle} from "~/components/core/text/TextType.ts";

export const ModernSimplePreviewTemplate = ({
    weddingDesign,
    baseInfo,
    weddingSchedule,
}: ComponentProps<typeof PreviewTemplate>) => {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {isValidDate, date} = getDetails(weddingSchedule);
    return (
        <View
            ui={cx(
                fontFamilyStyle.TheFaceShopInklipquid,
                "override-font",
                css`
                    gap: 60px;
                    align-items: center;
                    padding: 92px 0;

                    * {
                        color: #333333;
                    }
                `,
            )}
        >
            <Text size={44} weight={400}>
                Our Wedding Day
            </Text>
            <View
                as={"img"}
                src={weddingDesign.titleImgUrl}
                ui={css`
                    align-self: stretch;
                    max-height: 312px;
                    object-fit: cover;
                `}
            />
            <View
                ui={css`
                    align-items: center;
                    gap: 24px;
                `}
            >
                <Text size={40} weight={400}>
                    <View
                        ui={css`
                            align-items: center;
                            gap: 16px;
                        `}
                    >
                        <span>{first.name}</span>
                        <span>{second.name}</span>
                    </View>
                </Text>
                {isValidDate && (
                    <Text size={24} weight={400}>
                        {format(date, "yyyy. MM. dd E HH:mm")}
                    </Text>
                )}
            </View>
        </View>
    );
};
