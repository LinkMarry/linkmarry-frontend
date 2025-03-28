import React, {Dispatch, RefObject, SetStateAction, useEffect, useRef} from 'react';
import Gallery from "@remote/value/Gallery";
import GalleryDesign from "@remote/enumeration/GalleryDesign";
import {Column, Row} from "@designsystem/core/FlexLayout";
import styled, {css} from "styled-components";
import {hideScrollBar} from "@util/css.util";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import Text from "@designsystem/component/Text";
import BaseDialog, {applyBaseDialogContent} from "@designsystem/pattern/dialog/BaseDialog";
import Spacer from "@designsystem/component/Spacer";

interface Props {
    dismiss: () => void;
    currentImageIndex: number;
    setCurrentImageIndex: Dispatch<SetStateAction<number | undefined>>;
    gallery: Gallery;
    rootRef: RefObject<HTMLDivElement>;
}

const GalleryFullView = ({dismiss, currentImageIndex, setCurrentImageIndex, gallery, rootRef}: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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

        scrollContainerRef.current?.scrollTo({
            left: getGridImgWidth()
        });
        setCurrentImageIndex(0);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BaseDialog dismiss={dismiss}>
            <Column $gap={20} $alignItems={'stretch'} $alignSelf={'stretch'} $ui={css`
                overflow-x: hidden;
                min-width: ${rootRef.current?.getBoundingClientRect().width ?? 0}px;
                max-width: ${rootRef.current?.getBoundingClientRect().width ?? 0}px;
                background: white;
                height: 100dvh;
                ${applyBaseDialogContent()};
            `}>
                <Row $ui={css`
                    padding: 28px;
                `}>
                    <Spacer/>
                    <Icon iconType={IconType.CrossLine} size={24} ui={css`
                        fill: var(--g-500);
                        cursor: pointer;
                    `} onClick={dismiss}/>
                </Row>
                <Spacer/>
                <Row $gap={8} $alignItems={'center'} $ui={css`
                    scroll-snap-type: x mandatory;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    ${hideScrollBar};
                `} ref={scrollContainerRef}>
                    {gallery.imgList.map((img, index) => (
                        <SlideImg
                            key={index}
                            src={img}
                            $rootWidth={rootRef.current?.getBoundingClientRect().width ?? 0}
                        />
                    ))}
                </Row>
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
            </Column>
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
        <Row
            $alignItems={'center'}
            $justifyContent={'space-between'}
            $ui={css`
                padding: 28px 45px;
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
}

const SlideImg = styled.img<{
    $rootWidth: number,
}>`
    display: flex;
    ${({$rootWidth}) => css`
        max-width: ${$rootWidth}px;
        min-width: ${$rootWidth}px;
    `};
    max-height: 517px;
    scroll-snap-align: center;
    object-fit: cover;
`;

export default GalleryFullView;
