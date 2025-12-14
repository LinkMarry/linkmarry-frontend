import {useState} from 'react';
import Text from "~/userinterface/component/Text";
import {css, cx} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset";
import Button from "~/userinterface/component/Button";
import {useNavigate} from "react-router";
import config from "~/config.ts";
import ClientRendering from "~/ClientRendering.tsx";

interface Props {
    weddingDesign: WeddingDesignPreset;
}

function WeddingStyleCell({weddingDesign}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <View
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ui={css`
                min-width: 0;
                transition: 0.2s transform;
                gap: 8px;

                &:hover {
                    transform: translateY(-8px);
                }
            `}
        >
            <View ui={cx(
                css`
                    flex: 1;
                    border-radius: 8px;
                    overflow: hidden;
                    position: relative;
                    transition: 0.2s box-shadow;
                `,
                isHovered ? css`
                    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08);
                ` : undefined
            )}>
                <View as={'img'} src={weddingDesign.img} ui={css`
                    aspect-ratio: 9 / 16;
                    object-fit: cover;
                `}/>
                {isHovered && (
                    <View ui={css`
                        gap: 4px;
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
                                if (config.dev) {
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
                    </View>
                )}
            </View>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-900);
            `}>{weddingDesign.name}</Text>
        </View>
    );
}

export default WeddingStyleCell;
