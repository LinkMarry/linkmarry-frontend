import React, {ComponentProps, ReactNode} from 'react';
import Text from "@designsystem/component/Text";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Toggle from "@designsystem/component/Toggle";
import useResponsive from "@hook/useResponsive";

interface Props {
    title: string;
    toggle?: ComponentProps<typeof Toggle>;
    children?: ReactNode;
}

const EditorInspectorWrapper = ({title, toggle, children}: Props) => {
    const {deviceSize} = useResponsive();
    return (
        <Column $alignItems={'stretch'} gap={deviceSize === 'desktop' ? 32 : 24}>
            <Row $alignItems={'center'}>
                <Text type={'p1'} bold={true}>{title}</Text>
                <Spacer/>
                {toggle && (
                    <Toggle {...toggle}/>
                )}
            </Row>
            {children}
        </Column>
    );
};

export default EditorInspectorWrapper;
