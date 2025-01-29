import React from 'react';
import colors from "@designsystem/foundation/colors";
import memberApi from "@remote/api/MemberApi";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import Dialog from "@designsystem/component/dialog/dialog";
import {hexToRgba} from "@util/color.util";

interface RemoveMemberDialogProps {
    dismiss: () => void;
}

function RemoveMemberDialog(
    {
        dismiss
    }: RemoveMemberDialogProps
) {
    const navigate = useNavigate();
    
    const onClickConfirm = async () => {
        try {
            await memberApi.removeMember();
            
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            navigate('/');
        } catch (e) {
        }
    }
    
    return (
        <Dialog
            title={'정말 회원 탈퇴하시겠습니까?'}
            description={'회원을 탈퇴하면 모든 정보가 삭제됩니다.'}
            dismiss={dismiss} 
            dismissButtonProps={{
                text: '취소',
                style: {
                    color: colors.error,
                    background: hexToRgba(colors.error, 0.1)
                }
            }} 
            confirmButtonProps={{
                text: '탈퇴',
                onClick: onClickConfirm,
                style: {
                    background: colors.error,
                }
            }}
        />
    );
}

export default RemoveMemberDialog;