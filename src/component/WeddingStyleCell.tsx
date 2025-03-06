import React from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import Style from "@designsystem/core/Style";

function WeddingStyleCell() {
    return (
        <Column gap={8} $alignItems={'stretch'}>
            <Style css={css`
                aspect-ratio: 9 / 16;
                background: var(--g-100);
                border-radius: 8px;
            `}/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-900);
            `}>스타일 이름</Text>
        </Column>
    );
}

export default WeddingStyleCell;
