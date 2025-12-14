import {useState} from 'react';
import Spacer from "~/userinterface/component/Spacer.tsx";
import Text from "~/userinterface/component/Text.tsx";
import Icon from "~/userinterface/foundation/Icon.tsx";
import {hideScrollBarStyle, interactionEffectStyles} from "~/userinterface/css.util.ts";
import WeddingComponent from "~/userinterface/specific/wedding/WeddingComponent.tsx";
import type Wedding from "~/infrastructure/network/value/Wedding.ts";
import {useAutoFocus} from "~/hook/useAutoFocus.ts";
import Toggle from "~/userinterface/component/Toggle.tsx";
import {css, cx, type LinariaClassName} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";

interface Props {
    wedding: Wedding;
    ui?: LinariaClassName;
}

const EditorPreview = ({wedding, ui}: Props) => {
    return (
        <View ui={cx(
            css`
                align-items: center;
                justify-content: center;
                background: var(--g-100);
                position: relative;
                flex: 1;
            `,
            ui
        )}>
            <View ui={cx(
                css`
                    max-height: 733px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    width: 380px;
                    border-radius: 36px;
                    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.04);
                `,
                hideScrollBarStyle
            )}>
                <WeddingComponent wedding={wedding} mode={'preview'}/>
            </View>
            <PreviewSetting/>
        </View>
    );
};

const PreviewSetting = () => {
    const [openSetting, setOpenSetting] = useState(false);
    const {autoFocus, setAutoFocus} = useAutoFocus();

    return (
        <View ui={cx(previewSettingStyle, openSetting ? previewSettingOpenStyle : previewSettingClosedStyle)}>
            <View ui={cx(
                css`
                    flex-direction: row;
                    align-items: center;
                    padding: 6px;
                    border-radius: 6px;
                `,
                interactionEffectStyles.strong
            )} onClick={() => {
                setOpenSetting(i => !i);
            }}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-800);
                `}>미리보기 설정</Text>
                <Spacer/>
                <Icon iconType={'ExpandArrow'} width={18} height={18}
                      ui={cx(iconBaseStyle, openSetting ? iconOpenStyle : iconClosedStyle)}/>
            </View>
            <View ui={css`
                flex-direction: row;
                align-items: center;
                padding: 6px;
            `}>
                <Text type={'p3'} ui={css`
                    color: var(--g-600);
                `}>자동포커스</Text>
                <Spacer/>
                <Toggle checked={autoFocus} OnChange={checked => setAutoFocus(checked)}/>
            </View>
        </View>
    );
};

export default EditorPreview;

const previewSettingStyle = css`
    gap: 4px;
    width: 220px;
    padding: 10px;
    background: white;
    border-radius: 12px;
    position: absolute;
    left: 24px;
    bottom: 24px;
    transition: 0.2s max-height ease-out;
    overflow: hidden;
`;

const previewSettingOpenStyle = css`
    max-height: 104px; // hard code
`;

const previewSettingClosedStyle = css`
    max-height: 56px;
`;

const iconBaseStyle = css`
    fill: var(--g-400);
    transition: 0.2s rotate ease-out;
`;

const iconOpenStyle = css`
    rotate: 90deg;
`;

const iconClosedStyle = css`
    rotate: -90deg;
`;
