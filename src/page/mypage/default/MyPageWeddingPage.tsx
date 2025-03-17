import React, {useEffect, useState} from 'react';
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
import WeddingDashboard from "@remote/value/WeddingDashboard";
import weddingApi from "@remote/api/WeddingApi";
import Loading from "@src/component/Loading";
import WeddingInfo from "@remote/value/WeddingInfo";
import WeddingStatistics from "@remote/value/WeddingStatistics";
import Comment from "@remote/value/Comment";
import DateUtil from "@util/date.util";
import {useNavigate} from "react-router-dom";

function MyPageWeddingPage() {
    const [weddings, setWeddings] = useState<WeddingDashboard>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingApi.getMyWedding();
            setWeddings(data);
        })();
    }, []);

    return (
        <Column $gap={24} $flex={1} $alignItems={'stretch'}>
            <Text type={'h5'} bold={true}>모바일 청첩장</Text>
            <Column $alignItems={'stretch'} $gap={16}>
                {weddings ? weddings.weddingInfo.map(wedding => (
                    <WeddingCell key={wedding.url} weddingInfo={wedding}/>
                )) : (
                    <Loading/>
                )}
            </Column>
        </Column>
    );
}

function WeddingCell({weddingInfo}: { weddingInfo: WeddingInfo }) {
    const [openDetailPopover, setOpenDetailPopover] = useState(false);
    const [statistics, setStatistics] = useState<WeddingStatistics>();
    const [comments, setComments] = useState<Comment[]>();
    const {deviceSize} = useResponsive();
    const navigate = useNavigate();

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
            <View as={'img'} src={weddingInfo.img} $ui={css`
                width: calc(360px * 9 / 16);
                ${deviceSize === "mobile" && css`
                    width: calc(144px * 9 / 16);
                `};
                background: var(--g-100);
                border-radius: 12px;
                object-fit: cover;
            `}/>
            <Column $gap={24} $alignItems={'stretch'} $flex={1}>
                {/*header*/}
                <Column $gap={8} $alignItems={'stretch'}>
                    <Row $gap={8} $alignItems={'flex-end'}>
                        <Column $flex={1}>
                            <Text type={'p1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>Title</Text>
                            <Text type={'caption2'} ui={css`
                                color: var(--g-500);
                            `}>https://linkmarry.com/wedding/{weddingInfo.url}</Text>
                        </Column>
                        <Row $gap={8} $alignItems={'center'}>
                            {deviceSize === 'desktop' && (
                                <>
                                    <Button text={'수정'} size={'medium'} buttonType={'outlined'} onClick={() => {
                                        navigate(`/editor/${weddingInfo.url}`);
                                    }}/>
                                    <Button text={'방명록 확인'} size={'medium'} onClick={() => {
                                        navigate(`/mypage/wedding/${weddingInfo.url}/comments`);
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
                    <Row $gap={16} $flex={1} $alignItems={'stretch'} $ui={css`
                        min-height: 0;
                    `}>
                        {/*방명록 미리보기*/}
                        <Column $gap={8} $alignItems={'stretch'} $flex={1}>
                            <Text type={'caption2'} bold={true} ui={css`
                                color: var(--g-400);
                            `}>방명록 미리보기</Text>
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
                                        )
                                    )
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
                                        <StatisticsCell title={'총 참석 가능 인원'} value={`${statistics.totalVisitorCnt}명`}/>
                                        <StatisticsCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
                                        <StatisticsCell title={'링크 클릭 횟수'} value={`${statistics.totalLinkShareCnt}회`}/>
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
                `}>{DateUtil.getTimeAgo(new Date(comment.createdDate))}</Text>
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
