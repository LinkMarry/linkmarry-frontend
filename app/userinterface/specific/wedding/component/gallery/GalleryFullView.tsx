import {type Dispatch, type RefObject, type SetStateAction, useCallback, useEffect, useRef, useState} from 'react';
import type Gallery from "~/infrastructure/network/value/Gallery";
import {hideScrollBarStyle} from "~/userinterface/css.util";
import Icon from "~/userinterface/foundation/Icon";
import Text from "~/userinterface/component/Text";
import BaseDialog from "~/userinterface/pattern/dialog/BaseDialog";
import Spacer from "~/userinterface/component/Spacer";
import {baseDialogContentStyle} from "~/userinterface/pattern/dialog/baseDialogContentStyle.ts";
import View from "~/userinterface/core/View.tsx";
import {css, cx} from "@linaria/core";
import {styled} from "@linaria/react";

interface Props {
    dismiss: () => void;
    currentImageIndex: number;
    setCurrentImageIndex: Dispatch<SetStateAction<number | undefined>>;
    gallery: Gallery;
    rootRef: RefObject<HTMLDivElement | null>;
}

const GalleryFullView = ({dismiss, currentImageIndex, setCurrentImageIndex, gallery, rootRef}: Props) => {
    const [initialCurrentImageIndex] = useState(currentImageIndex);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getGridImgWidth = useCallback((): number => {
        return rootRef.current?.getBoundingClientRect().width ?? 0;
    }, [rootRef]);


    const handleScroll = useCallback(() => {
        const getScrollPosition = () => {
            if (!scrollContainerRef.current) return null;
            const scrollContainer = scrollContainerRef.current;

            return scrollContainer.scrollLeft;
        };

        const imageWidth = getGridImgWidth();
        const scrollPosition = getScrollPosition();

        if (!scrollPosition) return;

        const index = Math.floor(scrollPosition / imageWidth);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    }, [getGridImgWidth, setCurrentImageIndex]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        scrollContainerRef.current?.scrollTo({
            left: getGridImgWidth() * initialCurrentImageIndex
        });

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
    }, [initialCurrentImageIndex, getGridImgWidth, handleScroll]);

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    align-self: stretch;
                    overflow-x: hidden;
                    background: white;
                    height: 100dvh;
                `,
                baseDialogContentStyle
            )} style={{
                minWidth: rootRef.current?.getBoundingClientRect().width,
                maxWidth: rootRef.current?.getBoundingClientRect().width
            }}>
                <View ui={css`
                    flex-direction: row !important;
                    padding: 28px;
                `}>
                    <Spacer/>
                    <Icon iconType={'CrossLine'} size={24} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={dismiss}/>
                </View>
                <View ui={cx(
                    css`
                        flex: 1;
                        flex-direction: row !important;
                        align-items: center;
                        scroll-snap-type: x mandatory;
                        overflow-x: scroll;
                        overflow-y: hidden !important;
                        overscroll-behavior: contain;
                        touch-action: pan-x;
                    `,
                    hideScrollBarStyle
                )} ref={scrollContainerRef}>
                    {gallery.imgList.map((img, index) => (
                        <Slide
                            key={index}
                            src={img}
                            rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                        />
                    ))}
                </View>
                <Indicator
                    imgListLength={gallery.imgList.length}
                    currentImageIndex={currentImageIndex}
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
        </BaseDialog>
    );
};


function Indicator(
    {
        imgListLength,
        currentImageIndex,
        onClick,
    }: {
        imgListLength: number;
        currentImageIndex: number;
        onClick: (type: 'moveLeft' | 'moveRight') => void;
    }
) {
    return (
        <View ui={css`
            flex-direction: row !important;
            align-items: center;
            justify-content: space-between;
            padding: 28px 45px;
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
}

const Slide = (
    {
        src,
        rootWidth,
    }: {
        src: string;
        rootWidth: number;
    }
) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [alignTop, setAlignTop] = useState(false);

    useEffect(() => {
        if (!imgRef.current || !wrapperRef.current) return;

        const imgHeight = imgRef.current.naturalHeight;
        const imgWidth = imgRef.current.naturalWidth;
        const wrapperHeight = wrapperRef.current.getBoundingClientRect().height;

        const renderedHeight = (imgHeight / imgWidth) * rootWidth;

        setAlignTop(renderedHeight > wrapperHeight);
    }, [rootWidth]);

    return (
        <SlideWrapper
            ref={wrapperRef}
            style={{
                minWidth: rootWidth,
                maxWidth: rootWidth,
                alignItems: alignTop ? 'flex-start' : 'center',
            }}
        >
            <SlideImg ref={imgRef} src={src}/>
        </SlideWrapper>
    );
};

const SlideWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    scroll-snap-align: center;
`;

const SlideImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export default GalleryFullView;