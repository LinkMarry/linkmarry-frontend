import {useRef} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Button from "~/userinterface/component/Button";
import weddingApi from "~/infrastructure/network/api/wedding-api";
import type Comment from "~/infrastructure/network/value/Comment";
import {isAxiosError} from "axios";
import Input from "~/userinterface/component/Input";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";

interface RemoveGuestCommentDialogProps {
    url: string;
    selectedGuestComment: Comment;
    dismiss: () => void;
    onRefresh: () => void;
}

function RemoveGuestCommentDialog(
    {
        url,
        selectedGuestComment,
        dismiss,
        onRefresh
    }: RemoveGuestCommentDialogProps
) {
    const passwordRef = useRef<HTMLInputElement>(null);

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
            onRefresh();
            dismiss();
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
            <View ui={cx(
                css`
                    gap: 48px;
                    width: 80vw;
                    max-width: 436px;
                    padding: 44px 36px;
                    background: white;
                    border-radius: 12px;
                `,
                baseDialogContentStyle
            )}>
                <View ui={css`
                    gap: 4px;
                    align-items: center;
                `}>
                    <Text type={'p1'} bold={true}>글 삭제하기</Text>
                    <Text type={'caption1'} ui={css`
                        color: var(--g-400);
                    `}>관리자와 글 작성자만 글을 삭제할 수 있습니다</Text>
                </View>
                <Input ref={passwordRef} placeholder={'비밀번호 입력'}/>
                <Button text={'삭제'} buttonType={'tonal'} onClick={onClickRemove}/>
            </View>
        </BaseDialog>
    );
}

export default RemoveGuestCommentDialog;
