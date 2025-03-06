import React, {useState} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import View from "@designsystem/core/View";
import Divider from "@designsystem/component/Divider";
import Button from "@designsystem/component/Button";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@util/css.util";
import Spacer from "@designsystem/component/Spacer";
import Popover from "@designsystem/pattern/Popover";
import useResponsive from "@hook/useResponsive";

function MyPageWeddingPage() {
    return (
        <Column gap={24} flex={1} alignment={'stretch'}>
            <Text type={'h5'} bold={true}>모바일 청첩장</Text>
            <Column alignment={'stretch'} gap={16}>
                <WeddingCell/>
                <WeddingCell/>
                <WeddingCell/>
                <WeddingCell/>
                <WeddingCell/>
            </Column>
        </Column>
    );
}

function WeddingCell() {
    const [openDetailPopover, setOpenDetailPopover] = useState(false);
    const {deviceSize} = useResponsive();

    return (
        <Row gap={16} alignment={'stretch'} ui={css`
            height: 360px;
            ${deviceSize === "mobile" && css`
                height: 144px;
            `};
        `}>
            <View ui={css`
                width: calc(360px * 9 / 16);
                ${deviceSize === "mobile" && css`
                    width: calc(144px * 9 / 16);
                `};
                background: var(--g-100);
                border-radius: 12px;
            `}/>
            <Column gap={24} alignment={'stretch'} flex={1}>
                {/*header*/}
                <Column gap={8} alignment={'stretch'}>
                    <Row gap={8} alignment={'flex-end'}>
                        <Column flex={1}>
                            <Text type={'p1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>Title</Text>
                            <Text type={'caption2'} ui={css`
                                color: var(--g-500);
                            `}>https://linkmarry.com/wedding/temp-url</Text>
                        </Column>
                        <Row gap={8} alignment={'center'}>
                            {deviceSize === 'desktop' && (
                                <>
                                    <Button text={'수정'} size={'medium'} buttonType={'outlined'}/>
                                    <Button text={'방명록 확인'} size={'medium'}/>
                                </>
                            )}
                            <View ui={css`
                                position: relative;
                            `}>
                                <Column
                                    ui={css`
                                        align-items: center;
                                        padding: 4px;
                                        border-radius: 6px;
                                        ${makeInteractionEffect('strong')};
                                    `}
                                    onClick={() => setOpenDetailPopover(true)}
                                >
                                    <Icon iconType={IconType.Detail} width={24} height={24} ui={css`
                                        fill: var(--g-500);
                                    `}/>
                                </Column>
                                {openDetailPopover && (
                                    <Popover
                                        items={[
                                            ...(deviceSize === 'mobile' ? [
                                                {
                                                    icon: IconType.PenLine,
                                                    text: '청첩장 수정',
                                                    onClick: () => {
                                                    }
                                                },
                                                {
                                                    icon: IconType.Envelope,
                                                    text: '방명록 보기',
                                                    onClick: () => {
                                                    }
                                                }
                                            ] : []),
                                            {
                                                icon: IconType.Link,
                                                text: '링크 수정',
                                                onClick: () => {
                                                }
                                            },
                                            {
                                                icon: IconType.Trash,
                                                text: '청첩장 삭제',
                                                type: 'destructive',
                                                onClick: () => {
                                                }
                                            }
                                        ]}
                                        dismiss={() => setOpenDetailPopover(false)}
                                        ui={css`
                                            right: 0;
                                        `}
                                    />
                                )}
                            </View>
                        </Row>
                    </Row>
                    {deviceSize === 'desktop' && (
                        <Divider/>
                    )}
                </Column>
                {/*content*/}
                {deviceSize === 'desktop' && (
                    <Row gap={16} flex={1} alignment={'stretch'} ui={css`
                        min-height: 0;
                    `}>
                        {/*방명록 미리보기*/}
                        <Column gap={8} alignment={'stretch'} flex={1}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-400);
                            `}>방명록 미리보기</Text>
                            <Column gap={8} alignment={'stretch'} flex={1} ui={css`
                                min-height: 0;
                                overflow-y: scroll;
                                ${hideScrollBar};
                            `}>
                                <CommentCell/>
                                <CommentCell/>
                                <CommentCell/>
                            </Column>
                        </Column>

                        {/*통계*/}
                        <Column gap={8} alignment={'stretch'} flex={1}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-400);
                            `}>통계</Text>
                            <Column gap={8} alignment={'stretch'} flex={1} ui={css`
                                min-height: 0;
                                overflow-y: scroll;
                                ${hideScrollBar};
                            `}>
                                <StatisticsCell/>
                                <StatisticsCell/>
                                <StatisticsCell/>
                            </Column>
                        </Column>
                    </Row>
                )}
            </Column>
        </Row>
    )
}

function CommentCell() {
    return (
        <Column alignment={'stretch'}>
            <Row gap={4} alignment={'flex-end'}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-600);
                `}>Name</Text>
                <Text type={'caption1'} ui={css`
                    color: var(--g-400);
                `}>Time ago</Text>
            </Row>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
                word-break: break-word;
            `}>ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</Text>
        </Column>
    );
}

function StatisticsCell() {
    return (
        <Row>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>Title</Text>
            <Spacer/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-600);
            `}>Value</Text>
        </Row>
    );
}

export default MyPageWeddingPage;
