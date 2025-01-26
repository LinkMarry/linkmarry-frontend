import React from 'react';
import {Column, Row} from "@designsystem/component/flexLayout";
import colors from "@designsystem/foundation/colors";
import Text from "@designsystem/component/text";
import {templateNameRecord, templateNames} from "@remote/value/Template";

function HomeSlide3() {
    return (
        <Column gap={52} $alignItems={'center'} padding={'140px 217px'} background={colors.p100}>
            <Column gap={20} $alignItems={'center'}>
                <Text type={'h2'}>다양한 템플릿</Text>
                <Text type={'h5'} color={colors.g500}>다양한 템플릿으로 특별한 청첩장을 손쉽게 완성할 수 있습니다.</Text>
            </Column>
            <Row style={{
                borderRadius: 6,
                boxShadow: '2px 0px 4px 0px rgba(0, 0, 0, 0.12)',
                overflow: 'hidden'
            }}>
                {templateNames.map(name => (
                    <img src={templateNameRecord[name].imgSrc} alt="" style={{
                        width: 194,
                        height: 285,
                        objectFit: 'cover',
                        objectPosition: 'top',
                        marginLeft: '-32px'
                    }}/>
                ))}
            </Row>
        </Column>
    );
}

const S = {}

export default HomeSlide3;