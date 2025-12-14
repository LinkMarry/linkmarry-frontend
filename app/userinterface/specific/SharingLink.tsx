import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Button from "~/userinterface/component/Button";
import {type KakaoButton} from "~/infrastructure/network/enumeration/KakaoButton";
import View from "~/userinterface/core/View.tsx";

interface Props {
    title: string;
    button?: KakaoButton;
    background?: string;
    Style: boolean;
}

const SharingLink = ({title, button, background, Style}: Props) => {
    return (
        <View ui={cx(
            css`
                justify-content: flex-end;
                border-radius: 8px;
                overflow: hidden;
                width: 300px;
                background: var(--g-100);
            `,
            Style ? css`
                min-height: 297px;
            ` : css`
                min-height: 363px;
            `
        )}>
            <img src={background} alt={''} style={{flex: 1, objectFit: 'cover'}}/>
            <View ui={css`
                gap: 12px;
                padding: 12px 12px 16px 12px;
                background: var(--g-50);
                background-size: cover;
                background-repeat: no-repeat;
            `}>
                <Text type={'p3'} bold={true}>{title}</Text>
                {button && (
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 8px;
                    `}>
                        <Button text={'모바일 청첩장'} buttonType={'tonal'} ui={css`
                            flex: 1;
                        `}/>
                        {button === 'ATTEND' && (
                            <Button text={'참석의사 전달'} buttonType={'tonal'} ui={css`
                                flex: 1;
                            `}/>
                        )}
                        {button === 'PLACE' && (
                            <Button text={'위치 보기'} buttonType={'tonal'} ui={css`
                                flex: 1;
                            `}/>
                        )}
                    </View>
                )}
                <View ui={css`
                    flex-direction: row !important;
                    align-items: center;
                    gap: 4px;
                `}>
                    {button && (
                        <img width={12} src={'/logo192.png'} alt={'로고'}/>
                    )}
                    <Text type={'caption2'} ui={css`
                        color: var(--g-400);
                    `}>linkmarry.com</Text>
                </View>
            </View>
        </View>
    );
};

export default SharingLink;
