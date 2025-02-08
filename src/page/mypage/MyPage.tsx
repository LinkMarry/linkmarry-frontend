import React, {useEffect, useState} from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
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
import CustomStyle from "@designsystem/component/CustomStyle";
import makeText from "@designsystem/foundation/text/TextType";

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
            <Row gap={28} flex={1} $customStyle={css`
                margin: 0 200px;
            `}>
                <Column $alignItems={'stretch'} gap={20} $customStyle={css`
                    width: 216px;
                    height: 100%;
                    padding: 110px 24px 0 24px;
                `}>
                    <Row $alignItems={'center'} $customStyle={css`
                        height: 67px;
                    `}>
                        <Text type={'p2'}>프로필</Text>
                    </Row>
                    <Divider customStyle={css`
                        color: var(--g-200);
                    `}/>
                    <Text type={'p2'} customStyle={css`
                        color: var(--g-400);
                        cursor: pointer;
                    `} onClick={() => {
                        Cookies.remove('accessToken');
                        Cookies.remove('refreshToken');
                        navigate('/');
                    }}>로그아웃</Text>
                    <Text type={'p2'} customStyle={css`
                        color: #D65745;
                        cursor: pointer;
                    `} onClick={() => {
                        setShowRemoveMemberDialog(true);
                    }}>회원탈퇴</Text>
                </Column>
                <Column flex={1} gap={38} $alignItems={'stretch'} $customStyle={css`
                    margin-left: 28px;
                    margin-top: 80px;
                    padding: 28px 36px;
                    border: 1px solid var(--g-200);
                    border-radius: 12px;
                `}>
                    <Text type={'p2'} weight={700}>기본 정보</Text>
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
                                    <Button text={'사진 업로드'} role={'assistive'} customStyle={css`
                                        width: 264px;
                                    `}/>
                                </Column>
                            </Row>
                            <Column $alignItems={'stretch'}>
                                <Column gap={8} $alignItems={'stretch'}>
                                    <Row $alignItems={'center'} $customStyle={css`
                                        height: 52px;
                                    `}>
                                        <Text type={'p5'} customStyle={css`
                                            width: 122px;
                                        `}>이름</Text>
                                        {isSettingMode ? (
                                            <CustomStyle
                                                as={'input'}
                                                value={editMemberName}
                                                onChange={event => setEditMemberName(event.target.value)}
                                                $customStyle={css`
                                                    display: flex;
                                                    flex: 1;
                                                    height: 44px;
                                                    border: 1px solid black;
                                                    padding: 0 24px;
                                                    border-radius: 8px;
                                                    ${makeText('p4')};
                                                    align-items: center;
                                                    outline: none;
                                                `}
                                            />
                                        ) : (
                                            <>
                                                <Text type={'p5'} customStyle={css`
                                                    color: var(--g-500);
                                                    width: 122px;
                                                `}>{member.name}</Text>
                                                <Spacer/>
                                                <CustomStyle
                                                    as={'button'}
                                                    $customStyle={css`
                                                        display: flex;
                                                        outline: none;
                                                        border: 1px solid var(--g-300);
                                                        padding: 8px 24px;
                                                        border-radius: 8px;
                                                        background: transparent;
                                                        cursor: pointer;
                                                    `}
                                                    onClick={onClickSettingName}
                                                >
                                                    <Text type={'btn1'} customStyle={css`
                                                        color: var(--g-600);
                                                    `}>설정</Text>
                                                </CustomStyle>
                                            </>
                                        )}
                                    </Row>
                                    {isSettingMode && (
                                        <Row gap={8} $alignSelf={'flex-end'}>
                                            <Button text={'취소'} role={'assistive'} onClick={() => {
                                                setIsSettingMode(false)
                                            }}/>
                                            <Button text={'저장'} role={'assistive'} onClick={onClickSaveName}/>
                                        </Row>
                                    )}
                                </Column>
                                <Row style={{height: 52}}>
                                    <Text type={'p5'} customStyle={css`
                                        width: 122px;
                                    `}>이메일</Text>
                                    <Text type={'p5'} customStyle={css`
                                        width: 122px;
                                        color: var(--g-500);
                                    `}>{member.email}</Text>
                                </Row>
                            </Column>
                        </Column>
                    )}
                </Column>
            </Row>
            {showRemoveMemberDialog && (
                <RemoveMemberDialog dismiss={() => setShowRemoveMemberDialog(false)}/>
            )}
        </HasHeader>
    );
}

export default MyPage;