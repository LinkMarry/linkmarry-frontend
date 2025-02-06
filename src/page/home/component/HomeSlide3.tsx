import React from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import {templateNameRecord, templateNames} from "@remote/value/Template";
import {css} from "styled-components";

function HomeSlide3() {
    return (
        <Column gap={52} $alignItems={'center'} $customStyle={css`
            padding: 140px 217px;
            background: var(--p-100);
        `}>
            <Column gap={20} $alignItems={'center'}>
                <Text type={'h2'}>다양한 템플릿</Text>
                <Text type={'h5'} customStyle={css`
                    color: var(--g-500);
                `}>다양한 템플릿으로 특별한 청첩장을 손쉽게 완성할 수 있습니다.</Text>
            </Column>
            <Row $customStyle={css`
                border-radius: 6px;
                box-shadow: 2px 0 4px 0 rgba(0, 0, 0, 0.12);
                overflow: hidden;
            `}>
                {templateNames.map((name, index) => (
                    <img key={index} src={templateNameRecord[name].imgSrc} alt="" style={{
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

export default HomeSlide3;