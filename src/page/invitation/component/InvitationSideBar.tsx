import React from 'react';
import styled from "styled-components";
import Spacer from "@designsystem/component/spacer";
import colors from "@designsystem/foundation/colors";
import {invitationSideBarRecords, InvitationSideBarType} from "@page/invitation/component/InvitationSideBarType";
import Icon from "@designsystem/foundation/icon";
import makeText from "@designsystem/foundation/text/textType";

interface InvitationSideBarProps {
    selected: InvitationSideBarType;
    onChange: (item: InvitationSideBarType) => void;
}

const items: InvitationSideBarType[] = ['dashboard', 'design', 'statistics'];

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
                    const foreground = selected === item ? colors.g600 : colors.g300;
                    return (
                        <S.item key={`${item}`} onClick={() => {
                            onChange(item);
                        }}>
                            <Icon tint={foreground} size={20} type={record.icon}/>
                            <S.itemTitle style={{color: foreground}}>{record.title}</S.itemTitle>
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
        background: ${colors.white};
        border-right: 1px solid ${colors.g200};
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
    itemTitle: styled.span`
        ${makeText('p1')};
    `
}

export default InvitationSideBar;