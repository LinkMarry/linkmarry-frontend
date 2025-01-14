import React, {RefObject, useEffect, useRef, useState} from 'react';
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import ImgDesign from "@remote/enumeration/ImgDesign";
import styled, {css} from "styled-components";
import {hideScrollBar} from "@util/css.util";

interface GalleryTemplateProps {
    rootRef: RefObject<HTMLDivElement>;
    imgDesign: ImgDesign;
    imgList: string[];
}

function GalleryTemplate(
    {
        rootRef,
        imgDesign,
        imgList
    }: GalleryTemplateProps
) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const containerWidth = rootRef.current?.getBoundingClientRect().width ?? 0;

        const scrollContainer = scrollContainerRef.current;
        const scrollPosition = scrollContainer.scrollLeft - 34;
        const imageWidth = containerWidth - 34 * 2 + 8; // 이미지 너비 + 간격
        const index = Math.floor(scrollPosition / imageWidth);
        console.log(`${scrollPosition}, ${imageWidth}`);
        console.log(index);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return (
        <S.root>
            <Text color={colors.g600} size={20} weight={300}>
                GALLERY
            </Text>
            {imgDesign === ImgDesign.SLIDE ? (
                <S.slideWrapper>
                    <S.scroll ref={scrollContainerRef}>
                        {imgList.map((img, index) => (
                            <S.slideImg
                                key={index}
                                src={img}
                                $rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                            />
                        ))}
                    </S.scroll>
                    <S.indicatorWrapper>
                        {Array.from({length: imgList.length}, (_, index) => index).map((i, index) => (
                            <S.indicator key={index} selected={i === currentImageIndex}/>
                        ))}
                    </S.indicatorWrapper>
                </S.slideWrapper>
            ) : (
                <S.gridWrapper>
                    {imgList.map((img, index) => (
                        <S.gridImg key={index} src={img}/>
                    ))}
                </S.gridWrapper>
            )}
        </S.root>
    );
}

const S = {
    root: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${colors.white};
        padding: 92px 0;
        gap: 40px;
    `,
    gridWrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
        margin: 0 18px;
        gap: 4px;
    `,
    slideWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-self: stretch;
        overflow-x: hidden;
    `,
    scroll: styled.div`
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        gap: 8px;
        ${hideScrollBar};
    `,
    gridImg: styled.img`
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 4px;
    `,
    slideImg: styled.img<{ $rootWidth: number }>`
        display: flex;
        ${({$rootWidth}) => css`
            width: ${$rootWidth - 34 * 2}px;

            &:first-child {
                margin-left: ${$rootWidth - 34}px;
            }

            &:last-child {
                margin-right: ${$rootWidth - 34}px;
            }
        `};
        height: 517px;
        border-radius: 12px;
        scroll-snap-align: center;
        object-fit: cover;
    `,
    indicatorWrapper: styled.div`
        display: flex;
        gap: 8px;
        align-self: center;
    `,
    indicator: styled.span<{ selected: boolean }>`
        display: flex;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        ${({selected}) => css`
            background: ${selected ? colors.black : colors.g200};
        `};
    `
};


export default GalleryTemplate;