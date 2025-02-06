import React from 'react';
import Text from "@designsystem/component/Text";
import {Row} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";

function AutoFocusOption() {
    return (
        <Row $justifyContent={'center'} $customStyle={css`
            padding: 36px 0;
        `}>
            <Text type={'caption1'} customStyle={css`
                color: var(--g-500);
            `}>
                청첩장 수정 시, 변경된 화면으로 자동으로 포커스가 이동합니다.
            </Text>
        </Row>
    );
}

export default AutoFocusOption;