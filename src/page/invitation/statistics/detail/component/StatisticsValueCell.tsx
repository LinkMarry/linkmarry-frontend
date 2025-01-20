import React, {HTMLAttributes} from 'react';
import styled from "styled-components";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";

interface StatisticsValueCellProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: number;
    filtered: boolean;
}

function StatisticsValueCell(
    {
        label,
        value,
        filtered,
        ...props
    }: StatisticsValueCellProps
) {
    return (
        <S.container filtered={filtered} {...props}>
            <Text type={'p5'}>{label}</Text>
            <Text type={'h2'}>{value}</Text>
        </S.container>
    );
}

const S = {
    container: styled.div<{ filtered: boolean; }>`
        background: ${({filtered}) => filtered ? colors.g100 : colors.white};
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