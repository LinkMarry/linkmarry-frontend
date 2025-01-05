import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";

export type DashboardPopoverClickType = 'share' | 'copyLink' | 'editLink' | 'guestComment' | 'remove'

interface DashboardPopoverProps {
    onClick: (type: DashboardPopoverClickType) => void;
    dismiss: () => void;
}

function DashboardPopover(
    {
        onClick,
        dismiss
    }: DashboardPopoverProps
) {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (popoverRef.current && !(event.target instanceof Node && popoverRef.current.contains(event.target))) {
                dismiss();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, []);

    return (
        <S.relativeWrapper>
            <S.container ref={popoverRef}>
                <S.item onClick={() => onClick('share')}>
                    <Icon type={IconType.Share} size={12}/>
                    <Text text={'공유'} type={TextType.caption2}/>
                </S.item>
                <S.item onClick={() => onClick('copyLink')}>
                    <Icon type={IconType.Copy} size={12}/>
                    <Text text={'링크복사'} type={TextType.caption2}/>
                </S.item>
                <S.item onClick={() => onClick('editLink')}>
                    <Icon type={IconType.Write} size={12}/>
                    <Text text={'링크 수정'} type={TextType.caption2}/>
                </S.item>
                <S.item onClick={() => onClick('guestComment')}>
                    <Icon type={IconType.Book} size={12}/>
                    <Text text={'방문록 확인'} type={TextType.caption2}/>
                </S.item>
                <S.item onClick={() => onClick('remove')} style={{background: colors.g100}}>
                    <Icon type={IconType.Trash} size={12}/>
                    <Text text={'삭제'} type={TextType.caption2}/>
                </S.item>
            </S.container>
        </S.relativeWrapper>
    );
}

const S = {
    relativeWrapper: styled.div`
        display: inline-block;
        position: relative;
        width: 0;
        height: 0;
    `,
    container: styled.div`
        display: flex;
        position: absolute;
        flex-direction: column;
        width: 100px;
        padding: 10px 0;
        bottom: 120px;
        right: -72px;
        border-radius: 8px;
        background: ${colors.white};
        outline: none;
        border: none;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
        z-index: 1000;
    `,
    item: styled.div`
        display: flex;
        align-items: center;
        padding: 4px 12px;
        gap: 8px;
        cursor: pointer;
    `
}

export default DashboardPopover;