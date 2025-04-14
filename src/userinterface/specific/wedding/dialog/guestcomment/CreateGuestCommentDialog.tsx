import React, {useRef} from 'react';
import BaseDialog, {applyBaseDialogContent} from "@src/userinterface/pattern/dialog/BaseDialog";
import {css} from "styled-components";
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import Button from "@src/userinterface/component/Button";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import Input from "@src/userinterface/component/Input";
import Textarea from "@src/userinterface/component/Textarea";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";

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
            <Column $gap={48} $alignItems={'stretch'} $ui={css`
                width: 90vw;
                max-width: 436px;
                padding: 44px 36px;
                background: white;
                border-radius: 12px;
                position: relative;
                ${applyBaseDialogContent()};
            `}>
                <Icon size={20} iconType={IconType.CrossLine} onClick={dismiss} ui={css`
                    fill: var(--g-300);
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    cursor: pointer;
                `}/>
                <Column $gap={4} $alignItems={'center'}>
                    <Text type={'p1'} bold={true}>방명록 작성하기</Text>
                    <Text type={'caption1'} ui={css`
                        color: var(--g-400);
                    `}>저희에게 따뜻한 말을 남겨주세요</Text>
                </Column>
                <Column $gap={12} $alignItems={'stretch'}>
                    <Input ref={nameRef} placeholder={'성함'}/>
                    <Input ref={passwordRef} placeholder={'비밀번호 입력'} type={'password'}/>
                    <Textarea ref={commentRef} placeholder={'200자 이내로 작성'} maxLength={200}/>
                </Column>
                <Button text={'방명록 남기기'} onClick={onClickSave}/>
            </Column>
        </BaseDialog>
    );
}

export default CreateGuestCommentDialog;
