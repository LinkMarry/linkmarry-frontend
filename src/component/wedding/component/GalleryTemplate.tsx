import React, {RefObject, useEffect, useRef, useState} from 'react';
import Text from "@designsystem/component/Text";
import GalleryDesign from "@remote/enumeration/GalleryDesign";
import styled, {css} from "styled-components";
import {hideScrollBar} from "@util/css.util";
import {Column, Row} from "@designsystem/core/FlexLayout";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import FadeIn from "@src/component/fadein/FadeIn";
import Gallery from "@remote/value/Gallery";
import Icon, {IconType} from "@designsystem/foundation/Icon";

interface GalleryTemplateProps {
    rootRef: RefObject<HTMLDivElement>;
    gallery: Gallery;
}

function GalleryTemplate(
    {
        rootRef,
        gallery
    }: GalleryTemplateProps
) {
    const galleryRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(galleryRef, [gallery]);

    return (
        <Column ref={galleryRef} $alignItems={'center'} $gap={40} $ui={css`
            background: white;
            padding: 92px 0;
        `}>
            <FadeIn>
                <Text size={20} weight={300} ui={css`
                    color: var(--g-600);
                `}>{gallery.galleryTitle}</Text>
            </FadeIn>
            {(gallery.galleryDesign === GalleryDesign.SLIDE || gallery.galleryDesign === GalleryDesign.HIGHLIGHT) ? (
                <GallerySlide
                    rootRef={rootRef}
                    gallery={gallery}
                />
            ) : (
                <S.gridWrapper>
                    {gallery.imgList.map((img, index) => (
                        <S.gridImg key={index} src={img}/>
                    ))}
                </S.gridWrapper>
            )}
        </Column>
    );
}

function GallerySlide(
    {
        rootRef,
        gallery
    }: {
        rootRef: RefObject<HTMLDivElement>;
        gallery: Gallery;
    }
) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적

    const galleryRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useScrollOnUpdate(galleryRef, [gallery.imgList]);

    const getGridImgWidth = (): number => {
        let imageWidth = rootRef.current?.getBoundingClientRect().width ?? 0;
        if (gallery.galleryDesign === GalleryDesign.SLIDE) {
            imageWidth += -34 * 2 + 8; // 이미지 너비 - 간격
        }

        return imageWidth;
    };

    const getScrollPosition = (): number => {
        if (!scrollContainerRef.current) return 0;
        const scrollContainer = scrollContainerRef.current;

        let scrollPosition = scrollContainer.scrollLeft
        if (gallery.galleryDesign === GalleryDesign.SLIDE) {
            scrollPosition -= 34;
        }
        return scrollPosition;
    };

    const handleScroll = () => {
        const imageWidth = getGridImgWidth();
        const scrollPosition = getScrollPosition();
        const index = Math.floor(scrollPosition / imageWidth);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.slideWrapper ref={galleryRef}>
            <S.scroll ref={scrollContainerRef}>
                {gallery.imgList.map((img, index) => (
                    <S.slideImg
                        key={index}
                        src={img}
                        $galleryDesign={gallery.galleryDesign}
                        $rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                    />
                ))}
            </S.scroll>
            <GalleryStyleIndicator
                imgListLength={gallery.imgList.length}
                currentImageIndex={currentImageIndex}
                galleryDesign={gallery.galleryDesign}
                onClick={type => {
                    switch (type) {
                        case 'moveLeft':
                            if (currentImageIndex > 0) {
                                const imgWidth = getGridImgWidth();
                                const left = imgWidth * (currentImageIndex - 1);
                                // console.log(left)
                                scrollContainerRef.current?.scrollTo({
                                    left
                                });
                                setCurrentImageIndex(currentImageIndex - 1);
                            }
                            break;
                        case 'moveRight':
                            if (currentImageIndex < gallery.imgList.length - 1) {
                                const imgWidth = getGridImgWidth();
                                const left = imgWidth * (currentImageIndex + 1);
                                // console.log(left)
                                scrollContainerRef.current?.scrollTo({
                                    left
                                });
                                setCurrentImageIndex(currentImageIndex + 1);
                            }
                            break;
                    }
                }}
            />
        </S.slideWrapper>
    );
}

function GalleryStyleIndicator(
    {
        imgListLength,
        currentImageIndex,
        galleryDesign,
        onClick,
    }: {
        imgListLength: number;
        currentImageIndex: number;
        galleryDesign: GalleryDesign;
        onClick: (type: 'moveLeft' | 'moveRight') => void;
    }
) {
    switch (galleryDesign) {
        case GalleryDesign.SLIDE:
            return <Row $gap={8} $alignSelf={'center'}>
                {Array.from({length: imgListLength}, (_, index) => index).map((i, index) => (
                    <S.indicator key={index} selected={i === currentImageIndex}/>
                ))}
            </Row>;
        case GalleryDesign.HIGHLIGHT:
            return (
                <Row
                    $alignItems={'center'}
                    $justifyContent={'space-between'}
                    $ui={css`
                        padding: 0 45px;
                    `}
                >
                    <Icon iconType={IconType.ExpandArrow} size={24} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={() => {
                        onClick('moveLeft');
                    }}/>
                    <Text size={14} weight={300}>{currentImageIndex + 1}/{imgListLength}</Text>
                    <Icon iconType={IconType.ExpandArrow} size={24} ui={css`
                        rotate: 180deg;
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={() => {
                        onClick('moveRight');
                    }}/>
                </Row>
            );
        case GalleryDesign.GRID:
            return null;
    }
}

const S = {
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
    scroll: styled.div/*<{ $slideStyle: GallerySlideStyle }>*/`
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
    slideImg: styled.img<{
        $rootWidth: number,
        $galleryDesign: GalleryDesign;
    }>`
        display: flex;
        ${({$rootWidth, $galleryDesign}) => $galleryDesign === GalleryDesign.SLIDE ? css`
            max-width: ${$rootWidth - 34 * 2}px;
            min-width: ${$rootWidth - 34 * 2}px;

            &:first-child {
                margin-left: ${$rootWidth - 34}px;
            }

            &:last-child {
                margin-right: ${$rootWidth - 34}px;
            }

            border-radius: 12px;
        ` : css`
            max-width: ${$rootWidth}px;
            min-width: ${$rootWidth}px;
        `};
        height: 517px;
        scroll-snap-align: center;
        object-fit: cover;
    `,
    indicator: styled.span<{ selected: boolean }>`
        display: flex;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        ${({selected}) => selected ? css`
            background: black;
        ` : css`
            background: var(--g-200);
        `};
    `
};


export default GalleryTemplate;
