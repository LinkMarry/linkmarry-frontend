import React, {useRef} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import styled, {css} from "styled-components";
import {Column} from "@designsystem/component/FlexLayout";
import Text from "@designsystem/component/Text";
import TextField from "@designsystem/component/TextField";
import Textarea from "@designsystem/component/Textarea";
import Button from "@designsystem/component/Button";
import weddingApi from "@remote/api/WeddingApi";
import {useNavigate} from "react-router-dom";

interface CreateGuestCommentDialogProps {
    url: string;
    dismiss: () => void;
    onRefresh: () => void;
}

function CreateGuestCommentDialog(
    {
        url,
        dismiss,
        onRefresh
    }: CreateGuestCommentDialogProps
) {
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const commentRef = useRef<HTMLTextAreaElement>(null);

    const navigate = useNavigate();

    const onClickSave = async () => {
        if (!nameRef.current?.value) {
            alert('이름을 입력해 주세요');
            return;
        }

        if (!passwordRef.current?.value) {
            alert('비밀번호를 입력해 주세요');
            return;
        }

        if (!commentRef.current?.value) {
            alert('방명록을 작성해 주세요');
            return;
        }

        try {
            await weddingApi.createComment({
                comment: commentRef.current.value,
                name: nameRef.current.value,
                password: passwordRef.current.value,
                url
            });
            alert('방명록 작성 완료');
            onRefresh();
            dismiss();
        } catch (error) {
            alert('방명록 작성 실패');
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column gap={4} $alignItems={'center'}>
                    {/*<Text type={'h6'}>방명록 작성하기</Text>*/}
                    <Text type={'caption1'} customStyle={css`
                        color: var(--g-400);
                    `}>저희에게 따뜻한 말을 남겨주세요</Text>
                </Column>
                <Column gap={12} $alignItems={'stretch'}>
                    <TextField ref={nameRef} placeholder={'성함'}/>
                    <TextField ref={passwordRef} placeholder={'비밀번호 입력'} fieldProps={{type: 'password'}}/>
                    <Textarea ref={commentRef} placeholder={'200자 이내로 작성'} maxLength={200}/>
                </Column>
                <Button text={'방명록 남기기'} onClick={onClickSave}/>
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
        background: white;
        border-radius: 12px;
        ${applyBaseDialogContent()};
    `
}

export default CreateGuestCommentDialog;