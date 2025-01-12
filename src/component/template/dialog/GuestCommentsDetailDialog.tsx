import React from 'react';
import styled from "styled-components";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/component/dialog/baseDialog";
import Comment from "@remote/value/Comment";
import {Column} from "@designsystem/component/flexLayout";

interface GuestCommentsDetailDialogProps {
    comments: Comment[];
    dismiss: () => void;
}

function GuestCommentsDetailDialog(
    {
        comments,
        dismiss
    }: GuestCommentsDetailDialogProps
) {
    return (
        <BaseDialog dismiss={dismiss}>
            <S.container>
                <Column
                    gap={12}
                    style={{
                        padding: '32px 30px'
                    }}
                >
                </Column>
            </S.container>
        </BaseDialog>
    );
}

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        ${applyBaseDialogContent()};
    `
}

export default GuestCommentsDetailDialog;