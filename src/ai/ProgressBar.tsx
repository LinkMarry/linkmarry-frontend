import React from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import {css, RuleSet} from "styled-components";
import View from "@designsystem/core/View";
import Text from "@designsystem/component/Text";

interface Props {
    progress: number;
    text: string;
    ui?: RuleSet;
}

const ProgressBar = ({progress, text, ui}: Props) => {
    return (
        <Row $gap={8} $alignItems={'center'} $ui={css`
            height: 24px;
            ${ui};
        `}>
            <Row $alignItems={'stretch'} $flex={1} $ui={css`
                background: var(--g-100);
                border-radius: 3px;
                height: 6px;
            `}>
                <View $ui={css`
                    width: ${progress}%;
                    border-radius: 3px;
                    background: var(--g-700);
                `}/>
            </Row>
            <Text type={'caption2'} bold={true}>{text}</Text>
        </Row>
    );
};

export default ProgressBar;
