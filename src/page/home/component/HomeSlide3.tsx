import React from 'react';
import {Column} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";

function HomeSlide3() {
    return (
        <Column gap={52} $alignItems={'center'} padding={'140px 217px'} background={colors.p100}>
            <Column gap={20} $alignItems={'center'}>
                <Text type={'h2'}>다양한 템플릿</Text>
                <Text type={'h5'} color={colors.g500}>다양한 템플릿으로 특별한 청첩장을 손쉽게 완성할 수 있습니다.</Text>
            </Column>
            <div style={{height: 285, background: colors.g200, alignSelf: 'stretch'}}></div>
        </Column>
    );
}

const S = {}

export default HomeSlide3;