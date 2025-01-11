import React, {useEffect, useRef, useState} from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import S from '@page/mypage/MyPage.style';
import Text from "@designsystem/component/text";
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Button from "@designsystem/component/button";
import Spacer from "@designsystem/component/spacer";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import RemoveMemberDialog from "@page/mypage/dialog/RemoveMemberDialog";
import InfoMember from "@remote/value/InfoMember";
import memberApi from "@remote/api/MemberApi";

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
                        <Text text={'프로필'} type={'p2'} onClick={() => {

                        }}/>
                    </S.sideBar.profileWrapper>
                    <HorizontalDivider color={colors.g200}/>
                    <Text
                        text={'로그아웃'} type={'p2'} color={colors.g400} style={{cursor: 'pointer'}}
                        onClick={() => {
                            Cookies.remove('accessToken');
                            Cookies.remove('refreshToken');
                            navigate('/');
                        }}
                    />
                    <Text
                        text={'회원탈퇴'} type={'p2'} color={'#D65745'} style={{cursor: 'pointer'}}
                        onClick={() => {
                            setShowRemoveMemberDialog(true);
                        }}
                    />
                </S.sideBar.container>
                <S.baseInfo.container>
                    <Text text={'기본 정보'} type={'p2'} style={{fontWeight: '700'}}/>
                    {member && (
                        <Column gap={32} $alignItems={'stretch'}>
                            <Row gap={38}>
                                <img src={member.picture} width={84} height={84} style={{
                                    background: colors.g100,
                                    borderRadius: 84 / 2,
                                    objectFit: 'cover'
                                }} alt={'member picture'}/>
                                {/* TODO: DUMMY */}
                                <Column gap={12}>
                                    <Text text={'나의 프로필'} type={'p5'}/>
                                    <Button text={'사진 업로드'} role={'assistive'} style={{width: 264}}/>
                                </Column>
                            </Row>
                            <Column $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row style={{height: 52}} $alignItems={'center'}>
                                        <Text text={'이름'} type={'p5'} style={{width: 122}}/>
                                        {isSettingMode ? (
                                            <S.baseInfo.editNameField
                                                value={editMemberName}
                                                onChange={event => setEditMemberName(event.target.value)}
                                            />
                                        ) : (
                                            <>
                                                <Text
                                                    text={member.name}
                                                    type={'p5'}
                                                    color={colors.g500}
                                                    style={{width: 122}}
                                                />
                                                <Spacer/>
                                                <S.baseInfo.nameSettingButton
                                                    onClick={onClickSettingName}
                                                >
                                                    <Text text={'설정'} type={'btn1'} color={colors.g600}/>
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
                                    <Text text={'이메일'} type={'p5'} style={{width: 122}}/>
                                    <Text text={member.email} type={'p5'} color={colors.g500}
                                          style={{width: 122}}/>
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