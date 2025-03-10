import React, {useState} from 'react';
import {Column} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import View from "@designsystem/core/View";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";
import Button from "@designsystem/component/Button";
import {useNavigate} from "react-router-dom";

interface Props {
    weddingDesign: WeddingDesignPreset;
}

function WeddingStyleCell({weddingDesign}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <Column
            $gap={8}
            $alignItems={'stretch'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <View $ui={css`
                border-radius: 8px;
                overflow: hidden;
                position: relative;
            `}>
                <View $ui={css`
                    aspect-ratio: 9 / 16;
                    background: url("${weddingDesign.img}");
                    background-size: cover;
                    ${isHovered && css`
                        //filter: blur(4px);
                    `};
                    transition: 0.2s filter;
                `}/>
                {isHovered && (
                    <Column $alignItems={'stretch'} $gap={4} $ui={css`
                        width: 144px;
                        position: absolute;
                        bottom: 42px;
                        left: 50%;
                        transform: translateX(-50%);
                    `}>
                        <Button text={'청첩장 만들기'} onClick={() => navigate(`/editor?designId=${weddingDesign.id}`)}/>
                        <Button text={'미리보기'} buttonType={'tonal'} onClick={() => {
                            // todo
                        }}/>
                    </Column>
                )}
            </View>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-900);
            `}>{weddingDesign.name}</Text>
        </Column>
    );
}

export default WeddingStyleCell;
