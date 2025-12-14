import {type RefObject, useCallback, useEffect, useRef, useState} from 'react';
import Text from "~/userinterface/component/Text";
import {hideScrollBarStyle} from "~/userinterface/css.util";
import useScrollOnUpdate from "~/hook/useScrollOnUpdate";
import FadeIn from "~/userinterface/specific/fadein/FadeIn";
import type Gallery from "~/infrastructure/network/value/Gallery";
import Icon from "~/userinterface/foundation/Icon";
import View from "~/userinterface/core/View.tsx";
import GalleryFullView from "~/userinterface/specific/wedding/component/gallery/GalleryFullView";
import type {GalleryDesign} from "~/infrastructure/network/enumeration/GalleryDesign.ts";
import {css, cx} from "@linaria/core";
import {styled} from "@linaria/react";
import type {WeddingMode} from "~/userinterface/specific/wedding/WeddingMode.ts";

interface GalleryTemplateProps {
    rootRef: RefObject<HTMLDivElement | null>;
    gallery: Gallery;
    mode: WeddingMode;
}

function GalleryTemplate(
    {
        rootRef,
        gallery,
        mode
    }: GalleryTemplateProps
) {
    const galleryRef = useRef<HTMLDivElement>(null);
    useScrollOnUpdate(galleryRef, [gallery], mode === 'preview');

    const [currentImageIdx, setCurrentImageIdx] = useState<number>();

    return (
        <View ref={galleryRef} ui={css`
            gap: 40px;
            align-items: center;
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
            {(gallery.galleryDesign === 'SLIDE' || gallery.galleryDesign === 'HIGHLIGHT') ? (
                <GallerySlide
                    rootRef={rootRef}
                    gallery={gallery}
                    onClickImage={index => setCurrentImageIdx(index)}
                />
            ) : (
                <View ui={css`
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3열 구성 */
                    margin: 0 18px;
                    gap: 4px;
                `}>
                    {gallery.imgList.map((img, index) => (
                        <View as={'img'} ui={css`
                            width: 100%;
                            aspect-ratio: 1;
                            object-fit: cover;
                            object-position: top;
                            border-radius: 4px;
                        `} key={index} src={img} onClick={() => setCurrentImageIdx(index)}/>
                    ))}
                </View>
            )}
        </View>
    );
}

const GallerySlide = (
    {
        rootRef,
        gallery,
        onClickImage
    }: {
        rootRef: RefObject<HTMLDivElement | null>;
        gallery: Gallery;
        onClickImage: (index: number) => void;
    }
) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getGridImgWidth = useCallback(() => {
        let imageWidth = rootRef.current?.getBoundingClientRect().width ?? 0;

        switch (gallery.galleryDesign) {
            case 'SLIDE':
                imageWidth += -34 * 2 + 8; // image width - container horizontal padding + gap
                break;
            case 'HIGHLIGHT':
                imageWidth += 8; // image width + gap
                break;
            default:
                break;
        }

        return imageWidth;
    }, [gallery.galleryDesign, rootRef]);

    const getScrollPosition = useCallback(() => {
        if (!scrollContainerRef.current) return null;
        const scrollContainer = scrollContainerRef.current;
        return scrollContainer.scrollLeft;
    }, []);

    const handleScroll = useCallback(() => {
        const imageWidth = getGridImgWidth();
        const scrollPosition = getScrollPosition();

        if (!scrollPosition) return;

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

    const rootWidth = rootRef.current?.getBoundingClientRect().width;

    return (
        <View ui={css`
            gap: 20px;
            align-self: stretch;
            overflow-x: hidden;
        `}>
            <View ui={cx(
                css`
                    flex-direction: row;
                    gap: 8px;
                    scroll-snap-type: x mandatory;
                    overflow-x: scroll;
                    overflow-y: hidden;
                `,
                hideScrollBarStyle
            )} ref={scrollContainerRef}>
                {gallery.imgList.map((img, index) => (
                    <View
                        as={'img'}
                        key={index}
                        ui={cx(
                            css`
                                flex-direction: row;
                                height: 517px;
                                scroll-snap-align: center;
                                object-fit: cover;
                                object-position: top;
                            `,
                            gallery.galleryDesign === 'SLIDE' ? css`
                                &:first-child {
                                    margin-left: 34px;
                                }

                                &:last-child {
                                    margin-right: 34px;
                                }

                                border-radius: 12px;
                            ` : undefined
                        )}
                        style={gallery.galleryDesign === 'SLIDE' ? {
                            maxWidth: rootWidth && rootWidth - 34 * 2,
                            minWidth: rootWidth && rootWidth - 34 * 2
                        } : {
                            maxWidth: rootWidth,
                            minWidth: rootWidth
                        }}
                        src={img}
                        onClick={() => onClickImage(index)}
                    />
                ))}
            </View>
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
                                scrollContainerRef.current?.scrollTo({
                                    left
                                });
                                setCurrentImageIndex(currentImageIndex + 1);
                            }
                            break;
                    }
                }}
            />
        </View>
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
        case 'SLIDE':
            return <View ui={css`
                flex-direction: row;
                gap: 8px;
                align-self: center;
            `}>
                {Array.from({length: imgListLength}, (_, index) => index).map((i, index) => (
                    <View key={index} ui={cx(
                        css`
                            flex-direction: row;
                            width: 8px;
                            height: 8px;
                            border-radius: 4px;
                        `,
                        i === currentImageIndex ? css`
                            background: black;
                        ` : css`
                            background: var(--g-200);
                        `
                    )}/>
                ))}
            </View>;
        case 'HIGHLIGHT':
            return (
                <View ui={css`
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 45px;
                `}>
                    <Icon iconType={'ExpandArrow'} size={24} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={() => {
                        onClick('moveLeft');
                    }}/>
                    <Text size={14} weight={300}>{currentImageIndex + 1}/{imgListLength}</Text>
                    <Icon iconType={'ExpandArrow'} size={24} ui={css`
                        rotate: 180deg;
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={() => {
                        onClick('moveRight');
                    }}/>
                </View>
            );
        case 'GRID':
            return null;
    }
}


export default GalleryTemplate;
