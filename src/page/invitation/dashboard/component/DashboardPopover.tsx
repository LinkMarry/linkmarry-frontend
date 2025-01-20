import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import colors from "@designsystem/foundation/colors";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Text from "@designsystem/component/text";

export type DashboardPopoverClickType = 'share' | 'copyLink' | 'editLink' | 'guestComment' | 'remove'

interface DashboardPopoverProps {
    onClick: (type: DashboardPopoverClickType) => Promise<void>;
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
                    <Icon type={IconType.Share} size={16}/>
                    <Text type={'caption1'}>공유</Text>
                </S.item>
                <S.item onClick={() => onClick('copyLink')}>
                    <Icon type={IconType.Copy} size={16}/>
                    <Text type={'caption1'}>링크 복사</Text>
                </S.item>
                <S.item onClick={() => onClick('editLink')}>
                    <Icon type={IconType.Write} size={16}/>
                    <Text type={'caption1'}>링크 수정</Text>
                </S.item>
                <S.item onClick={() => onClick('guestComment')}>
                    <Icon type={IconType.Book} size={16}/>
                    <Text type={'caption1'}>방명록 확인</Text>
                </S.item>
                <S.item onClick={() => onClick('remove')}>
                    <Icon type={IconType.Trash} size={16}/>
                    <Text type={'caption1'}>삭제</Text>
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
        width: 144px;
        padding: 8px 0;
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
        padding: 6px 16px;
        gap: 8px;
        cursor: pointer;
        &:hover {
            background: ${colors.g100};
        }
        transition: 0.1s background ease-out;
    `
}

export default DashboardPopover;