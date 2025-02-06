import React, {useEffect, useState} from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import S from '@page/mypage/MyPage.style';
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import {Column, Row} from "@designsystem/component/FlexLayout";
import Button from "@designsystem/component/Button";
import Spacer from "@designsystem/component/Spacer";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import RemoveMemberDialog from "@page/mypage/dialog/RemoveMemberDialog";
import InfoMember from "@remote/value/InfoMember";
import memberApi from "@remote/api/MemberApi";
import {css} from "styled-components";

function MyPage() {
    const [member, setMember] = useState<InfoMember>();
    const [isSettingMode, setIsSettingMode] = useState(false);
    const [showRemoveMemberDialog, setShowRemoveMemberDialog] = useState(false);
    const [editMemberName, setEditMemberName] = useState('');
    const navigate = useNavigate();

    const onClickSettingName = () => {
        if (!member) return;

        setEditMemberName(member.name);
        setIsSettingMode(true);
    };

    const onClickSaveName = async () => {
        if (!member || !editMemberName) {
            alert('이름을 입력해 주세요');
            return;
        }

        try {
            await memberApi.editMyProfile({
                picture: member.picture,
                name: editMemberName,
            });
            navigate(0);
        } catch (error) {
            alert('프로필 수정 실패. 잠시 후 다시 시도해 주세요');
            console.error(error);
        }
    }

    useEffect(() => {
        (async () => {
            const {data} = await memberApi.getMyProfile();
            setMember(data);
        })();
    }, []);

    return (
        <HasHeader>
            <S.container>
                <S.sideBar.container>
                    <S.sideBar.profileWrapper>
                        <Text type={'p2'} onClick={() => {

                        }}>프로필</Text>
                    </S.sideBar.profileWrapper>
                    <Divider customStyle={css`
                        color: var(--g-200);
                    `}/>
                    <Text
                        type={'p2'}
                        customStyle={css`
                            color: var(--g-400);
                            cursor: pointer;
                        `}
                        onClick={() => {
                            Cookies.remove('accessToken');
                            Cookies.remove('refreshToken');
                            navigate('/');
                        }}
                    >로그아웃</Text>
                    <Text type={'p2'} customStyle={css`
                        color: #D65745;
                        cursor: pointer;
                    `} onClick={() => {
                        setShowRemoveMemberDialog(true);
                    }}>회원탈퇴</Text>
                </S.sideBar.container>
                <S.baseInfo.container>
                    <Text type={'p2'} style={{fontWeight: '700'}}>기본 정보</Text>
                    {member && (
                        <Column gap={32} $alignItems={'stretch'}>
                            <Row gap={38}>
                                <img
                                    src={member.picture} width={84} height={84}
                                    style={{
                                        background: 'var(--g-100)',
                                        borderRadius: 84 / 2,
                                        objectFit: 'cover'
                                    }} alt={'member picture'}/>
                                {/* TODO: DUMMY */}
                                <Column gap={12}>
                                    <Text type={'p5'}>나의 프로필</Text>
                                    <Button text={'사진 업로드'} role={'assistive'} style={{width: 264}}/>
                                </Column>
                            </Row>
                            <Column $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row style={{height: 52}} $alignItems={'center'}>
                                        <Text type={'p5'} style={{width: 122}}>이름</Text>
                                        {isSettingMode ? (
                                            <S.baseInfo.editNameField
                                                value={editMemberName}
                                                onChange={event => setEditMemberName(event.target.value)}
                                            />
                                        ) : (
                                            <>
                                                <Text
                                                    type={'p5'}
                                                    style={{width: 122}}
                                                    customStyle={css`
                                                        color: var(--g-500);
                                                    `}
                                                >{member.name}</Text>
                                                <Spacer/>
                                                <S.baseInfo.nameSettingButton
                                                    onClick={onClickSettingName}
                                                >
                                                    <Text type={'btn1'} customStyle={css`
                                                        color: var(--g-600);
                                                    `}>설정</Text>
                                                </S.baseInfo.nameSettingButton>
                                            </>
                                        )}
                                    </Row>
                                    {isSettingMode && (
                                        <Row gap={8} $alignSelf={'flex-end'}>
                                            <Button
                                                text={'취소'} role={'assistive'}
                                                onClick={() => setIsSettingMode(false)}
                                            />
                                            <Button text={'저장'} role={'assistive'} onClick={onClickSaveName}/>
                                        </Row>
                                    )}
                                </Column>
                                <Row style={{height: 52}}>
                                    <Text type={'p5'} customStyle={css`
                                        width: 122px;
                                    `}>이메일</Text>
                                    <Text
                                        type={'p5'}
                                        customStyle={css`
                                            width: 122px;
                                            color: var(--g-500);
                                        `}
                                    >{member.email}</Text>
                                </Row>
                            </Column>
                        </Column>
                    )}
                </S.baseInfo.container>
            </S.container>
            {showRemoveMemberDialog && (
                <RemoveMemberDialog dismiss={() => setShowRemoveMemberDialog(false)}/>
            )}
        </HasHeader>
    );
}

export default MyPage;