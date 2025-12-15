import {type ComponentPropsWithoutRef, type Dispatch, type SetStateAction, useState} from 'react';
import {css, cx} from "@linaria/core";
import Spacer from "~/userinterface/component/Spacer";
import Button from "~/userinterface/component/Button";
import {useNavigate} from "react-router";
import Text from "~/userinterface/component/Text";
import Icon, {type IconType} from "~/userinterface/foundation/Icon";
import Popover from "~/userinterface/pattern/Popover";
import Divider from "~/userinterface/component/Divider";
import View from "~/userinterface/core/View.tsx";
import Logo from "~/userinterface/specific/Logo";
import {useAuth} from "~/hook/useAuth";
import {NAVER_STORE_URL, NOTIFICATION_URL} from "~/shared/constant";
import {mobileStyle, notMobileStyle} from "~/hook/ResponsiveSwitch.tsx";
import {interactionEffectStyles} from "~/userinterface/css.util.ts";
import ClientRendering from "~/ClientRendering.tsx";

function Header() {
    return (
        <>
            <MobileHeader/>
            <NotMobileHeader/>
        </>
    )
}

function MobileHeader() {
    const {authorized, signOut} = useAuth();
    const [openDetail, setOpenDetail] = useState(false);
    const navigate = useNavigate();

    if (openDetail) {
        return (
            <View as={'header'} ui={cx(
                css`
                    position: relative;
                `,
                mobileStyle
            )}>
                <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>
                <View ui={css`
                    gap: 16px;
                    padding-top: 24px;
                    position: absolute;
                    margin-top: 60px;
                    width: 100vw;
                    background: white;
                    height: calc(100dvh - 60px);
                    z-index: 100;
                `}>
                    {authorized ? (
                        <View ui={css`
                            gap: 8px;
                        `}>
                            <MobileHeaderItem text={'내 모바일 청첩장'} icon={'Envelope'} onClick={() => {
                                navigate('/mypage/wedding');
                                setOpenDetail(false);
                            }}/>
                            <MobileHeaderItem text={'회원정보'} icon={'PersonLine'} onClick={() => {
                                navigate('/mypage/info');
                                setOpenDetail(false);
                            }}/>
                        </View>
                    ) : (
                        <Button text={'로그인'} buttonType={'outlined'} ui={css`
                            margin: 0 24px;
                        `} onClick={() => {
                            navigate('/sign-in');
                        }}/>
                    )}
                    <Divider size={'large'}/>
                    <View ui={css`
                        gap: 8px;
                    `}>
                        <MobileHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <MobileHeaderItem text={'공지사항'} onClick={() => {
                            navigate('/notification');
                        }}/>
                        <MobileHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open(NAVER_STORE_URL);
                        }}/>
                    </View>
                    {authorized && (
                        <>
                            <Divider size={'large'}/>
                            <MobileHeaderItem text={'로그아웃'} onClick={() => {
                                signOut();
                            }}/>
                        </>
                    )}
                </View>
            </View>
        );
    }

    return <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>;
}

function MobileHeaderContent(props: {
    openDetail: boolean;
    setOpenDetail: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <View ui={cx(
            css`
                align-items: center;
                flex-direction: row !important;
                width: 100vw;
                height: 60px;
                background: white;
                border-bottom: 1px solid var(--g-200);
                padding: 0 16px;
            `,
            mobileStyle
        )}>
            <LogoInHeader/>
            <Spacer/>
            <Icon iconType={props.openDetail ? 'CrossLine' : 'Hamburger'} width={24} height={24}
                  ui={css`
                      fill: var(--g-900);
                      padding: 4px;
                      cursor: pointer;
                  `} onClick={() => {
                props.setOpenDetail(i => !i);
            }}/>
        </View>
    );
}

function NotMobileHeader() {
    const {authorized} = useAuth();
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
                    <LogoInHeader/>
                    <View ui={css`
                        flex-direction: row !important;
                        gap: 12px;
                        align-items: center;
                    `}>
                        <DesktopHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <DesktopHeaderItem text={'공지사항'} onClick={() => {
                            navigate('/notification');
                        }}/>
                        <DesktopHeaderItem text={'자주 묻는 질문'} onClick={() => {
                            navigate('/question');
                        }}/>
                        <DesktopHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open(NAVER_STORE_URL);
                        }}/>
                    </View>
                </View>
                <Spacer/>
                <ClientRendering>
                    {authorized ? (
                        <View ui={css`
                            position: relative;
                        `}>
                            <DesktopHeaderItem text={'내 정보'} hasPopover={true} onClick={() => {
                                setOpenMyInfoPopover(i => !i);
                            }}/>
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
                        }}/>
                    )}
                </ClientRendering>
            </View>
        </View>
    );
}

function MobileHeaderItem(props: {
    text: string;
    icon?: IconType;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <View ui={cx(
            css`
                flex-direction: row !important;
                gap: 8px;
                padding: 12px 16px;
            `,
            interactionEffectStyles.strong
        )} {...props}>
            {props.icon && (
                <Icon iconType={props.icon} width={20} height={20} ui={css`
                    fill: var(--g-800);
                `}/>
            )}
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-800);
            `}>{props.text}</Text>
        </View>
    )
}

function DesktopHeaderItem({text, hasPopover = false, ...props}: {
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
                `}/>
            )}
        </View>
    );
}

function LogoInHeader() {
    const navigate = useNavigate();
    return (
        <Logo ui={css`
            cursor: pointer;
        `} onClick={() => {
            navigate('/');
        }}/>
    );
}

export default Header;
