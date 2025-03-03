import React, {ComponentPropsWithoutRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import MyPageSidebarType, {myPageSidebarRecord} from "@page/mypage/MyPageSidebarType";
import Text from "@designsystem/component/Text";
import Icon from "@designsystem/foundation/Icon";
import useMyPage from "@page/mypage/useMyPage";
import useAuth from "@hook/useAuth";

function MyPageSidebar() {
    const {currentSidebar, navigate} = useMyPage();
    const {signOut} = useAuth();

    return (
        <Column gap={32} $alignItems={'stretch'} $customStyle={css`
            width: 216px;
        `}>
            <Column $alignItems={'stretch'} gap={4}>
                <Item selected={currentSidebar === 'wedding'} type={'wedding'} onClick={() => navigate('wedding')}/>
                <Item selected={currentSidebar === 'info'} type={'info'} onClick={() => navigate('info')}/>
            </Column>
            <Item selected={currentSidebar === 'logout'} type={'logout'} onClick={() => {
                signOut();
            }}/>
        </Column>
    );
}

function Item(props: {
    type: MyPageSidebarType;
    selected: boolean;
} & ComponentPropsWithoutRef<'div'>) {
    const {icon, text} = myPageSidebarRecord[props.type];

    return (
        <Row gap={8} $alignItems={'center'} $customStyle={css`
            padding: 16px;
            cursor: pointer;
            transition: 0.1s background;
            border-radius: 6px;

            ${props.selected ? css`
                background: var(--g-100);
            ` : css`
                &:hover {
                    background: var(--g-50);
                }`
            };
        `} {...props}>
            <Icon iconType={icon} width={24} height={24} customStyle={css`
                fill: var(--g-600);
            `}/>
            <Text type={'p2'} bold={true} customStyle={css`
                color: var(--g-600);
            `}>{text}</Text>
        </Row>
    );
}

export default MyPageSidebar;
