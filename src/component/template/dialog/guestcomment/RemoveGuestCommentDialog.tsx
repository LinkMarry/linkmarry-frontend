import React, {useRef} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import {Column} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import TextField from "@designsystem/component/textField";
import Button from "@designsystem/component/button";
import weddingApi from "@remote/api/WeddingApi";
import Comment from "@remote/value/Comment";
import {isAxiosError} from "axios";
import {useNavigate} from "react-router-dom";

interface RemoveGuestCommentDialogProps {
    url: string;
    selectedGuestComment: Comment;
    dismiss: () => void;
}

function RemoveGuestCommentDialog(
    {
        url,
        selectedGuestComment,
        dismiss
    }: RemoveGuestCommentDialogProps
) {
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const onClickRemove = async () => {
        if (!selectedGuestComment) return;

        if (!passwordRef.current?.value) {
            alert('비밀번호를 입력해 주세요');
            return;
        }

        try {
            await weddingApi.removeComment({
                url,
                id: selectedGuestComment.id,
                password: passwordRef.current.value,
            });
            navigate(0);
        } catch (error) {
            if (isAxiosError(error) && error.response && error.response.status === 400) {
                alert('비밀번호를 다시 확인 해주세요');
            } else {
                alert('방명록 삭제 실패');
            }
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={4} $alignItems={'center'}>
                    <Text type={'h6'}>글 삭제하기</Text>
                    <Text type={'caption1'} color={colors.g400}>관리자와 글 작성자만 글을 삭제할 수 있습니다</Text>
                </Column>
                <TextField ref={passwordRef} placeholder={'비밀번호 입력'}/>
                <Button text={'삭제'} role={'assistive'} onClick={onClickRemove}/>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        width: 80vw;
        max-width: 560px;
        flex-direction: column;
        padding: 44px 36px;
        gap: 48px;
        background: ${colors.white};
        border-radius: 12px;
        ${applyBaseDialogContent()};
    `
}

export default RemoveGuestCommentDialog;