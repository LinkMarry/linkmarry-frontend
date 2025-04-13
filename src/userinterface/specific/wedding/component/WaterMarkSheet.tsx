import React, {useState} from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import styled, {css} from "styled-components";
import fadeInAnimationStyle from "@src/userinterface/animation/fadeInAnimationStyle";
import Button from "@src/userinterface/component/Button";
import Text from "@src/userinterface/component/Text";
import RemoveWatermarkDialog from "@src/userinterface/specific/dialog/RemoveWatermarkDialog";

interface Props {
    url: string;
}

function WaterMarkSheet(
    {
        url,
    }: Props
) {
    const [showRemoveWatermarkDialog, setShowRemoveWatermarkDialog] = useState(false);

    return (
        <SheetStyle className={'override-font'}>
            {showRemoveWatermarkDialog && (
                <RemoveWatermarkDialog
                    url={url}
                    dismiss={() => setShowRemoveWatermarkDialog(false)}
                />
            )}
            <Column $gap={28} $alignItems={'stretch'} $ui={css`
                padding: 32px 24px;
                background: white;
                border-radius: 16px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
                max-width: 424px;
                width: 100vw;
                margin: 0 6px 20px 6px;
                position: absolute;
            `}>
                <Text type={'p3'}>
                    <Column $alignItems={'center'} $gap={4}>
                        <span>시안 확인용입니다.</span>
                        <span>구매 후 워터마크를 제거해 주세요.</span>
                    </Column>
                </Text>
                <Text type={'p3'} ui={css`
                    color: var(--g-600);
                    text-align: center;
                `}>결제 후 마이페이지 &gt; 에디터 &gt; 워터마크 제거,
                    또는 에디터 상단의 워터마크 제거
                    버튼을 통해 제거할 수 있습니다.</Text>
                <Button text={'워터마크 제거하기'} buttonType={'tonal'} onClick={() => {
                    setShowRemoveWatermarkDialog(true);
                }}/>
            </Column>
        </SheetStyle>
    );
}

const SheetStyle = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 50%;
    justify-content: center;
    align-items: flex-end;
    border: none;
    outline: none;
    background: none;
    z-index: 100;
    ${fadeInAnimationStyle};
`

export default WaterMarkSheet;
