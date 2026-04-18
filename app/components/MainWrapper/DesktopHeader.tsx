import { type ComponentPropsWithoutRef, useState } from 'react';
import { css, cx } from "@linaria/core";
import Spacer from "~/components/core/Spacer.tsx";
import Button from "~/components/core/Button.tsx";
import { useNavigate } from "react-router";
import Text from "~/components/core/Text.tsx";
import Icon from "~/components/core/icon";
import Popover from "~/components/core/Popover.tsx";
import View from "~/components/core/View.tsx";
import { useAuth } from "~/hook/useAuth.tsx";
import { NAVER_STORE_URL, NOTIFICATION_URL } from "~/lib/constant.ts";
import { notMobileStyle } from "~/components/responsive.tsx";
import { interactionEffectStyles } from "~/components/css.util.ts";
import ClientRendering from "~/ClientRendering.tsx";
import { LogoInHeader } from "./Header.tsx";

export default function DesktopHeader() {
    const { authorized } = useAuth();
    const navigate = useNavigate();
    const [openMyInfoPopover, setOpenMyInfoPopover] = useState(false);

    return (
        <View as={'header'} ui={cx(
            css`
                flex-direction: row !important;
                align-items: center;
                justify-content: center;
                width: 100vw;
                min-height: 72px;
                background: white;
                border-bottom: 1px solid var(--g-200);
                padding: 0 24px;
            `,
            notMobileStyle
        )}>
            <View ui={css`
                align-items: center;
                flex-direction: row !important;
                max-width: 1100px;
                flex: 1;
            `}>
                <View ui={css`
                    gap: 40px;
                    align-items: center;
                    flex-direction: row !important;
                `}>
                    <LogoInHeader />
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 12px;
                        align-items: center;
                    `}>
                        <DesktopHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }} />
                        <DesktopHeaderItem text={'웨딩 포스터'} onClick={() => {
                            navigate('/poster');
                        }} />
                        <DesktopHeaderItem text={'공지사항'} onClick={() => {
                            navigate('/notification');
                        }} />
                        <DesktopHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open(NAVER_STORE_URL);
                        }} />
                    </View>
                </View>
                <Spacer />
                <ClientRendering>
                    {authorized ? (
                        <View ui={css`
                            position: relative;
                        `}>
                            <DesktopHeaderItem text={'내 정보'} hasPopover={true} onClick={() => {
                                setOpenMyInfoPopover(i => !i);
                            }} />
                            {openMyInfoPopover && (
                                <Popover
                                    items={[
                                        {
                                            icon: 'Envelope',
                                            text: '내 모바일 청첩장',
                                            onClick: () => {
                                                navigate('/mypage/wedding');
                                            }
                                        },
                                        {
                                            icon: 'PersonLine',
                                            text: '회원정보',
                                            onClick: () => {
                                                navigate('/mypage/info');
                                            }
                                        }
                                    ]}
                                    dismiss={() => {
                                        setOpenMyInfoPopover(false);
                                    }}
                                    ui={css`
                                        right: 0;
                                    `}
                                />
                            )}
                        </View>
                    ) : (
                        <Button text={'로그인'} buttonType={'outlined'} size={'medium'} onClick={() => {
                            navigate('/sign-in');
                        }} />
                    )}
                </ClientRendering>
            </View>
        </View>
    );
}

function DesktopHeaderItem({ text, hasPopover = false, ...props }: {
    text: string;
    hasPopover?: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <View ui={cx(
            css`
                flex-direction: row !important;
                gap: 8px;
                align-items: center;
                padding: 8px 16px;
                border-radius: 6px;
            `,
            interactionEffectStyles.strong
        )} {...props}>
            <Text type={'p3'} bold={true} ui={css`
                white-space: nowrap;
            `}>{text}</Text>
            {hasPopover && (
                <Icon iconType={'ExpandArrow'} width={20} height={20} ui={css`
                    rotate: -90deg;
                    fill: var(--g-400);
                `} />
            )}
        </View>
    );
}
