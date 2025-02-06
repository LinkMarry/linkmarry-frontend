import React from 'react';
import styled, {css} from "styled-components";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/component/CustomStyle";

function HomeSlide5() {
    return (
        <Column gap={52} $alignItems={'center'} $customStyle={css`
            padding: 124px 200px;
        `}>
            <Column gap={20} $alignItems={'center'}>
                <Text type={'h2'}>다양한 기능 지원</Text>
                <Text type={'h5'} customStyle={css`
                    color: var(--g-500);
                `}>다양한 기능을 통해 특별한 청첩장을 손쉽게 완성할 수 있습니다.</Text>
            </Column>
            <CustomStyle $customStyle={css`
                display: grid;
                gap: 12px;
                grid-template-columns: repeat(5, 1fr); /* 3열 구성 */
                align-self: stretch;
            `}>
                {[
                    '예식 일시', '예식 장소', '인사말', '배경음악', '링크 공유',
                    '동영상', '연락처', '참석 의사', '방명록', '갤러리'
                ].map((title, index) => (
                    <Cell key={index} title={title}/>
                ))}
            </CustomStyle>
        </Column>
    );
}

function Cell(props: {
    title: string;
}) {
    return (
        <Text type={'h5'} customStyle={css`
            display: flex;
            padding: 32px 0;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--g-100);
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
            border-radius: 8px;
            color: var(--g-500);
        `}>{props.title}</Text>
    );
}

export default HomeSlide5;