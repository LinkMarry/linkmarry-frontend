import React from 'react';
import styled, {css, CSSProperties} from "styled-components";
import {Column, Row} from "@designsystem/component/flexLayout";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import OptionLabel from "@page/invitation/design/component/OptionLabel";
import colors from "@designsystem/foundation/colors";
import OptionSelect from "@page/invitation/design/component/OptionSelect";

// interface TemplateOptionProps {
//     refs: {
//        
//     }
// }

function TemplateOption() {
    return (
        <S.container>
            <Column gap={32} flex={1}>
                <Row gap={12}>
                    <OptionLabel label={'디자인'}/>
                </Row>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'배경색상'} style={{alignSelf: 'flex-start'}}/>
                    <S.backgroundColor.container>
                        {['#F7F7F2', '#FBF2F2', '#ECECEC', '#F6F2F2', '#F7F4FE', '#FFFEF5', '#EDF8F8', '#FFF4EB'].map((color, index) => (
                            <S.backgroundColor.cell key={index} color={color}/>
                        ))}
                    </S.backgroundColor.container>
                </Row>
                <HorizontalDivider/>
                <Row gap={12}>
                    <OptionLabel label={'폰트'} style={{alignSelf: 'flex-start'}}/>
                    <Row gap={12}>
                        <OptionSelect items={['돋움', '바탕체', '체체']} width={154}/>
                        <OptionSelect items={['보통']}/>
                    </Row>
                </Row>
            </Column>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        padding: 36px;
    `,
    backgroundColor: {
        container: styled.div`
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* 가로로 4개의 열 */
            grid-template-rows: repeat(2, 1fr); /* 세로로 2개의 행 */
            grid-gap: 12px;
        `,
        cell: styled.span<{ color: CSSProperties['color'] }>`
            ${({color}) => css`
                width: 44px;
                height: 44px;
                background: ${color};
            `};
            border: 1px solid ${colors.g200};
            border-radius: 8px;
            cursor: pointer;
        `
    },
}

export default TemplateOption;