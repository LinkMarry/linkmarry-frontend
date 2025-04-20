import React, {useState} from 'react';
import {Column} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";
import Button from "@src/userinterface/component/Button";
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
            $ui={css`
                &:hover {
                    transform: translateY(-8px);
                }

                transition: 0.2s transform;
            `}
        >
            <View $ui={css`
                border-radius: 8px;
                overflow: hidden;
                position: relative;
                ${isHovered && css`
                    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08);
                `};
                transition: 0.2s box-shadow;
            `}>
                <View $ui={css`
                    aspect-ratio: 9 / 16;
                    background-image: url("${weddingDesign.img}");
                    background-size: cover;
                    background-position: center;
                `}/>
                {isHovered && (
                    <Column $alignItems={'stretch'} $gap={4} $ui={css`
                        width: 144px;
                        position: absolute;
                        bottom: 42px;
                        left: 50%;
                        transform: translateX(-50%);
                    `}>
                        <Button
                            buttonType={'filled'}
                            text={'청첩장 만들기'}
                            onClick={() => {
                                if (process.env.NODE_ENV === 'development') {
                                    navigate('/ai-custom');
                                } else {
                                    navigate(`/editor?designId=${weddingDesign.id}`);
                                }
                            }}
                            ui={css`
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
                            `}
                        />
                        <Button text={'미리보기'} buttonType={'tonal'} onClick={() => {
                            navigate(`/sample?designName=${weddingDesign.name}`);
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
