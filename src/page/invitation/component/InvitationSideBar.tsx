import React from 'react';
import styled, {css} from "styled-components";
import Spacer from "@designsystem/component/Spacer";
import {invitationSideBarRecords, InvitationSideBarType} from "@page/invitation/component/InvitationSideBarType";
import Icon from "@designsystem/foundation/icon";
import makeText from "@designsystem/foundation/text/TextType";
import Text from "@designsystem/component/Text";

interface InvitationSideBarProps {
    selected: InvitationSideBarType;
    onChange: (item: InvitationSideBarType) => void;
}

const items: InvitationSideBarType[] = ['dashboard', 'statistics'];

function InvitationSideBar(
    {
        selected,
        onChange
    }: InvitationSideBarProps
) {
    return (
        <S.container>
            <Spacer style={{
                marginTop: 10,
                marginLeft: 24
            }} w={100}/>
            <S.items>
                {items.map((item) => {
                    const record = invitationSideBarRecords[item];
                    return (
                        <S.item key={`${item}`} onClick={() => {
                            onChange(item);
                        }}>
                            <Icon size={20} iconType={record.icon} customStyle={selected === item ? css`
                                fill: var(--g-600);
                            ` : css`
                                fill: var(--g-300);
                            `}/>
                            <Text type={'p1'} customStyle={selected === item ? css`
                                color: var(--g-600);
                            ` : css`
                                color: var(--g-300);
                            `}>{record.title}</Text>
                        </S.item>
                    );
                })}
            </S.items>
        </S.container>
    );
}

const S = {
    container: styled.div`
        display: flex;
        height: 100%;
        min-width: 284px;
        width: 284px;
        background: white;
        border-right: 1px solid var(--g-200);
    `,
    items: styled.ul`
        width: 98px;
        margin-top: 80px;
    `,
    item: styled.li`
        display: flex;
        align-items: center;
        align-self: stretch;
        gap: 8px;
        margin-bottom: 36px;
        cursor: pointer;
    `,
}

export default InvitationSideBar;