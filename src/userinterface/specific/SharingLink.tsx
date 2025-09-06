import React from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Text from "@src/userinterface/component/Text";
import Button from "@src/userinterface/component/Button";
import KakaoButton from "@src/infrastructure/network/enumeration/KakaoButton";

interface Props {
    title: string;
    button?: KakaoButton;
    background?: string;
    Style: boolean;
}

const SharingLink = ({title, button, background, Style}: Props) => {
    return (
        <Column $alignItems={'stretch'} $justifyContent={'flex-end'} $ui={css`
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            overflow: hidden;
            width: 300px;
            background: var(--g-100);

            ${Style ? css`
                min-height: 297px;
            ` : css`
                min-height: 363px;
            `};
        `}>
            <img src={background} alt={''} style={{flex: 1, objectFit: 'cover'}}/>
            <Column $gap={12} $alignItems={'stretch'} $ui={css`
                padding: 12px 12px 16px 12px;
                background: var(--g-50);
                background-size: cover;
                background-repeat: no-repeat;
            `}>
                <Text type={'p3'} bold={true}>{title}</Text>
                {button && (
                    <Row $gap={8}>
                        <Button text={'모바일 청첩장'} buttonType={'tonal'} ui={css`
                            flex: 1;
                        `}/>
                        {button === KakaoButton.ATTEND && (
                            <Button text={'참석의사 전달'} buttonType={'tonal'} ui={css`
                                flex: 1;
                            `}/>
                        )}
                        {button === KakaoButton.PLACE && (
                            <Button text={'위치 보기'} buttonType={'tonal'} ui={css`
                                flex: 1;
                            `}/>
                        )}
                    </Row>
                )}
                <Row $gap={4} $alignItems={'center'}>
                    {button && (
                        <img width={12} src={'/logo192.png'} alt={'로고'}/>
                    )}
                    <Text type={'caption2'} ui={css`
                        color: var(--g-400);
                    `}>linkmarry.com</Text>
                </Row>
            </Column>
        </Column>
    );
};

export default SharingLink;
