import React, {useEffect, useRef} from 'react';
import {Column, Row} from "@designsystem/component/FlexLayout";
import styled, {css} from "styled-components";
import Text from "@designsystem/component/Text";
import {fadeInAnimationStyle} from "@designsystem/animation/fade.animation";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";
import FadeIn from "@designsystem/component/fadein/FadeIn";

interface Props {
    url: string;
}

function WaterMarkSheet(
    {
        url,
    }: Props
) {
    const navigate = useNavigate();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    return (
        // <SheetStyle ref={dialogRef}>
        <SheetStyle>
            <Column gap={28} $alignItems={'center'} $customStyle={css`
                padding: 32px 24px;
                background: var(--p-100);
                border-radius: 16px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
                max-width: 424px;
                width: 100vw;
                margin: 0 6px 20px 6px;
                position: absolute;
            `}>
                {/*todo*/}
                {/*<Text type={'p4'}>*/}
                {/*    <Column $alignItems={'center'} gap={4}>*/}
                {/*        <span>시안 확인용입니다.</span>*/}
                {/*        <span>구매 후 워터마크를 제거해 주세요.</span>*/}
                {/*    </Column>*/}
                {/*</Text>*/}
                {/*todo*/}
                {/*<Text type={'btn1'} customStyle={css`*/}
                {/*    color: var(--g-600);*/}
                {/*    text-align: center;*/}
                {/*`}>결제 후 대시보드 &gt; 워터마크 제거*/}
                {/*    <br/>*/}
                {/*    버튼을 통해 제거할 수 있습니다.</Text>*/}
                <Row gap={12} $alignSelf={'stretch'}>
                    <Button text={'구매하기'} customStyle={css`
                        flex: 1;
                        background: var(--p-100);
                        color: var(--p-800);
                        border: 1px solid var(--p-700);
                    `} onClick={() => {
                        window.open('https://smartstore.naver.com/linkmarry');
                    }}/>
                    <Button text={'워터마크 제거하기'} style={{
                        flex: 1
                    }} onClick={() => {
                        navigate(`/dashboard/design/${url}`);
                    }}/>
                </Row>
            </Column>
        </SheetStyle>
    );
}

const SheetStyle = styled.div`
    display: flex;
    position: fixed;
    //width: 100vw;
    //min-width: 100vw;
    //height: 100vh;
    //min-height: 100vh;
    bottom: 0;
    left: 50%;
    justify-content: center;
    align-items: flex-end;
    border: none;
    outline: none;
    background: none;
    ${fadeInAnimationStyle};
`

export default WaterMarkSheet;