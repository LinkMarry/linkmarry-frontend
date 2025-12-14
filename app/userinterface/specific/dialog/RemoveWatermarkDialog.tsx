import {useState} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Icon from "~/userinterface/foundation/Icon";
import Spacer from "~/userinterface/component/Spacer";
import {CUSTOMER_SERVICE_CENTER_URL, NAVER_STORE_WEDDING_URL, TERMS_OR_USE_URL} from "~/shared/constant";
import Input from "~/userinterface/component/Input";
import {formatPhone} from "~/shared/format-util";
import Button from "~/userinterface/component/Button";
import naverApi from "~/infrastructure/network/api/naver-api";
import {useNavigate} from "react-router";
import {isAxiosError} from "axios";
import weddingApi from "~/infrastructure/network/api/wedding-api";
import View from "~/userinterface/core/View.tsx";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import {interactionEffectStyles} from "~/userinterface/css.util.ts";

interface Props {
    url: string;
    dismiss: () => void;
}

const RemoveWatermarkDialog = ({url, dismiss}: Props) => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const removeWatermark = async () => {
        try {
            await naverApi.order(phone);
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
            <View ui={cx(
                css`
                    gap: 32px;
                    padding: 36px;
                    border-radius: 28px;
                    background: white;
                    max-width: 420px;
                    width: 90vw;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    align-items: center;
                    flex-direction: row !important;
                `}>
                    <Text type={'h5'} bold={true}>워터마크 제거</Text>
                    <Spacer/>
                    <Icon iconType={'CrossLine'} ui={cx(
                        css`
                            padding: 8px;
                            fill: var(--g-400);
                            border-radius: 8px;
                        `,
                        interactionEffectStyles.strong
                    )} onClick={dismiss}/>
                </View>
                <View ui={css`
                    gap: 20px;
                `}>
                    <View ui={css`
                        gap: 8px;
                    `}>
                        <Text type={'caption1'}>1. 네이버 스토어에서 청첩장 구매</Text>
                        <View onClick={() => window.open(NAVER_STORE_WEDDING_URL)} ui={css`
                            gap: 15px;
                            flex-direction: row !important;
                            background-color: #3FC911;
                            height: 44px;
                            border-radius: 8px;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                        `}>
                            <img src="/naver.svg" alt=""/>
                            <Text type={'p3'} ui={css`
                                color: white;
                            `}>구매하러 가기</Text>
                        </View>
                    </View>
                    <View ui={css`
                        gap: 8px;
                    `}>
                        <Text type={'caption1'}>2. 구매한 네이버 계정의 전화번호 입력</Text>
                        <Input
                            value={phone}
                            onChange={event => {
                                const value = event.target.value;
                                const formatedPhone = formatPhone(value);
                                setPhone(formatedPhone);
                            }}
                            placeholder={'전화번호'}
                        />
                    </View>
                </View>
                <View ui={css`
                    gap: 16px;
                `}>
                    <Button text={'워터마크 제거'} onClick={removeWatermark} enabled={phone.length === 13}/>
                    <Text type={'caption2'} ui={css`
                        color: var(--g-500);
                    `}>
                        <View as={'ul'} ui={css`
                            gap: 4px;
                        `}>
                            <span>· 워터마크 제거 시 링크메리 <View as={'span'} ui={cx(
                                css`
                                    display: inline-block;
                                    text-decoration: underline;
                                    cursor: pointer;
                                    border-radius: 2px;
                                `,
                                interactionEffectStyles.strong
                            )} onClick={() => window.open(TERMS_OR_USE_URL)}>이용 약관</View>에 동의하신 걸로 처리됩니다.</span>
                            <span>· 구매 확인이 안되는 경우 <View as={'span'} ui={cx(
                                css`
                                    display: inline-block;
                                    text-decoration: underline;
                                    cursor: pointer;
                                    border-radius: 2px;
                                `,
                                interactionEffectStyles.strong
                            )} onClick={() => window.open(CUSTOMER_SERVICE_CENTER_URL)}>
                                고객센터
                            </View>로 문의해 주시길 바랍니다</span>
                        </View>
                    </Text>
                </View>
            </View>
        </BaseDialog>
    );
};

export default RemoveWatermarkDialog;
