import React, {useEffect, useState} from 'react';
import HasHeader from "@designsystem/pattern/header/HasHeader";
import Text from "@designsystem/component/Text";
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
            
        </HasHeader>
    );
}

export default MyPage;