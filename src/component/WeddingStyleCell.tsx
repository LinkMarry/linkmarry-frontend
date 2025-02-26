import React from 'react';
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import CustomStyle from "@designsystem/component/CustomStyle";

function WeddingStyleCell() {
    return (
        <Column gap={8} $alignItems={'stretch'}>
            <CustomStyle $customStyle={css`
                aspect-ratio: 9 / 16;
                background: var(--g-100);
                border-radius: 8px;
            `}/>
            <Text type={'p3'} bold={true} customStyle={css`
                color: var(--g-900);
            `}>스타일 이름</Text>
        </Column>
    );
}

export default WeddingStyleCell;