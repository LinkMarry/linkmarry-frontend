import React from 'react';
import {Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Logo from "@src/userinterface/specific/Logo";
import {useNavigate} from "react-router-dom";
import Spacer from "@src/userinterface/component/Spacer";
import Button from "@src/userinterface/component/Button";
import useResponsive from "@src/hook/useResponsive";
import Text from "@src/userinterface/component/Text";

interface Props {
    onShowPreview: () => void;
    onRemoveWatermark: () => void;
    isSaving: boolean;
}

const EditorHeader = (props: Props) => {
    const {deviceSize} = useResponsive();
    if (deviceSize === 'mobile' || deviceSize === 'tablet') {
        return <SmallEditorHeader {...props}/>;
    }

    return <DesktopEditorHeader {...props}/>;
};

const SmallEditorHeader = ({onShowPreview, onRemoveWatermark, isSaving}: Props) => {
    const navigate = useNavigate();

    return (
        <Row as={'header'} $alignItems={'center'} $ui={css`
            min-height: 60px;
            padding: 12px 16px;
            border-bottom: 1px solid var(--g-100);
        `}>
            <Logo ui={css`
                cursor: pointer;
            `} onClick={() => {
                navigate('/');
            }}/>
            <Spacer/>
            <Row $gap={20} $alignItems={'center'}>
                {isSaving && (
                    <Text type={'p3'} bold={true} ui={css`
                        color: var(--g-700);
                    `}>저장 중...</Text>
                )}
                <Row $gap={8}>
                    <Button text={'미리보기'} size={'small'} buttonType={'tonal'} onClick={onShowPreview}/>
                    <Button text={'워터마크 제거'} size={'small'} onClick={onRemoveWatermark}/>
                </Row>
            </Row>
        </Row>
    )
}

const DesktopEditorHeader = ({onRemoveWatermark, isSaving}: Props) => {
    const navigate = useNavigate();

    return (
        <Row as={'header'} $alignItems={'center'} $ui={css`
            min-height: 72px;
            padding: 0 24px;
            border-bottom: 1px solid var(--g-100);
        `}>
            <Logo ui={css`
                cursor: pointer;
            `} onClick={() => {
                navigate('/');
            }}/>
            <Spacer/>
            <Row $gap={20} $alignItems={'center'}>
                {isSaving && (
                    <Text type={'p3'} bold={true} ui={css`
                        color: var(--g-700);
                    `}>저장 중...</Text>
                )}
                <Button text={'워터마크 제거'} size={'medium'} onClick={onRemoveWatermark}/>
            </Row>
        </Row>
    )
}

export default EditorHeader;
