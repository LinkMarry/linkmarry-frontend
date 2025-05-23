import React, {useEffect, useState} from 'react';
import {css} from "styled-components";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";
import Divider from "@src/userinterface/component/Divider";
import Button from "@src/userinterface/component/Button";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import {hideScrollBar, makeInteractionEffect} from "@src/userinterface/css.util";
import Spacer from "@src/userinterface/component/Spacer";
import Popover from "@src/userinterface/pattern/Popover";
import useResponsive from "@src/hook/useResponsive";
import weddingApi from "@src/infrastructure/network/api/wedding-api";
import Loading from "@src/userinterface/specific/Loading";
import WeddingInfo from "@src/infrastructure/network/value/WeddingInfo";
import WeddingStatistics from "@src/infrastructure/network/value/WeddingStatistics";
import Comment from "@src/infrastructure/network/value/Comment";
import {getTimeAgo} from "@src/shared/date-util";
import {useNavigate} from "react-router-dom";
import Dialog from "@src/userinterface/pattern/dialog/Dialog";
import RemoveWatermarkDialog from "@src/userinterface/specific/dialog/RemoveWatermarkDialog";
import {getWeddingUrl} from "@src/shared/string-util";
import useMyPageWedding from "@src/feature/mypage/index/wedding/useMyPageWedding";

function MyPageWeddingPage() {
    const {
        showRemoveWeddingDialog,
        setShowRemoveWeddingDialog,
        weddings,
        removeWedding,
        setSelectedWedding
    } = useMyPageWedding();

    return (
        <Column $gap={24} $flex={1} $alignItems={'stretch'} $ui={css`
            min-width: 0;
        `}>
            {showRemoveWeddingDialog && (
                <Dialog
                    title={'정말 청첩장을\n삭제하시겠습니까?'}
                    description={'모든 청첩장 정보가 삭제됩니다.'}
                    dismiss={() => setShowRemoveWeddingDialog(false)}
                    dismissButtonProps={{
                        text: '취소'
                    }}
                    confirmButtonProps={{
                        text: '삭제',
                        onClick: removeWedding
                    }}
                />
            )}
            <Text type={'h5'} bold={true}>모바일 청첩장</Text>
            <Column $alignItems={'stretch'} $gap={16}>
                {weddings ? weddings.weddingInfo.map(wedding => (
                    <WeddingCell key={wedding.url} weddingInfo={wedding} onRemoveWedding={() => {
                        setSelectedWedding(wedding);
                        setShowRemoveWeddingDialog(true);
                    }}/>
                )) : (
                    <Loading ui={css`
                        margin-top: 24px;
                        margin-bottom: 500px;
                    `}/>
                )}
            </Column>
            <Spacer h={32}/>
        </Column>
    );
}

function WeddingCell({weddingInfo, onRemoveWedding}: {
    weddingInfo: WeddingInfo;
    onRemoveWedding: () => void;
}) {
    const [openDetailPopover, setOpenDetailPopover] = useState(false);
    const [statistics, setStatistics] = useState<WeddingStatistics>();
    const [showRemoveWatermarkDialog, setShowRemoveWatermarkDialog] = useState(false);
    const [selectedRemoveWatermarkWedding, setSelectedRemoveWatermarkWedding] = useState<WeddingInfo>();
    const [comments, setComments] = useState<Comment[]>();
    const {deviceSize} = useResponsive();
    const navigate = useNavigate();
    const weddingUrl = getWeddingUrl(weddingInfo.url);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await weddingApi.getStatistics(weddingInfo.url);
                setStatistics(data);
            } catch (error) {
                console.error(error);
            }
        })();

        (async () => {
            try {
                const {data} = await weddingApi.getComments(weddingInfo.url);
                setComments(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [weddingInfo]);

    return (
        <Row $gap={16} $alignItems={'stretch'} $ui={css`
            height: 360px;
            ${deviceSize === "mobile" && css`
                height: 144px;
            `};
        `}>
            {showRemoveWatermarkDialog && selectedRemoveWatermarkWedding && (
                <RemoveWatermarkDialog
                    url={selectedRemoveWatermarkWedding.url}
                    dismiss={() => setShowRemoveWatermarkDialog(false)}
                />
            )}
            <View as={'img'} src={weddingInfo.img} $ui={css`
                width: calc(360px * 9 / 16);
                ${deviceSize === "mobile" && css`
                    width: calc(144px * 9 / 16);
                `};
                background: var(--g-100);
                border-radius: 12px;
                object-fit: cover;
            `}/>
            <Column $gap={24} $alignItems={'stretch'} $flex={1} $ui={css`
                min-width: 0;
            `}>
                {/*header*/}
                <Column $gap={8} $alignItems={'stretch'}>
                    <Row $gap={8} $alignItems={'flex-end'}>
                        <Column $alignItems={'stretch'} $flex={1} $ui={css`
                            min-width: 0;
                        `}>
                            <Text type={'p1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>{weddingInfo.name}</Text>
                            <Row $gap={4} $alignItems={'center'} onClick={() => window.open(weddingUrl)} $ui={css`
                                cursor: pointer;
                            `}>
                                <Text type={'caption2'} ui={css`
                                    color: var(--g-500);
                                    word-break: break-all;
                                `}>{weddingUrl}</Text>
                                <Icon size={14} iconType={IconType.ExternalLink} ui={css`
                                    fill: var(--g-500);
                                `}/>
                            </Row>
                        </Column>
                        <Row $gap={8} $alignItems={'center'}>
                            {deviceSize === 'desktop' && (
                                <>
                                    <Button text={'수정'} size={'medium'} buttonType={'outlined'} onClick={() => {
                                        navigate(`/editor/${weddingInfo.url}`);
                                    }}/>
                                    <Button text={'워터마크 제거'} size={'medium'} onClick={() => {
                                        setSelectedRemoveWatermarkWedding(weddingInfo);
                                        setShowRemoveWatermarkDialog(true);
                                    }}/>
                                </>
                            )}
                            <View $ui={css`
                                position: relative;
                            `}>
                                <Column
                                    $ui={css`
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
                                            ...((deviceSize === 'mobile' || deviceSize === 'tablet') ? [
                                                {
                                                    icon: IconType.PenLine,
                                                    text: '청첩장 수정',
                                                    onClick: () => {
                                                        navigate(`/editor/${weddingInfo.url}`);
                                                    }
                                                },
                                                {
                                                    icon: IconType.Star,
                                                    text: '워터마크 제거',
                                                    onClick: () => {
                                                        setShowRemoveWatermarkDialog(true);
                                                        setSelectedRemoveWatermarkWedding(weddingInfo);
                                                    }
                                                }
                                            ] : []),
                                            {
                                                icon: IconType.Stat,
                                                text: '통계 보기',
                                                onClick: () => {
                                                    navigate(`/mypage/wedding/${weddingInfo.url}`);
                                                }
                                            },
                                            // {
                                            //     icon: IconType.Link,
                                            //     text: '링크 수정',
                                            //     onClick: () => {
                                            //     }
                                            // },
                                            {
                                                icon: IconType.Trash,
                                                text: '청첩장 삭제',
                                                type: 'destructive',
                                                onClick: onRemoveWedding
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
                    <Row $gap={16} $flex={1} $alignItems={'stretch'} $ui={css`
                        min-height: 0;
                    `}>
                        {/*방명록 미리보기*/}
                        <Column $gap={8} $alignItems={'stretch'} $flex={1}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-400);
                            `}>방명록</Text>
                            <Column $gap={8} $alignItems={'stretch'} $flex={1} $ui={css`
                                min-height: 0;
                                overflow-y: scroll;
                                ${hideScrollBar};
                            `}>
                                {comments ? (
                                    comments.length === 0 ? (
                                        <Text type={'p3'} ui={css`
                                            align-self: center;
                                            margin-top: 24px;
                                            color: var(--g-500);
                                        `}>아직 방명록이 없어요</Text>
                                    ) : (
                                        comments.map((comment, index) => (
                                            <CommentCell key={index} comment={comment}/>
                                        ))
                                    )) : (
                                    <Loading/>
                                )}
                            </Column>
                        </Column>

                        {/*통계*/}
                        <Column $gap={8} $alignItems={'stretch'} $flex={1}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-400);
                            `}>통계</Text>
                            <Column $gap={8} $alignItems={'stretch'} $flex={1} $ui={css`
                                min-height: 0;
                                overflow-y: scroll;
                                ${hideScrollBar};
                            `}>
                                {statistics ? (
                                    <>
                                        <StatisticsCell title={'총 참석 가능 인원'} value={`${statistics.totalRsvpVisitorCnt}명`}/>
                                        <StatisticsCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
                                        <StatisticsCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
                                    </>
                                ) : (
                                    <Loading/>
                                )}
                            </Column>
                        </Column>
                    </Row>
                )}
            </Column>
        </Row>
    )
}

function CommentCell({comment}: { comment: Comment }) {
    return (
        <Column $alignItems={'stretch'}>
            <Row $gap={4} $alignItems={'flex-end'}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-600);
                `}>{comment.name}</Text>
                <Text type={'caption1'} ui={css`
                    color: var(--g-400);
                `}>{getTimeAgo(new Date(comment.createdDate))}</Text>
            </Row>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
                word-break: break-word;
            `}>{comment.comment}</Text>
        </Column>
    );
}

function StatisticsCell({title, value}: {
    title: string;
    value: string;
}) {
    return (
        <Row>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Spacer/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </Row>
    );
}

export default MyPageWeddingPage;
