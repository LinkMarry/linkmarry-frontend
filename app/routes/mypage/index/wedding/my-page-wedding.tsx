import {useEffect, useState} from 'react';
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text.tsx";
import View from "~/userinterface/core/View.tsx";
import Divider from "~/userinterface/component/Divider.tsx";
import Button from "~/userinterface/component/Button.tsx";
import Icon, {type IconType} from "~/userinterface/foundation/Icon.tsx";
import {hideScrollBarStyle, interactionEffectStyles} from "~/userinterface/css.util.ts";
import Spacer from "~/userinterface/component/Spacer.tsx";
import Popover from "~/userinterface/pattern/Popover.tsx";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";
import Loading from "~/userinterface/specific/Loading.tsx";
import type WeddingInfo from "~/infrastructure/network/value/WeddingInfo.ts";
import type WeddingStatistics from "~/infrastructure/network/value/WeddingStatistics.ts";
import type Comment from "~/infrastructure/network/value/Comment.ts";
import {getTimeAgo} from "~/shared/date-util.ts";
import {useNavigate} from "react-router";
import Dialog from "~/userinterface/pattern/dialog/Dialog.tsx";
import RemoveWatermarkDialog from "~/userinterface/specific/dialog/RemoveWatermarkDialog.tsx";
import {getWeddingUrl} from "~/shared/string-util.ts";
import useMyPageWedding from "~/routes/mypage/index/wedding/useMyPageWedding.ts";
import {desktopStyle, notDesktopStyle, responsive} from "~/hook/ResponsiveSwitch.tsx";

function MyPageWedding() {
    const {
        showRemoveWeddingDialog,
        setShowRemoveWeddingDialog,
        weddings,
        removeWedding,
        setSelectedWedding
    } = useMyPageWedding();

    const navigate = useNavigate();

    return (
        <View ui={css`
            min-width: 0;
            gap: 24px;
            flex: 1;
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
            <View ui={css`
                gap: 16px;
            `}>
                {weddings ? weddings.weddingInfo.length === 0 ? (
                    <View ui={css`
                        gap: 8px;
                        align-items: flex-start;
                    `}>
                        <Text>아직 모바일 청첩장이 없어요</Text>
                        <Button
                            text={'청첩장 만들기'}
                            buttonType={'tonal'}
                            onClick={() => navigate('/editor')}
                        />
                    </View>
                ) : weddings.weddingInfo.map(wedding => (
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
            </View>
            <Spacer h={32}/>
        </View>
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
        <View ui={css`
            gap: 16px;
            flex-direction: row;
            height: 360px;

            ${responsive.mobile} {
                height: 144px;
            }
        ;
        `}>
            {showRemoveWatermarkDialog && selectedRemoveWatermarkWedding && (
                <RemoveWatermarkDialog
                    url={selectedRemoveWatermarkWedding.url}
                    dismiss={() => setShowRemoveWatermarkDialog(false)}
                />
            )}
            <View as={'img'} src={weddingInfo.img || undefined} ui={css`
                width: calc(360px * 9 / 16);

                ${responsive.mobile} {
                    width: calc(144px * 9 / 16);
                }

                background: var(--g-100);
                border-radius: 12px;
                object-fit: cover;
            `}/>
            <View ui={css`
                gap: 24px;
                flex: 1;
                min-width: 0;
            `}>
                {/*header*/}
                <View ui={css`
                    gap: 8px;
                `}>
                    <View ui={css`
                        flex-direction: row;
                        align-items: flex-end;
                        gap: 8px;
                    `}>
                        <View ui={css`
                            flex: 1;
                            min-width: 0;
                        `}>
                            <Text type={'p1'} bold={true} ui={css`
                                color: var(--g-800);
                            `}>{weddingInfo.name}</Text>
                            <View onClick={() => window.open(weddingUrl)} ui={css`
                                flex-direction: row;
                                gap: 4px;
                                align-items: center;
                                cursor: pointer;
                            `}>
                                <Text type={'caption2'} ui={css`
                                    color: var(--g-500);
                                    word-break: break-all;
                                `}>{weddingUrl}</Text>
                                <Icon size={14} iconType={'ExternalLink'} ui={css`
                                    fill: var(--g-500);
                                `}/>
                            </View>
                        </View>
                        <View ui={css`
                            flex-direction: row;
                            align-items: center;
                            gap: 8px;
                        `}>
                            <Button text={'수정'} size={'medium'} buttonType={'outlined'} onClick={() => {
                                navigate(`/editor/${weddingInfo.url}`);
                            }} ui={desktopStyle}/>
                            <Button text={'워터마크 제거'} size={'medium'} onClick={() => {
                                setSelectedRemoveWatermarkWedding(weddingInfo);
                                setShowRemoveWatermarkDialog(true);
                            }} ui={desktopStyle}/>
                            <View ui={css`
                                position: relative;
                            `}>
                                <View ui={cx(
                                    css`
                                        align-items: center;
                                        padding: 4px;
                                        border-radius: 6px;
                                    `,
                                    interactionEffectStyles.strong
                                )} onClick={() => setOpenDetailPopover(true)}>
                                    <Icon iconType={'Detail'} width={24} height={24} ui={css`
                                        fill: var(--g-500);
                                    `}/>
                                </View>
                                {openDetailPopover && (
                                    <WeddingCellPopover
                                        dismiss={() => setOpenDetailPopover(false)}
                                        onViewStat={() => {
                                            navigate(`/mypage/wedding/${weddingInfo.url}`);
                                        }}
                                        onRemoveWedding={onRemoveWedding}
                                        onEditWedding={() => {
                                            navigate(`/editor/${weddingInfo.url}`);
                                        }}
                                        onRemoveWatermark={() => {
                                            setShowRemoveWatermarkDialog(true);
                                            setSelectedRemoveWatermarkWedding(weddingInfo);
                                        }}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                    <Divider ui={desktopStyle}/>
                </View>
                {/*content*/}
                <View ui={cx(
                    css`
                        flex-direction: row;
                        gap: 16px;
                        flex: 1;
                        min-height: 0;
                    `,
                    desktopStyle
                )}>
                    {/*방명록 미리보기*/}
                    <View ui={css`
                        gap: 8px;
                        flex: 1;
                    `}>
                        <Text type={'caption2'} bold={true} ui={css`
                            color: var(--g-400);
                        `}>방명록</Text>
                        <View ui={cx(
                            css`
                                gap: 8px;
                                flex: 1;
                                min-height: 0;
                                overflow-y: scroll;
                            `,
                            hideScrollBarStyle
                        )}>
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
                        </View>
                    </View>

                    {/*통계*/}
                    <View ui={css`
                        flex: 1;
                        gap: 8px;
                    `}>
                        <Text type={'caption2'} bold={true} ui={css`
                            color: var(--g-400);
                        `}>통계</Text>
                        <View ui={cx(
                            css`
                                gap: 8px;
                                flex: 1;
                                min-height: 0;
                                overflow-y: scroll;
                            `,
                            hideScrollBarStyle
                        )}>
                            {statistics ? (
                                <>
                                    <StatisticsCell title={'총 참석 가능 인원'}
                                                    value={`${statistics.totalRsvpVisitorCnt}명`}/>
                                    <StatisticsCell title={'식사 인원'} value={`${statistics.totalMealCnt}명`}/>
                                    <StatisticsCell title={'링크 클릭 횟수'} value={`${statistics.totalVisitorCnt}회`}/>
                                </>
                            ) : (
                                <Loading/>
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

interface WeddingCellPopoverProps {
    dismiss: () => void;
    onViewStat: () => void;
    onRemoveWedding: () => void;
    onEditWedding: () => void;
    onRemoveWatermark: () => void;
}

function WeddingCellPopover(
    {
        dismiss,
        onViewStat,
        onRemoveWedding,
        onEditWedding,
        onRemoveWatermark
    }: WeddingCellPopoverProps
) {
    return (
        <>
            <Popover
                items={[
                    {
                        icon: 'PenLine' as IconType,
                        text: '청첩장 수정',
                        onClick: onEditWedding,
                        ui: notDesktopStyle
                    },
                    {
                        icon: 'Star' as IconType,
                        text: '워터마크 제거',
                        onClick: onRemoveWatermark,
                        ui: notDesktopStyle
                    },
                    {
                        icon: 'Stat',
                        text: '통계 보기',
                        onClick: onViewStat
                    },
                    {
                        icon: 'Trash',
                        text: '청첩장 삭제',
                        type: 'destructive',
                        onClick: onRemoveWedding
                    }
                ]}
                dismiss={dismiss}
                ui={css`
                    right: 0;
                `}
            />
        </>
    );
}

function CommentCell({comment}: { comment: Comment }) {
    return (
        <View>
            <View ui={css`
                flex-direction: row;
                gap: 4px;
                align-items: flex-end;
            `}>
                <Text type={'p3'} bold={true} ui={css`
                    color: var(--g-600);
                `}>{comment.name}</Text>
                <Text type={'caption1'} ui={css`
                    color: var(--g-400);
                `}>{getTimeAgo(new Date(comment.createdDate))}</Text>
            </View>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
                word-break: break-word;
            `}>{comment.comment}</Text>
        </View>
    );
}

function StatisticsCell({title, value}: {
    title: string;
    value: string;
}) {
    return (
        <View ui={css`
            flex-direction: row;
            align-items: flex-start;
        `}>
            <Text type={'p3'} ui={css`
                color: var(--g-500);
            `}>{title}</Text>
            <Spacer/>
            <Text type={'p3'} bold={true} ui={css`
                color: var(--g-600);
            `}>{value}</Text>
        </View>
    );
}

export default MyPageWedding;
