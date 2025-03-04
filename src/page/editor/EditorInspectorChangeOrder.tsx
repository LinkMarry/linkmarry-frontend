import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import EditorInspectorWrapper from "@page/editor/EditorInspectorWrapper";

const EditorInspectorChangeOrder = () => {
    return (
        <EditorInspectorWrapper title={'순서변경'}>
            <Divider/>
            <Column $alignItems={'stretch'} gap={12}>
                <Item text={'123'}/>
                <Item text={'123'}/>
                <Item text={'123'}/>
                <Item text={'123'}/>
            </Column>
        </EditorInspectorWrapper>
    );
};

interface Props {
    text: string;
}

const Item = ({text}: Props) => {
    return (
        <Row $alignItems={'center'} $customStyle={css`
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
        `}>
            <Text type={'p2'} customStyle={css`
                flex: 1;
            `}>{text}</Text>
            <Icon iconType={IconType.Hamburger} width={24} height={24} customStyle={css`
                fill: var(--g-600);
            `}/>
        </Row>
    )
}

export default EditorInspectorChangeOrder;
