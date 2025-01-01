import React from 'react';
import styled from "styled-components";
import Text from "../../../../../designsystem/component/text";
import {TextType} from "../../../../../designsystem/foundation/text/textType";
import colors from "../../../../../designsystem/foundation/colors";

interface StatisticsValueCell {
    label: string;
    value: number;
    filtered: boolean;
}

function StatisticsValueCell(
    {
        label,
        value,
        filtered
    }: StatisticsValueCell
) {
    return (
        <S.container style={{background: filtered ? colors.g100 : colors.white}}>
            <Text text={label} type={TextType.p5}/>
            <Text text={`${value}`} type={TextType.h2}/>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 281px;
        flex-direction: column;
        padding: 24px 20px;
        gap: 8px;
        border: 1px solid ${colors.g200};
        border-radius: 12px;
    `
}

export default StatisticsValueCell;