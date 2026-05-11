import {BaseDialog, Text, Icon, Spacer, Input, Button, View} from "~/components";
import {css, cx} from "@linaria/core";

import {CUSTOMER_SERVICE_CENTER_URL, NAVER_STORE_WEDDING_URL, TERMS_OR_USE_URL} from "~/lib/constant.ts";

import {baseDialogContentStyle} from "~/components/core/dialog/baseDialogContentStyle.ts";
import {useRemoveWatermarkDialog} from "./useRemoveWatermarkDialog.ts";
import {interactionEffectStyles} from "~/style/common.ts";

interface Props {
    show: boolean;
    url: string;
    dismiss: () => void;
}

export const RemoveWatermarkDialog = ({show, url, dismiss}: Props) => {
    const {phone, removeWatermark, handlePhoneChange} = useRemoveWatermarkDialog({url});

    return (
        <BaseDialog show={show} dismiss={dismiss}>
            <View
                ui={cx(
                    css`
                        gap: 32px;
                        padding: 36px;
                        border-radius: 28px;
                        background: white;
                        max-width: 420px;
                        width: 90vw;
                    `,
                    baseDialogContentStyle,
                )}
            >
                <View
                    flexDirection={"row"}
                    ui={css`
                        align-items: center;
                    `}
                >
                    <Text type={"h5"} bold={true}>
                        워터마크 제거
                    </Text>
                    <Spacer />
                    <Icon
                        iconType={"CrossLine"}
                        ui={cx(
                            css`
                                padding: 8px;
                                fill: var(--g-400);
                                border-radius: 8px;
                            `,
                            interactionEffectStyles.strong,
                        )}
                        onClick={dismiss}
                    />
                </View>
                <View
                    ui={css`
                        gap: 20px;
                    `}
                >
                    <View
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <Text type={"caption1"}>1. 네이버 스토어에서 청첩장 구매</Text>
                        <View
                            onClick={() => window.open(NAVER_STORE_WEDDING_URL)}
                            flexDirection={"row"}
                            ui={css`
                                gap: 15px;
                                background-color: #3fc911;
                                height: 44px;
                                border-radius: 8px;
                                justify-content: center;
                                align-items: center;
                                cursor: pointer;
                            `}
                        >
                            <img src="/naver.svg" alt="" />
                            <Text
                                type={"p3"}
                                ui={css`
                                    color: white;
                                `}
                            >
                                구매하러 가기
                            </Text>
                        </View>
                    </View>
                    <View
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <Text type={"caption1"}>2. 구매한 네이버 계정의 전화번호 입력</Text>
                        <Input
                            value={phone}
                            onChange={event => handlePhoneChange(event.target.value)}
                            placeholder={"전화번호"}
                        />
                    </View>
                </View>
                <View
                    ui={css`
                        gap: 16px;
                    `}
                >
                    <Button text={"워터마크 제거"} onClick={removeWatermark} enabled={phone.length === 13} />
                    <Text
                        type={"caption2"}
                        ui={css`
                            color: var(--g-500);
                        `}
                    >
                        <View
                            as={"ul"}
                            ui={css`
                                gap: 4px;
                                display: flex;
                                flex-direction: column;
                            `}
                        >
                            <span>
                                · 워터마크 제거 시 링크메리{" "}
                                <View
                                    as={"span"}
                                    ui={cx(
                                        css`
                                            display: inline-block;
                                            text-decoration: underline;
                                            cursor: pointer;
                                            border-radius: 2px;
                                        `,
                                        interactionEffectStyles.strong,
                                    )}
                                    onClick={() => window.open(TERMS_OR_USE_URL)}
                                >
                                    이용 약관
                                </View>
                                에 동의하신 걸로 처리됩니다.
                            </span>
                            <span>
                                · 구매 확인이 안되는 경우{" "}
                                <View
                                    as={"span"}
                                    ui={cx(
                                        css`
                                            display: inline-block;
                                            text-decoration: underline;
                                            cursor: pointer;
                                            border-radius: 2px;
                                        `,
                                        interactionEffectStyles.strong,
                                    )}
                                    onClick={() => window.open(CUSTOMER_SERVICE_CENTER_URL)}
                                >
                                    고객센터
                                </View>
                                로 문의해 주시길 바랍니다
                            </span>
                        </View>
                    </Text>
                </View>
            </View>
        </BaseDialog>
    );
};
