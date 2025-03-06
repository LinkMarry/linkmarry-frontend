import React from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import Text from "@designsystem/component/Text";
import Button from "@designsystem/component/Button";
import KakaoButton from "@remote/enumeration/KakaoButton";

interface Props {
    button?: KakaoButton;
    Style: boolean;
}

const SharingLink = ({button, Style}: Props) => {
    return (
        <Column $alignItems={'stretch'} $justifyContent={'flex-end'} $customStyle={css`
            border-radius: 8px;
            width: 300px;
            background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDD3-VTr8lfMnJAJy95JDZLG-MJMMpk3uM3A&s");
            ${Style ? css`
                min-height: 297px;
            ` : css`
                min-height: 363px;
            `};
        `}>
            <Column gap={12} $alignItems={'stretch'} $customStyle={css`
                padding: 12px 12px 16px 12px;
                background: var(--g-50);
                background-size: cover;
                background-repeat: no-repeat;
            `}>
                {/*// todo*/}
                <Text type={'p3'} bold={true}>2월 15일, 저희 결혼합니다.</Text>
                {button && (
                    <Row gap={2}>
                        <Button text={'모바일 청첩장'} buttonType={'tonal'} customStyle={css`
                            flex: 1;
                        `}/>
                        {button === KakaoButton.ATTEND && (
                            <Button text={'참석의사 전달'} buttonType={'tonal'} customStyle={css`
                                flex: 1;
                            `}/>
                        )}
                        {button === KakaoButton.PLACE && (
                            <Button text={'위치 보기'} buttonType={'tonal'} customStyle={css`
                                flex: 1;
                            `}/>
                        )}
                    </Row>
                )}
                <Row gap={4} $alignItems={'center'}>
                    {button && (
                        <img width={12} src={'logo192.png'}/>
                    )}
                    <Text type={'caption2'} customStyle={css`
                        color: var(--g-400);
                    `}>linkmarry.com</Text>
                </Row>
            </Column>
        </Column>
    );
};

export default SharingLink;
