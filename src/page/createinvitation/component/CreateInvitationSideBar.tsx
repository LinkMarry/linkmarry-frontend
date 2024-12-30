import React from 'react';
import styled from "styled-components";
import Spacer from "../../../designsystem/component/spacer";
import colors from "../../../designsystem/foundation/colors";
import {createInvitationSideBarRecords, CreateInvitationSideBarType} from "./CreateInvitationSideBarType";
import Icon from "../../../designsystem/foundation/icon";
import makeText, {TextType} from "../../../designsystem/foundation/text/textType";

interface CreateInvitationSideBarProps {
    selected: CreateInvitationSideBarType;
    onChange: (item: CreateInvitationSideBarType) => void;
}

const items: CreateInvitationSideBarType[] = ['dashboard', 'design', 'statistics'];

function CreateInvitationSideBar(
    {
        selected,
        onChange
    }: CreateInvitationSideBarProps
) {

    return (
        <S.container>
            <Spacer style={{
                marginTop: 10,
                marginLeft: 24
            }} w={100}/>
            <S.items>
                {items.map((item) => {
                    const record = createInvitationSideBarRecords[item];
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
        gap: 8px;
        margin-bottom: 36px;
        cursor: pointer;
    `,
    itemTitle: styled.span`
        ${makeText(TextType.p1)};
    `
}

export default CreateInvitationSideBar;