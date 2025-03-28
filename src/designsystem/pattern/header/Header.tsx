import React, {ComponentPropsWithoutRef, Dispatch, SetStateAction, useState} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Popover from "@designsystem/pattern/Popover";
import Divider from "@designsystem/component/Divider";
import View from "@designsystem/core/View";
import useResponsive from "@hook/useResponsive";
import Logo from "@src/component/Logo";
import useAuth from "@hook/useAuth";
import {makeInteractionEffect} from "@util/css.util";
import {NAVER_STORE_URL, NOTIFICATION_URL} from "@util/constant";

function Header() {
    const {deviceSize} = useResponsive();

    if (deviceSize === 'mobile') {
        return <MobileHeader/>;
    }

    return <DesktopHeader/>;
}

function MobileHeader() {
    const {authorized, signOut} = useAuth();
    const [openDetail, setOpenDetail] = useState(false);
    const navigate = useNavigate();

    if (openDetail) {
        return (
            <Column as={'header'} $alignItems={'stretch'} $ui={css`
                position: relative;
            `}>
                <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>
                <Column $gap={16} $alignItems={'stretch'} $ui={css`
                    padding-top: 24px;
                    position: absolute;
                    margin-top: 60px;
                    width: 100vw;
                    background: white;
                    height: calc(100dvh - 60px);
                    z-index: 100;
                `}>
                    {authorized ? (
                        <Column $gap={8} $alignItems={'stretch'}>
                            <MobileHeaderItem text={'내 모바일 청첩장'} icon={IconType.Envelope} onClick={() => {
                                navigate('/mypage/wedding');
                                setOpenDetail(false);
                            }}/>
                            <MobileHeaderItem text={'회원정보'} icon={IconType.PersonLine} onClick={() => {
                                navigate('/mypage/info');
                                setOpenDetail(false);
                            }}/>
                        </Column>
                    ) : (
                        <Button text={'로그인'} buttonType={'outlined'} ui={css`
                            margin: 0 24px;
                        `} onClick={() => {
                            navigate('/login');
                        }}/>
                    )}
                    <Divider size={'large'}/>
                    <Column $gap={8} $alignItems={'stretch'}>
                        <MobileHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <MobileHeaderItem text={'공지사항'} onClick={() => {
                            window.open(NOTIFICATION_URL);
                        }}/>
                        <MobileHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open(NAVER_STORE_URL);
                        }}/>
                    </Column>
                    {authorized && (
                        <>
                            <Divider size={'large'}/>
                            <MobileHeaderItem text={'로그아웃'} onClick={() => {
                                signOut();
                            }}/>
                        </>
                    )}
                </Column>
            </Column>
        )
    }

    return <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>;
}

function MobileHeaderContent(props: {
    openDetail: boolean;
    setOpenDetail: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <Row $alignItems={'center'} $ui={css`
            width: 100vw;
            height: 60px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 16px;
        `}>
            <LogoInHeader/>
            <Spacer/>
            <Icon iconType={props.openDetail ? IconType.CrossLine : IconType.Hamburger} width={24} height={24}
                  ui={css`
                      fill: var(--g-900);
                      padding: 4px;
                      cursor: pointer;
                  `} onClick={() => {
                props.setOpenDetail(i => !i);
            }}/>
        </Row>
    )
}

function DesktopHeader() {
    const {authorized} = useAuth();
    const navigate = useNavigate();
    const [openMyInfoPopover, setOpenMyInfoPopover] = useState(false);

    return (
        <Row as={'header'} $justifyContent={'center'} $alignItems={'center'} $ui={css`
            width: 100vw;
            min-height: 72px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 24px;
        `}>
            <Row $alignItems={'center'} $ui={css`
                max-width: 1100px;
                flex: 1;
            `}>
                <Row $gap={40} $alignItems={'center'}>
                    <LogoInHeader/>
                    <Row $gap={12} $alignItems={'center'}>
                        <DesktopHeaderItem text={'청첩장 만들기'} onClick={() => {
                            navigate('/editor');
                        }}/>
                        <DesktopHeaderItem text={'공지사항'} onClick={() => {
                            window.open(NOTIFICATION_URL);
                        }}/>
                        <DesktopHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open(NAVER_STORE_URL);
                        }}/>
                    </Row>
                </Row>
                <Spacer/>
                {authorized ? (
                    <View $ui={css`
                        position: relative;
                    `}>
                        <DesktopHeaderItem text={'내 정보'} hasPopover={true} onClick={() => {
                            setOpenMyInfoPopover(i => !i);
                        }}/>
                        {openMyInfoPopover && (
                            <Popover
                                items={[
                                    {
                                        icon: IconType.Envelope,
                                        text: '내 모바일 청첩장',
                                        onClick: () => {
                                            navigate('/mypage/wedding');
                                        }
                                    },
                                    {
                                        icon: IconType.PersonLine,
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
                        navigate('/login');
                    }}/>
                )}
            </Row>
        </Row>
    );
}

function MobileHeaderItem(props: {
    text: string;
    icon?: IconType;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row $gap={8} {...props} $ui={css`
            padding: 12px 16px;
            ${makeInteractionEffect('strong')};
        `}>
            {props.icon && (
                <Icon iconType={props.icon} width={20} height={20} ui={css`
                    fill: var(--g-800);
                `}/>
            )}
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-800);
            `}>{props.text}</Text>
        </Row>
    )
}

function DesktopHeaderItem({text, hasPopover = false, ...props}: {
    text: string;
    hasPopover?: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row $gap={8} $alignItems={'center'} $ui={css`
            padding: 8px 16px;
            border-radius: 6px;
            ${makeInteractionEffect('strong')};
        `} {...props}>
            <Text type={'p3'} bold={true} ui={css`
                white-space: nowrap;
            `}>{text}</Text>
            {hasPopover && (
                <Icon iconType={IconType.ExpandArrow} width={20} height={20} ui={css`
                    rotate: -90deg;
                    fill: var(--g-400);
                `}/>
            )}
        </Row>
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
