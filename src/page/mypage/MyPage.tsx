import React, {useEffect, useState} from 'react';
import HasHeader from "@designsystem/component/header/hasHeader";
import S from '@page/mypage/MyPage.style';
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
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
    const [showRemoveMemberDialog, setShowRemoveMemberDialog] = useState(false);
    const navigate = useNavigate();

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
                        <Text text={'프로필'} type={TextType.p2} onClick={() => {

                        }}/>
                    </S.sideBar.profileWrapper>
                    <HorizontalDivider color={colors.g200}/>
                    <Text text={'로그아웃'} type={TextType.p2} color={colors.g400} style={{cursor: 'pointer'}}
                          onClick={() => {
                              Cookies.remove('accessToken');
                              Cookies.remove('refreshToken');
                              navigate('/');
                          }}/>
                    <Text text={'회원탈퇴'} type={TextType.p2} color={'#D65745'} style={{cursor: 'pointer'}}
                          onClick={() => {
                              setShowRemoveMemberDialog(true);
                          }}/>
                </S.sideBar.container>
                <S.baseInfo.container>
                    <Text text={'기본 정보'} type={TextType.p2} style={{fontWeight: '700'}}/>
                    {member && (
                        <Column gap={32} $alignItems={'stretch'}>
                            <Row gap={38}>
                                <div style={{
                                    background: colors.g100,
                                    borderRadius: 84 / 2,
                                    width: 84,
                                    height: 84
                                }}></div>
                                {/* TODO: DUMMY */}
                                <Column gap={12}>
                                    <Text text={'나의 프로필'} type={TextType.p5}/>
                                    <Button text={'사진 업로드'} role={'assistive'} style={{width: 264}}/>
                                </Column>
                            </Row>
                            <Column $alignItems={'stretch'}>
                                <Row style={{height: 52}}>
                                    <Text text={'이름'} type={TextType.p5} style={{width: 122}}/>
                                    <Text text={member.name} type={TextType.p5} color={colors.g500}
                                          style={{width: 122}}/>
                                    <Spacer/>
                                    <S.baseInfo.nameSettingButton>
                                        <Text text={'설정'} type={TextType.btn1} color={colors.g600}/>
                                    </S.baseInfo.nameSettingButton>
                                </Row>
                                <Row style={{height: 52}}>
                                    <Text text={'이메일'} type={TextType.p5} style={{width: 122}}/>
                                    <Text text={member.email} type={TextType.p5} color={colors.g500}
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