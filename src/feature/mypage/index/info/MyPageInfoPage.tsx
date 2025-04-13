import React, {useState} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import Divider from "@src/userinterface/component/Divider";
import Dialog from "@src/userinterface/pattern/dialog/Dialog";
import useAuth from "@src/hook/useAuth";
import Loading from "@src/userinterface/specific/Loading";

function MyPageInfoPage() {
    const [showRemoveMemberDialog, setShowRemoveMemberDialog] = useState(false);
    const {member, removeMember} = useAuth();

    return (
        <Column $gap={24} $alignItems={'stretch'} $ui={css`
            flex: 1;
        `}>
            {showRemoveMemberDialog && (
                <Dialog
                    title={'정말 멤버를 탈퇴하시겠습니까?'}
                    dismiss={() => setShowRemoveMemberDialog(false)}
                    dismissButtonProps={{text: '취소'}}
                    confirmButtonProps={{
                        text: '탈퇴',
                        onClick: async () => {
                            await removeMember();
                        }
                    }}
                />
            )}
            <Text type={'h5'} bold={true}>회원정보</Text>
            <Column $gap={8} $alignItems={'stretch'}>
                {member ? (
                    <Column $alignItems={'stretch'}>
                        <Item title={'이름'} value={member.name}/>
                        <Item title={'이메일'} value={member.email}/>
                    </Column>
                ) : (
                    <Loading/>
                )}
                <Divider/>
                <Text
                    type={'p3'}
                    ui={css`
                        color: var(--g-500);
                        text-decoration: underline;
                        height: 52px;
                        cursor: pointer;
                        align-self: flex-start;
                        display: flex;
                        align-items: center;
                    `}
                    onClick={() => {
                        setShowRemoveMemberDialog(true);
                    }}
                >{'회원탈퇴'}</Text>
            </Column>
        </Column>
    );
}

function Item(props: {
    title: string;
    value: string;
}) {
    return (
        <Row $alignItems={'center'} $ui={css`
            height: 52px;
        `}>
            <Text
                type={'p3'}
                ui={css`
                    width: 122px;
                    color: var(--g-500);
                `}
            >{props.title}</Text>
            <Text
                type={'p3'}
                ui={css`
                    width: 122px;
                    color: var(--g-600);
                `}
                bold={true}
            >{props.value}</Text>
        </Row>
    );
}

export default MyPageInfoPage;
