import {css, cx} from "@linaria/core";
import Logo from "~/userinterface/specific/Logo.tsx";
import {useNavigate} from "react-router";
import Spacer from "~/userinterface/component/Spacer.tsx";
import Button from "~/userinterface/component/Button.tsx";
import {desktopStyle, notDesktopStyle, responsive} from "~/hook/ResponsiveSwitch.tsx";
import Text from "~/userinterface/component/Text.tsx";
import View from "~/userinterface/core/View.tsx";


interface Props {
    onShowPreview: () => void;
    onRemoveWatermark: () => void;
    isSaving: boolean;
}

const EditorHeader = (
    {
        onShowPreview,
        onRemoveWatermark,
        isSaving
    }: Props
) => {
    const navigate = useNavigate();

    return (
        <View as={'header'} ui={css`
            align-items: center;
            flex-direction: row !important;
            min-height: 72px;
            padding: 0 24px;
            border-bottom: 1px solid var(--g-100);

            ${responsive.notDesktop} {
                min-height: 60px;
                padding: 12px 16px;
            }
        `}>
            <Logo ui={css`
                cursor: pointer;
            `} onClick={() => {
                navigate('/');
            }}/>
            <Spacer/>
            <View ui={css`
                flex-direction: row !important;
                gap: 20px;
                align-items: center;
            `}>
                {isSaving && (
                    <Text type={'p3'} bold={true} ui={css`
                        color: var(--g-700);
                    `}>저장 중...</Text>
                )}
                <View ui={cx(
                    css`
                        flex-direction: row !important;
                        align-items: flex-start;
                        gap: 8px;
                    `,
                    notDesktopStyle
                )}>
                    <Button text={'미리보기'} size={'small'} buttonType={'tonal'} onClick={onShowPreview}/>
                    <Button text={'워터마크 제거'} size={'small'} onClick={onRemoveWatermark}/>
                </View>
                <Button text={'워터마크 제거'} size={'medium'} onClick={onRemoveWatermark} ui={desktopStyle}/>
            </View>
        </View>
    )
}

export default EditorHeader;
