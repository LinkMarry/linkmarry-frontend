import React, {ComponentPropsWithRef, ForwardedRef, forwardRef} from 'react';
import {css, RuleSet} from "styled-components";
import makeText from "@designsystem/foundation/text/TextType";
import CustomStyle from "@designsystem/component/CustomStyle";

interface Props extends ComponentPropsWithRef<'textarea'> {
    customStyle?: RuleSet;
}

function Textarea(
    {
        customStyle,
        ...props
    }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
) {
    return (
        <CustomStyle as={'textarea'} ref={ref} $customStyle={css`
            display: flex;
            min-height: 100px;
            border: 1px solid var(--g-200);
            background: white;
            border-radius: 8px;
            outline: none;
            ${makeText('p5')};
            resize: vertical;
            padding: 12px 16px;
            ${customStyle};
        `} {...props}/>
    );
}

export default forwardRef(Textarea);