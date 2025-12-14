import {type Dispatch, type RefObject, type SetStateAction, useCallback, useEffect, useRef} from 'react';
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const getGridImgWidth = useCallback((): number => {
        let imageWidth = rootRef.current?.getBoundingClientRect().width ?? 0;
        if (gallery.galleryDesign === 'SLIDE') {
            imageWidth += -34 * 2 + 8; // 이미지 너비 - 간격
        }

        return imageWidth;
    }, [gallery.galleryDesign, rootRef]);

    const getScrollPosition = useCallback((): number => {
        if (!scrollContainerRef.current) return 0;
        const scrollContainer = scrollContainerRef.current;

        let scrollPosition = scrollContainer.scrollLeft
        if (gallery.galleryDesign === 'SLIDE') {
            scrollPosition -= 34;
        }
        return scrollPosition;
    }, [gallery.galleryDesign]);

    const handleScroll = useCallback(() => {
        const imageWidth = getGridImgWidth();
        const scrollPosition = getScrollPosition();
        const index = Math.floor(scrollPosition / imageWidth);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    }, [getGridImgWidth, getScrollPosition, setCurrentImageIndex]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        scrollContainerRef.current?.scrollTo({
            left: getGridImgWidth()
        });
        setCurrentImageIndex(0);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
    }, [getGridImgWidth, handleScroll, setCurrentImageIndex]);

    return (
        <BaseDialog dismiss={dismiss}>
            <View ui={cx(
                css`
                    gap: 20px;
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
                    flex-direction: row;
                    padding: 28px;
                `}>
                    <Spacer/>
                    <Icon iconType={'CrossLine'} size={24} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={dismiss}/>
                </View>
                <Spacer/>
                <View ui={cx(
                    css`
                        flex-direction: row;
                        gap: 8px;
                        align-items: center;
                        scroll-snap-type: x mandatory;
                        overflow-x: scroll;
                        overflow-y: hidden;
                    `,
                    hideScrollBarStyle
                )} ref={scrollContainerRef}>
                    {gallery.imgList.map((img, index) => (
                        <SlideImg
                            key={index}
                            src={img}
                            rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                        />
                    ))}
                </View>
                <Spacer/>
                <Indicator
                    imgListLength={gallery.imgList.length}
                    currentImageIndex={currentImageIndex}
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
            flex-direction: row;
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

const SlideImg = styled.img<{
    rootWidth: number,
}>`
    display: flex;
    max-width: ${({rootWidth}) => rootWidth}px;
    min-width: ${({rootWidth}) => rootWidth}px;
    scroll-snap-align: center;
    object-fit: cover;
`;

export default GalleryFullView;
