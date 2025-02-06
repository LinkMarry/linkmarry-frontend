import React from 'react';
import makeText, {TextType, textTypes} from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/icon";
import styled, {css} from "styled-components";
import {allCasesOfEnum} from "@util/enum.util";

function FoundationDemo() {
    return (
        <div>
            {textTypes.map((text) => (
                <Text text={text}>가나다라마바사ABCDEFG</Text>
            ))}
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                {allCasesOfEnum(IconType)
                    .map((icon) => (
                        <Icon iconType={icon} size={48} customStyle={css`
                            fill: gray;
                        `}/>
                    ))}
            </div>
        </div>
    );
}

const Text = styled.div<{ text: TextType }>`
    ${({text}) => makeText(text)};
`;

export default FoundationDemo;