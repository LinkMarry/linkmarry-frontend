import React, {ComponentProps} from 'react';
import BaseChat from "@src/ai/BaseChat";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";

interface Props extends ComponentProps<typeof BaseChat> {
    message: string;
}

const Chat = ({message, ...props}: Props) => {
    return (
        <BaseChat ui={css`
            ${props.type === 'user' ? css`
                align-self: flex-end;
            ` : css`
                align-self: flex-start;
            `};
        `} {...props}>
            <Text type={'p2'} ui={css`
                word-break: break-all;
                overflow-wrap: break-word;
                white-space: pre-wrap;
            `}>{message}</Text>
        </BaseChat>
    );
};

export default Chat;
