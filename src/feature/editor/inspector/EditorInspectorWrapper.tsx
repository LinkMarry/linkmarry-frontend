import React, {ComponentProps, ReactNode} from 'react';
import Text from "@src/userinterface/component/Text";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Spacer from "@src/userinterface/component/Spacer";
import Toggle from "@src/userinterface/component/Toggle";
import useResponsive from "@src/hook/useResponsive";
import {css} from "styled-components";
import EditorNavType, {editorNavTypeMap} from "@src/feature/editor/EditorNavType";
import Divider from "@src/userinterface/component/Divider";
import Icon from "@src/userinterface/foundation/Icon";
import {hideScrollBar} from "@src/shared/css.util";

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
        <Column $alignItems={'stretch'} $gap={deviceSize === 'desktop' ? 32 : 24} $ui={css`
            overflow-y: scroll;
            ${hideScrollBar};
            padding: 32px 24px 100px 24px;
            ${(deviceSize === 'mobile' || deviceSize === 'tablet') && css`
                padding: 24px 16px 40px 16px;
            `};
        `}>
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
        <Column $gap={12} $alignItems={'stretch'} $justifyContent={'center'} $ui={css`
            height: 436px;
        `}>
            <Icon iconType={icon} width={24} height={24} ui={css`
                fill: var(--g-400);
            `}/>
            <Text type={'p3'} bold={true} ui={css`
                text-align: center;
                color: var(--g-400);
            `}>토글을 활성화하여<br/>{inspectorText}을 설정할 수 있습니다.</Text>
        </Column>
    )
}

export default EditorInspectorWrapper;
