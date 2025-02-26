import React, {ComponentPropsWithoutRef, Dispatch, SetStateAction, useState} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Spacer from "@designsystem/component/Spacer";
import useAuth from "@hook/useAuth";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";
import Text from "@designsystem/component/Text";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Popover, {PopoverItem} from "@designsystem/pattern/Popover";
import {useMediaQuery} from "react-responsive";
import Divider from "@designsystem/component/Divider";
import CustomStyle from "@designsystem/component/CustomStyle";

function Header() {
    const isMobile = useMediaQuery({maxWidth: 767});

    if (isMobile) {
        return <MobileHeader/>;
    }

    return <DesktopHeader/>;
}

function MobileHeader() {
    const {authorized} = useAuth();
    const [openDetail, setOpenDetail] = useState(false);
    const navigate = useNavigate();

    if (openDetail) {
        return (
            <Column $alignItems={'stretch'} $customStyle={css`
                position: relative;
            `}>
                <MobileHeaderContent openDetail={openDetail} setOpenDetail={setOpenDetail}/>
                <Column gap={16} $alignItems={'stretch'} $customStyle={css`
                    padding-top: 24px;
                    position: absolute;
                    margin-top: 60px;
                    width: 100vw;
                    background: white;
                    height: calc(100vh - 60px);
                `}>
                    {authorized ? (
                        <Column gap={8} $alignItems={'stretch'}>
                            <MobileHeaderItem text={'내 모바일 청첩장'} icon={IconType.Envelope} onClick={() => {
                            }}/>
                            <MobileHeaderItem text={'회원정보'} icon={IconType.PersonLine} onClick={() => {
                            }}/>
                        </Column>
                    ) : (
                        <Button text={'로그인'} buttonType={'outlined'} customStyle={css`
                            margin: 0 24px;
                        `} onClick={() => {
                            navigate('/login');
                        }}/>
                    )}
                    <Divider size={'large'}/>
                    <Column gap={8} $alignItems={'stretch'}>
                        <MobileHeaderItem text={'공지사항'} onClick={() => {
                        }}/>
                        <MobileHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open('https://smartstore.naver.com/linkmarry');
                        }}/>
                    </Column>
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
        <Row $alignItems={'center'} $customStyle={css`
            width: 100vw;
            height: 60px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 16px;
        `}>
            <Logo/>
            <Spacer/>
            <Icon iconType={props.openDetail ? IconType.CrossLine : IconType.Hamburger} width={24} height={24}
                  customStyle={css`
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
        <Row $justifyContent={'center'} $alignItems={'center'} $customStyle={css`
            width: 100vw;
            height: 72px;
            background: white;
            border-bottom: 1px solid var(--g-200);
            padding: 0 24px;
        `}>
            <Row $alignItems={'center'} $customStyle={css`
                max-width: 1100px;
                flex: 1;
            `}>
                <Row gap={40} $alignItems={'center'}>
                    <Logo/>
                    <Row gap={12} $alignItems={'center'}>
                        <DesktopHeaderItem text={'공지사항'} onClick={() => {
                            // todo: navigate to notion.
                        }}/>
                        <DesktopHeaderItem text={'네이버스토어'} onClick={() => {
                            window.open('https://smartstore.naver.com/linkmarry');
                        }}/>
                    </Row>
                </Row>
                <Spacer/>
                {authorized ? (

                    <CustomStyle $customStyle={css`
                    position: relative;
                `}>
                        <DesktopHeaderItem text={'내 정보'} popoverItems={[]} onClick={() => {
                            setOpenMyInfoPopover(i => !i);
                        }}/>
                        {openMyInfoPopover && (
                            <Popover
                                items={[
                                    {
                                        icon: IconType.Envelope,
                                        text: '내 모바일 청첩장',
                                        onClick: () => {
                                            // todo: navigate to 
                                        }
                                    },
                                    {
                                        icon: IconType.PersonLine,
                                        text: '회원정보',
                                        onClick: () => {
                                            // todo: navigate to 
                                        }
                                    }
                                ]}
                                dismiss={() => {
                                    setOpenMyInfoPopover(false);
                                }}
                                customStyle={css`
                                position: absolute;
                                right: 0;
                            `}
                            />
                        )}
                    </CustomStyle>
                ) : (
                    <Row gap={12} $alignItems={'center'}>
                        <Button text={'로그인'} buttonType={'outlined'} size={'medium'} onClick={() => {
                            navigate('/login');
                        }}/>
                        <Button text={'청첩장 만들기'} size={'medium'} onClick={() => {
                        }}/>
                    </Row>
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
        <Row gap={8} {...props} $customStyle={css`
            padding: 12px 16px;
            transition: 0.1s background;
            cursor: pointer;

            &:hover {
                background: var(--g-100);
            }

            &:active {
                background: var(--g-200);
            }
        `}>
            {props.icon && (
                <Icon iconType={props.icon} width={20} height={20} customStyle={css`
                    fill: var(--g-800);
                `}/>
            )}
            <Text type={'p3'} bold={true} customStyle={css`
                color: var(--g-800);
            `}>{props.text}</Text>
        </Row>
    )
}

function DesktopHeaderItem(props: {
    text: string;
    popoverItems?: PopoverItem[];
} & ComponentPropsWithoutRef<'div'>) {
    return (
        <Row gap={8} $alignItems={'center'} $customStyle={css`
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 6px;
            transition: 0.1s background;

            &:hover {
                background: var(--g-100);
            }

            &:active {
                background: var(--g-200);
            }
        `} {...props}>
            <Text type={'p3'} bold={true} customStyle={css`
                white-space: nowrap;
            `}>{props.text}</Text>
            {props.popoverItems && (
                <Icon iconType={IconType.ExpandArrow} width={20} height={20} customStyle={css`
                    rotate: -90deg;
                    fill: var(--g-400);
                `}/>
            )}
        </Row>
    );
}

function Logo() {
    const navigate = useNavigate();
    return (
        <img src={'/logo.svg'} width={103} alt={'logo'} style={{cursor: 'pointer'}} onClick={() => {
            navigate('/');
        }}/>
    );
}

export default Header;