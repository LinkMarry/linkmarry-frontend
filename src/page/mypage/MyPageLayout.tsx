import React, {useState} from 'react';
import HasHeader from "@designsystem/pattern/header/HasHeader";
import Text from "@designsystem/component/Text";
import {Column, Row} from "@designsystem/component/FlexLayout";
import {Outlet, useNavigate} from "react-router-dom";
import InfoMember from "@remote/value/InfoMember";
import memberApi from "@remote/api/MemberApi";
import {css} from "styled-components";
import MyPageSidebar from "@page/mypage/MyPageSidebar";
import useResponsive from "@hook/useResponsive";

function MyPageLayout() {
    const [member, setMember] = useState<InfoMember>();
    const [isSettingMode, setIsSettingMode] = useState(false);
    const [showRemoveMemberDialog, setShowRemoveMemberDialog] = useState(false);
    const [editMemberName, setEditMemberName] = useState('');
    const navigate = useNavigate();
    const {deviceSize} = useResponsive();

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

    // useEffect(() => {
    //     (async () => {
    //         const {data} = await memberApi.getMyProfile();
    //         setMember(data);
    //     })();
    // }, []);

    if (deviceSize === 'mobile') {
        return <MobileMyPageLayout/>;
    }

    return <DesktopMyPageLayout/>;
}

function MobileMyPageLayout() {
    return (
        <HasHeader>
            <Row $justifyContent={'center'} flex={1} $customStyle={css`
                overflow-y: scroll;
                padding: 24px 16px 0 16px;
            `}>
                <Row gap={32} $customStyle={css`
                    max-width: 1100px;
                    flex: 1;
                `}>
                    <Outlet/>
                </Row>
            </Row>
        </HasHeader>
    )
}

function DesktopMyPageLayout() {
    return (
        <HasHeader>
            <Row $justifyContent={'center'} flex={1} $customStyle={css`
                padding: 72px 24px 0 24px;
                overflow-y: scroll;
            `}>
                <Row gap={32} $customStyle={css`
                    max-width: 1100px;
                    flex: 1;
                `}>
                    <MyPageSidebar/>
                    <Outlet/>
                </Row>
            </Row>
        </HasHeader>
    );
}

export default MyPageLayout;