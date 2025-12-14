import {type PropsWithChildren} from 'react';
import {styled} from "@linaria/react";

interface Props extends PropsWithChildren {
    content: React.ReactNode;
}

function ToolTip(
    {
        content,
        children
    }: Props
) {
    return (
        <ToolTipStyle>
            {children}
            <ContentStyle>
                {content}
            </ContentStyle>
        </ToolTipStyle>
    );
}

const ContentStyle = styled.span`
    display: flex;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    padding: 8px 12px;
    visibility: hidden;
    background: white;
    color: var(--g-600);
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    word-break: keep-all;
    white-space: nowrap;
`;

const ToolTipStyle = styled.div`
    position: relative;
    display: inline-block;

    &:hover ${ContentStyle} {
        visibility: visible;
        opacity: 1;
    }
`;


export default ToolTip;
