import React from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Logo from "@src/component/Logo";
import {useNavigate} from "react-router-dom";
import Spacer from "@designsystem/component/Spacer";
import Button from "@designsystem/component/Button";

// TODO: 에디터에서 나가시겠습니까?

const EditorHeader = () => {
    const navigate = useNavigate();
    return (
        <Row as={'header'} $alignItems={'center'} $customStyle={css`
            min-height: 72px;
            padding: 0 24px;
            border-bottom: 1px solid var(--g-100);
        `}>
            <Logo customStyle={css`
                cursor: pointer;
            `} onClick={() => {
                navigate('/');
            }}/>
            <Spacer/>
            <Row gap={8}>
                <Button text={'미리보기'} size={'medium'} buttonType={'tonal'}/>
                <Button text={'저장하기'} size={'medium'}/>
            </Row>
        </Row>
    );
};

export default EditorHeader;
