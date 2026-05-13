import {Spacer, Button, Text, Divider, View} from "~/components";
import {type ComponentPropsWithoutRef, type Dispatch, type SetStateAction, useState} from "react";
import {css, cx} from "@linaria/core";

import {useNavigate} from "react-router";

import {Icon, type IconType} from "~/components/core/icon";

import {useAuth} from "~/context/auth";
import {NAVER_STORE_URL} from "~/lib/constant.ts";
import {mobileStyle} from "~/style/responsive.ts";
import {LogoInHeader} from "./LogoInHeader.tsx";
import {interactionEffectStyles} from "~/style/common.ts";

export const MobileHeader = () => {
    const {authorized, signOut} = useAuth();
    const [openDetail, setOpenDetail] = useState(false);
    const navigate = useNavigate();

    if (openDetail) {
        return (
            <View
                as={"header"}
                ui={cx(
                    css`
                        position: relative;
                    `,
                    mobileStyle,
                )}
            >
                <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail} />
                <View
                    ui={css`
                        gap: 16px;
                        padding-top: 24px;
                        position: absolute;
                        margin-top: 60px;
                        width: 100vw;
                        background: white;
                        height: calc(100dvh - 60px);
                        z-index: 100;
                    `}
                >
                    {authorized ? (
                        <View
                            ui={css`
                                gap: 8px;
                            `}
                        >
                            <MobileHeaderItem
                                text={"내 모바일 청첩장"}
                                icon={"Envelope"}
                                onClick={() => {
                                    navigate("/mypage/wedding");
                                    setOpenDetail(false);
                                }}
                            />
                            <MobileHeaderItem
                                text={"회원정보"}
                                icon={"PersonLine"}
                                onClick={() => {
                                    navigate("/mypage/info");
                                    setOpenDetail(false);
                                }}
                            />
                        </View>
                    ) : (
                        <Button
                            text={"로그인"}
                            buttonType={"outlined"}
                            ui={css`
                                margin: 0 24px;
                            `}
                            onClick={() => {
                                navigate("/sign-in");
                            }}
                        />
                    )}
                    <Divider size={"large"} />
                    <View
                        ui={css`
                            gap: 8px;
                        `}
                    >
                        <MobileHeaderItem
                            text={"청첩장 만들기"}
                            onClick={() => {
                                navigate("/editor/invitation");
                            }}
                        />
                        <MobileHeaderItem
                            text={"웨딩 포스터"}
                            onClick={() => {
                                navigate("/editor/poster");
                            }}
                        />
                        <MobileHeaderItem
                            text={"공지사항"}
                            onClick={() => {
                                navigate("/notification");
                            }}
                        />
                        <MobileHeaderItem
                            text={"네이버스토어"}
                            onClick={() => {
                                window.open(NAVER_STORE_URL);
                            }}
                        />
                    </View>
                    {authorized && (
                        <>
                            <Divider size={"large"} />
                            <MobileHeaderItem
                                text={"로그아웃"}
                                onClick={() => {
                                    signOut();
                                }}
                            />
                        </>
                    )}
                </View>
            </View>
        );
    }

    return <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail} />;
};

const MobileHeaderContent = (props: {openDetail: boolean; setOpenDetail: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <View
            flexDirection={"row"}
            ui={cx(
                css`
                    align-items: center;
                    width: 100vw;
                    height: 60px;
                    background: white;
                    border-bottom: 1px solid var(--g-200);
                    padding: 0 16px;
                `,
                mobileStyle,
            )}
        >
            <LogoInHeader />
            <Spacer />
            <Icon
                iconType={props.openDetail ? "CrossLine" : "Hamburger"}
                width={24}
                height={24}
                ui={css`
                    fill: var(--g-900);
                    padding: 4px;
                    cursor: pointer;
                `}
                onClick={() => {
                    props.setOpenDetail(i => !i);
                }}
            />
        </View>
    );
};

const MobileHeaderItem = (
    props: {
        text: string;
        icon?: IconType;
    } & ComponentPropsWithoutRef<"div">,
) => {
    return (
        <View
            flexDirection={"row"}
            ui={cx(
                css`
                    gap: 8px;
                    padding: 12px 16px;
                `,
                interactionEffectStyles.strong,
            )}
            {...props}
        >
            {props.icon && (
                <Icon
                    iconType={props.icon}
                    width={20}
                    height={20}
                    ui={css`
                        fill: var(--g-800);
                    `}
                />
            )}
            <Text
                type={"p3"}
                bold={true}
                ui={css`
                    color: var(--g-800);
                `}
            >
                {props.text}
            </Text>
        </View>
    );
};
