import React, {ComponentProps, ReactNode} from 'react';
import Text from "@designsystem/component/Text";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import useResponsive from "@hook/useResponsive";
import {css} from "styled-components";
import EditorNavType, {editorNavTypeMap} from "@page/editor/EditorNavType";
import Divider from "@designsystem/component/Divider";
import Icon from "@designsystem/foundation/Icon";

interface Props {
    type: EditorNavType;
    toggle?: ComponentProps<typeof Toggle>;
    hasDivider?: boolean;
    children?: ReactNode;
}

const EditorInspectorWrapper = ({type, toggle, hasDivider = true, children}: Props) => {
    const {deviceSize} = useResponsive();

    const content = (() => {
        if (!toggle || toggle.checked) {
            return children;
        } else {
            return <Empty type={type}/>;
        }
    });

    return (
        <Column $alignItems={'stretch'} gap={deviceSize === 'desktop' ? 32 : 24}>
            <Row $alignItems={'center'}>
                <Text type={'p1'} bold={true}>{editorNavTypeMap[type].inspectorText}</Text>
                <Spacer/>
                {toggle && (
                    <Toggle {...toggle}/>
                )}
            </Row>
            {hasDivider && (
                <Divider/>
            )}
            {content()}
        </Column>
    );
};

interface EmptyProps {
    type: EditorNavType;
}

const Empty = ({type}: EmptyProps) => {
    const {icon, inspectorText} = editorNavTypeMap[type];
    return (
        <Column gap={12} $alignItems={'stretch'} $justifyContent={'center'} $customStyle={css`
            height: 436px;
        `}>
            <Icon iconType={icon} width={24} height={24} customStyle={css`
                fill: var(--g-400);
            `}/>
            <Text type={'p3'} bold={true} customStyle={css`
                text-align: center;
                color: var(--g-400);
            `}>토글을 활성화하여<br/>{inspectorText}을 설정할 수 있습니다.</Text>
        </Column>
    )
}

export default EditorInspectorWrapper;
