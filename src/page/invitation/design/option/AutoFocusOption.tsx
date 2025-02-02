import React from 'react';
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import {Row} from "@designsystem/component/flexLayout";

function AutoFocusOption() {
    return (
        <Row padding={'36px 0'} $justifyContent={'center'}>
            <Text type={'caption1'} color={colors.g500}>
                청첩장 수정 시, 변경된 화면으로 자동으로 포커스가 이동합니다.
            </Text>
        </Row>
    );
}

export default AutoFocusOption;