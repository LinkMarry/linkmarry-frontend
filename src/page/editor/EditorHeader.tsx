import React from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Logo from "@src/component/Logo";
import {useNavigate} from "react-router-dom";
import Spacer from "@designsystem/component/Spacer";
import Button from "@designsystem/component/Button";
import useResponsive from "@hook/useResponsive";

// TODO: 에디터에서 나가시겠습니까?

const EditorHeader = () => {
    const {deviceSize} = useResponsive();
    if (deviceSize === 'mobile' || deviceSize === 'tablet') {
        return <SmallEditorHeader/>;
    }

    return <DesktopEditorHeader/>;
};

const SmallEditorHeader = () => {
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
            <Row $gap={8}>
                <Button text={'미리보기'} size={'small'} buttonType={'tonal'}/>
                <Button text={'저장하기'} size={'small'}/>
            </Row>
        </Row>
    )
}

const DesktopEditorHeader = () => {
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
            <Button text={'저장하기'} size={'medium'}/>
        </Row>
    )
}

export default EditorHeader;
