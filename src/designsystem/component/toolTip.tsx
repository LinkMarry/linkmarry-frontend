import React from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import makeText from "@designsystem/foundation/text/textType";

interface ToolTipProps {
    content: React.ReactNode;
    children?: React.ReactNode;
}

function ToolTip(
    {
        content,
        children
    }: ToolTipProps
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
    background: ${colors.white};
    color: ${colors.g600};
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    word-break: keep-all;
    white-space: nowrap;
    ${makeText('p5')};
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