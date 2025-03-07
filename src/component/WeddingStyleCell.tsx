import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import View from "@designsystem/core/View";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";

interface Props {
    weddingDesign: WeddingDesignPreset;
}

function WeddingStyleCell({weddingDesign}: Props) {
    return (
        <Column $gap={8} $alignItems={'stretch'}>
            <View $ui={css`
                aspect-ratio: 9 / 16;
                background: url("${weddingDesign.img}");
                background-size: cover;
                border-radius: 8px;
            `}/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-900);
            `}>{weddingDesign.name}</Text>
        </Column>
    );
}

export default WeddingStyleCell;
