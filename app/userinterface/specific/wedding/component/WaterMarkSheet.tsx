import {useState} from 'react';
import fadeInAnimationStyle from "~/userinterface/animation/fadeInAnimationStyle";
import Button from "~/userinterface/component/Button";
import Text from "~/userinterface/component/Text";
import RemoveWatermarkDialog from "~/userinterface/specific/dialog/RemoveWatermarkDialog";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";


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
        <View ui={cx(
            css`
                flex-direction: row !important;
                position: fixed;
                bottom: 0;
                left: 50%;
                justify-content: center;
                align-items: flex-end;
                border: none;
                outline: none;
                background: none;
                z-index: 100;
            `,
            fadeInAnimationStyle,
            'override-font'
        )}>
            {showRemoveWatermarkDialog && (
                <RemoveWatermarkDialog
                    url={url}
                    dismiss={() => setShowRemoveWatermarkDialog(false)}
                />
            )}
            <View ui={css`
                gap: 28px;
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
                    <View ui={css`
                        align-items: center;
                        gap: 4px;
                    `}>
                        <span>시안 확인용입니다.</span>
                        <span>구매 후 워터마크를 제거해 주세요.</span>
                    </View>
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
            </View>
        </View>
    );
}

export default WaterMarkSheet;
