import React from 'react';
import styled from "styled-components";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";

function HomeSlide5() {
    return (
        <Column gap={52} $alignItems={'center'} padding={'124px 200px'}>
            <Column gap={20} $alignItems={'center'}>
                <Text type={'h2'}>다양한 기능 지원</Text>
                <Text type={'h5'} color={colors.g500}>다양한 기능을 통해 특별한 청첩장을 손쉽게 완성할 수 있습니다.</Text>
            </Column>
            <S.cells>
                {[
                    '예식 일시', '예식 장소', '인사말', '배경음악', '링크 공유',
                    '동영상', '연락처', '참석 의사', '방명록', '갤러리'
                ].map((title, index) => (
                    <Cell key={index} title={title}/>
                ))}
            </S.cells>
        </Column>
    );
}

function Cell(props: {
    title: string;
}) {
    return (
        <Text type={'h5'} color={colors.g500} style={{
            padding: '32px 0',
            border: `1px solid ${colors.g100}`,
            boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.03)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{props.title}</Text>
    );
}

const S = {
    cells: styled.div`
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(5, 1fr); /* 3열 구성 */
        align-self: stretch;
    `
}

export default HomeSlide5;