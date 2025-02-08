import React, {ComponentProps} from 'react';
import PreviewTemplate from "@src/component/template/component/preview/PreviewTemplate";
import {Column} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import {format} from "date-fns";
import {getDetails} from "@remote/value/WeddingSchedule";
import CustomStyle from "@designsystem/component/CustomStyle";
import {getBaseInfoByBrideMarkFirst} from "@remote/value/BaseInfo";

function ClassicElegancePreviewTemplate(
    {
        baseInfo,
        weddingSchedule,
        weddingPlace,
    }: ComponentProps<typeof PreviewTemplate>
) {
    const {first, second} = getBaseInfoByBrideMarkFirst(baseInfo);
    const {date, isValidDate} = getDetails(weddingSchedule);

    return (
        <Column $alignItems={'stretch'}>
            <CustomStyle as={'img'} $customStyle={css`
                
            `}/>
            <Column gap={8} $customStyle={css`
                padding: 32px 8px;
            `}>
                {isValidDate && (
                    <Text>{format(date, 'yyyy. MM. dd E HH:mm')}</Text>
                )}
            </Column>
        </Column>
    );
}

export default ClassicElegancePreviewTemplate;