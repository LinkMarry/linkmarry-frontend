import React, {ForwardedRef, forwardRef, TextareaHTMLAttributes} from 'react';
import styled from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea(
    {
        ...props
    }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <TextareaStyle ref={ref} {...props}/>
    );
}

const TextareaStyle = styled.textarea`
    display: flex;
    min-height: 100px;
    border: 1px solid var(--g-200);
    background: white;
    border-radius: 8px;
    outline: none;
    ${makeText('p5')};
    resize: vertical;
    padding: 12px 16px;
`;

export default forwardRef(Textarea);