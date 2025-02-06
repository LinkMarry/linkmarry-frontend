import React, {HTMLAttributes} from 'react';
import styled, {css} from "styled-components";
import Text from "@designsystem/component/Text";

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
        ${({filtered}) => filtered ? css`
            background: var(--g-100);
        ` : css`
            background: white;
        `};
        display: flex;
        width: 281px;
        flex-direction: column;
        padding: 24px 20px;
        gap: 8px;
        border: 1px solid var(--g-200);
        border-radius: 12px;
    `
}

export default StatisticsValueCell;