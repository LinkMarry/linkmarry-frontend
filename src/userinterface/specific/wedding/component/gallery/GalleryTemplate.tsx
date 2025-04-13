import React, {RefObject, useCallback, useEffect, useRef, useState} from 'react';
import Text from "@src/userinterface/component/Text";
import GalleryDesign from "@src/infrastructure/network/enumeration/GalleryDesign";
import styled, {css} from "styled-components";
import {hideScrollBar} from "@src/shared/css.util";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import useScrollOnUpdate from "@hook/useScrollOnUpdate";
import FadeIn from "@src/userinterface/specific/fadein/FadeIn";
import Gallery from "@src/infrastructure/network/value/Gallery";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import View from "@src/userinterface/core/View";
import GalleryFullView from "@src/userinterface/specific/wedding/component/gallery/GalleryFullView";

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

    const [currentImageIdx, setCurrentImageIdx] = useState<number>();

    return (
        <Column ref={galleryRef} $alignItems={'center'} $gap={40} $ui={css`
            background: white;
            padding: 92px 0;
        `}>
            {currentImageIdx !== undefined && (
                <GalleryFullView
                    dismiss={() => setCurrentImageIdx(undefined)}
                    currentImageIndex={currentImageIdx}
                    setCurrentImageIndex={setCurrentImageIdx}
                    gallery={gallery}
                    rootRef={rootRef}
                />
            )}
            <FadeIn>
                <Text size={20} weight={300} ui={css`
                    color: var(--g-600);
                `}>{gallery.galleryTitle}</Text>
            </FadeIn>
            {(gallery.galleryDesign === GalleryDesign.SLIDE || gallery.galleryDesign === GalleryDesign.HIGHLIGHT) ? (
                <GallerySlide
                    rootRef={rootRef}
                    gallery={gallery}
                    onClickImage={index => setCurrentImageIdx(index)}
                />
            ) : (
                <View $ui={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
                    margin: 0 18px;
                    gap: 4px;
                `}>
                    {gallery.imgList.map((img, index) => (
                        <View as={'img'} $ui={css`
                            width: 100%;
                            aspect-ratio: 1;
                            object-fit: cover;
                            border-radius: 4px;
                        `} key={index} src={img} onClick={() => setCurrentImageIdx(index)}/>
                    ))}
                </View>
            )}
        </Column>
    );
}

const GallerySlide = (
    {
        rootRef,
        gallery,
        onClickImage
    }: {
        rootRef: RefObject<HTMLDivElement>;
        gallery: Gallery;
        onClickImage: (index: number) => void;
    }
) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getGridImgWidth = useCallback(() => {
        let imageWidth = rootRef.current?.getBoundingClientRect().width ?? 0;
        if (gallery.galleryDesign === GalleryDesign.SLIDE) {
            imageWidth += -34 * 2 + 8; // 이미지 너비 - 간격
        }

        return imageWidth;
    }, [gallery.galleryDesign, rootRef]);

    const getScrollPosition = useCallback(() => {
        if (!scrollContainerRef.current) return 0;
        const scrollContainer = scrollContainerRef.current;
        return scrollContainer.scrollLeft;
    }, []);

    const handleScroll = useCallback(() => {
        const imageWidth = getGridImgWidth();
        const scrollPosition = getScrollPosition();
        const index = Math.floor(scrollPosition / imageWidth);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    }, [getGridImgWidth, getScrollPosition]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        scrollContainerRef.current?.scrollTo({
            left: 0,
        });
    }, [gallery.galleryDesign, getGridImgWidth]);

    return (
        <Column $gap={20} $alignItems={'stretch'} $alignSelf={'stretch'} $ui={css`
            overflow-x: hidden;
        `}>
            <Row $gap={8} $ui={css`
                scroll-snap-type: x mandatory;
                overflow-x: scroll;
                overflow-y: hidden;
                ${hideScrollBar};
            `} ref={scrollContainerRef}>
                {gallery.imgList.map((img, index) => (
                    <S.slideImg
                        key={index}
                        src={img}
                        $galleryDesign={gallery.galleryDesign}
                        $rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                        onClick={() => onClickImage(index)}
                    />
                ))}
            </Row>
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
        </Column>
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
    slideImg: styled.img<{
        $rootWidth: number,
        $galleryDesign: GalleryDesign;
    }>`
        display: flex;
        ${({$rootWidth, $galleryDesign}) => $galleryDesign === GalleryDesign.SLIDE ? css`
            max-width: ${$rootWidth - 34 * 2}px;
            min-width: ${$rootWidth - 34 * 2}px;

            &:first-child {
                margin-left: 34px;
            }

            &:last-child {
                margin-right: 34px;
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
