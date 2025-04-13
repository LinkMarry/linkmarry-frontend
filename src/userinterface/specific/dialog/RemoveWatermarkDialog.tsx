import React, {useState} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Text from "@src/userinterface/component/Text";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {makeInteractionEffect} from "@src/shared/css.util";
import Spacer from "@src/userinterface/component/Spacer";
import {CUSTOMER_SERVICE_CENTER_URL, NAVER_STORE_WEDDING_URL, TERMS_OR_USE_URL} from "@src/shared/constant";
import Input from "@src/userinterface/component/Input";
import FormatUtil from "@src/shared/format.util";
import Button from "@src/userinterface/component/Button";
import naverApi from "@src/infrastructure/network/api/NaverApi";
import {useNavigate} from "react-router-dom";
import {isAxiosError} from "axios";
import weddingApi from "@src/infrastructure/network/api/WeddingApi";
import View from "@src/userinterface/core/View";

interface Props {
    url: string;
    dismiss: () => void;
}

const RemoveWatermarkDialog = ({url, dismiss}: Props) => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const removeWatermark = async () => {
        try {
            const clearedPhone = phone.replace('-', '')
            await naverApi.order(clearedPhone);
        } catch (error) {
            console.log(error);
            return;
        }

        try {
            await weddingApi.removeWatermark(url);
            alert('워터마크 제거 완료!');
            navigate(0);
        } catch (error) {
            console.error(error);
            if (isAxiosError(error) && error.response && error.status === 404) {
                alert(`워터마크 제거 실패 - ${error.response.data.message}`);
            } else {
                alert('워터마크 제거 실패 - 고객센터에 문의하세요');
            }
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $alignItems={'stretch'} $gap={32} $ui={css`
                padding: 36px;
                border-radius: 28px;
                background: white;
                ${applyBaseDialogContent()};
                max-width: 420px;
                width: 90vw;
            `}>
                <Row $alignItems={'center'}>
                    <Text type={'h5'} bold={true}>워터마크 제거</Text>
                    <Spacer/>
                    <Icon iconType={IconType.CrossLine} ui={css`
                        padding: 8px;
                        fill: var(--g-400);
                        border-radius: 8px;
                        ${makeInteractionEffect('strong')};
                    `} onClick={dismiss}/>
                </Row>
                <Column $gap={20} $alignItems={'stretch'}>
                    <Column $gap={8} $alignItems={'stretch'}>
                        <Text type={'caption1'}>1. 네이버 스토어에서 청첩장 구매</Text>
                        <Row
                            $gap={15}
                            $alignItems={'stretch'}
                            onClick={() => window.open(NAVER_STORE_WEDDING_URL)}
                            $ui={css`
                                display: flex;
                                background-color: #3FC911;
                                height: 44px;
                                border-radius: 8px;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;
                            `}
                        >
                            <img src="/naver.svg" alt=""/>
                            <Text type={'p3'} ui={css`
                                color: white;
                            `}>구매하러 가기</Text>
                        </Row>
                    </Column>
                    <Column $gap={8} $alignItems={'stretch'}>
                        <Text type={'caption1'}>2. 구매한 네이버 계정의 전화번호 입력</Text>
                        <Input
                            value={phone}
                            onChange={event => {
                                const value = event.target.value;
                                const formatedPhone = FormatUtil.formatPhone(value);
                                setPhone(formatedPhone);
                            }}
                            placeholder={'전화번호'}
                        />
                    </Column>
                </Column>
                <Column $alignItems={'stretch'} $gap={16}>
                    <Button text={'워터마크 제거'} onClick={removeWatermark}/>
                    <Text type={'caption2'} ui={css`
                        color: var(--g-500);
                    `}>
                        <Column as={'ul'} $alignItems={'stretch'} $gap={4}>
                            <span>· 워터마크 제거 시 링크메리 <View as={'span'} $ui={css`
                                text-decoration: underline;
                                cursor: pointer;
                                border-radius: 2px;
                                ${makeInteractionEffect('strong')};
                            `} onClick={() => window.open(TERMS_OR_USE_URL)}>이용 약관</View>에 동의하신 걸로 처리됩니다.</span>
                            <span>· 구매 확인이 안되는 경우 <View as={'span'} $ui={css`
                                text-decoration: underline;
                                cursor: pointer;
                                border-radius: 2px;
                                ${makeInteractionEffect('strong')};
                            `} onClick={() => window.open(CUSTOMER_SERVICE_CENTER_URL)}>
                                고객센터
                            </View>로 문의해 주시길 바랍니다</span>
                        </Column>
                    </Text>
                </Column>
            </Column>
        </BaseDialog>
    );
};

export default RemoveWatermarkDialog;
