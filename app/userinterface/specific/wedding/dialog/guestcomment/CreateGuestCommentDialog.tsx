import {useRef} from 'react';
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import Button from "~/userinterface/component/Button";
import weddingApi from "~/infrastructure/network/api/wedding-api";
import Input from "~/userinterface/component/Input";
import Textarea from "~/userinterface/component/Textarea";
import Icon from "~/userinterface/foundation/Icon";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";

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
        } catch {
            alert('방명록 작성 실패');
        }
    };

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    gap: 48px;
                    width: 90vw;
                    max-width: 436px;
                    padding: 44px 36px;
                    background: white;
                    border-radius: 12px;
                    position: relative;
                `,
                baseDialogContentStyle
            )}>
                <Icon size={20} iconType={'CrossLine'} onClick={dismiss} ui={css`
                    fill: var(--g-300);
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    cursor: pointer;
                `}/>
                <View ui={css`
                    gap: 4px;
                    align-items: center;
                `}>
                    <Text type={'p1'} bold={true}>방명록 작성하기</Text>
                    <Text type={'caption1'} ui={css`
                        color: var(--g-400);
                    `}>저희에게 따뜻한 말을 남겨주세요</Text>
                </View>
                <View ui={css`
                    gap: 12px;
                `}>
                    <Input ref={nameRef} placeholder={'성함'}/>
                    <Input ref={passwordRef} placeholder={'비밀번호 입력'} type={'password'}/>
                    <Textarea ref={commentRef} placeholder={'200자 이내로 작성'} maxLength={200}/>
                </View>
                <Button text={'방명록 남기기'} onClick={onClickSave}/>
            </View>
        </BaseDialog>
    );
}

export default CreateGuestCommentDialog;
