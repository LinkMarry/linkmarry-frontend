import React, {useEffect, useRef, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import * as S from '@src/component/template/Template1.style';
import HorizontalDivider from "@designsystem/component/horizontalDivider";
import colors from "@designsystem/foundation/colors";
import {Column, Row} from "@designsystem/component/flexLayout";
import Icon, {IconType} from "@designsystem/foundation/icon";
import Button from "@designsystem/component/button";
import Spacer from "@designsystem/component/spacer";
import MoneyInfoInTemplate from "@src/component/template/component/MoneyInfoInTemplate";
import FooterTemplate from "@src/component/template/component/FooterTemplate";
import Comment from "@remote/value/Comment";
import CreateGuestCommentDialog from "@src/component/template/dialog/CreateGuestCommentDialog";
import RemoveGuestCommentDialog from "@src/component/template/dialog/RemoveGuestCommentDialog";
import Text from "@designsystem/component/text";
import {templateFontSizeRecord} from "@remote/value/Template";

const {kakao: {maps}} = window as any;

interface Template1Props {
    wedding: Wedding;
}

function parseDate(dateString: string) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
}

function getCalendar(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // 첫 번째 날과 마지막 날 구하기
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const lastDate = lastDay.getDate();

    const calendar = [];
    let week = [];

    // 첫 번째 주의 빈 칸 채우기
    for (let i = 0; i < firstDayOfWeek; i++) {
        week.push(null);
    }

    // 날짜 추가
    for (let date = 1; date <= lastDate; date++) {
        week.push(date);

        // 주가 끝나면 새로운 주를 시작
        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    // 마지막 주의 빈 칸 채우기
    while (week.length < 7) {
        week.push(null);
    }

    if (week.length > 0) {
        calendar.push(week);
    }

    return calendar.map(week =>
        week.map(day => ({
            day,
            isWeddingDay: day === date.getDate() &&
                date.getMonth() === date.getMonth() &&
                date.getFullYear() === date.getFullYear()
        }))
    );
}

function Template1(
    {
        wedding
    }: Template1Props
) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // 현재 보여지는 이미지의 인덱스를 추적
    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [showCreateGuestCommentDialog, setShowCreateGuestCommentDialog] = useState(false);
    const [showRemoveGuestCommentDialog, setShowRemoveGuestCommentDialog] = useState(false);
    const [selectedRemoveGuestComment, setSelectedRemoveGuestComment] = useState<Comment>();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const kakaoMapRef = useRef<HTMLDivElement>(null);

    const date = parseDate(wedding.weddingSchedule.weddingDate);  // 입력 날짜 파싱
    const calendar = getCalendar(date);

    const calculateRemainingTime = () => {
        const now = new Date();
        const timeDiff = date.getTime() - now.getTime();

        // 시간 차가 음수일 경우 결혼식이 이미 지났다는 의미
        if (timeDiff <= 0) {
            setRemainingTime({days: 0, hours: 0, minutes: 0, seconds: 0});
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 남은 일수
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 남은 시간
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // 남은 분
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // 남은 초

        setRemainingTime({days, hours, minutes, seconds});
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;

            const scrollContainer = scrollContainerRef.current;
            const scrollPosition = scrollContainer.scrollLeft - 34;
            const imageWidth = containerWidth - 34 * 2 + 8; // 이미지 너비 + 간격
            const index = Math.floor(scrollPosition / imageWidth);
            console.log(`${scrollPosition}, ${imageWidth}`);
            console.log(index)
            setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
        }
    };

    useEffect(() => {
        calculateRemainingTime();
        const interval = setInterval(calculateRemainingTime, 1000);
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        new maps.Map(kakaoMapRef.current, {
            center: new maps.LatLng(35.6632, 128.4141),
            level: 5, // 확대 레벨
        });

        return () => {
            clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 해제}
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const {templateColor, templateFont, templateFontSize} = wedding.template;
    const addFontSize = templateFontSizeRecord[templateFontSize].addFontSize;

    return (
        <S.container ref={containerRef}>
            <S.container1.root background={templateColor}>
                <S.container1.titleWrapper>
                    {/*<Text text={'MIN라인LINE Seed*@ HYOLYN & TAFYANG'} font={'LINESeedKR'} weight={400}/>*/}
                    {/*<HorizontalDivider color={colors.black}/>*/}
                    <S.container1.descriptionWrapper>
                        <Text text={wedding?.weddingSchedule.weddingDate} font={templateFont} size={18 + addFontSize}
                              weight={300}/>
                        <Text text={wedding?.weddingPlace.placeName} font={templateFont} size={18 + addFontSize}
                              weight={300}/>
                    </S.container1.descriptionWrapper>
                </S.container1.titleWrapper>
                <Column gap={44} $alignItems={'center'}>
                    <S.container1.img src={wedding?.imgList[0]}/>
                    <Row gap={8} $alignItems={'center'}>
                        <Text text={`신랑 ${wedding?.baseInfo.groomName}`} font={templateFont} weight={300}/>
                        <Icon type={IconType.HeartFill} size={16} color={colors.white}/>
                        <Text text={`신부 ${wedding?.baseInfo.brideName}`} font={templateFont} weight={300}/>
                    </Row>
                </Column>
            </S.container1.root>
            <S.container2.root>
                <Text text={'WEDDING DAY'} font={templateFont} color={colors.g600} size={20 + addFontSize}
                      weight={300}/>
                <Column gap={25} $alignSelf={'stretch'} $alignItems={'stretch'}>
                    <HorizontalDivider/>
                    <S.container2.table>
                        <thead>
                        <tr>
                            {['일', '월', '화', '수', '목', '금', '토'].map(i => (
                                <Text text={i} font={'Pretendard'} color={colors.g500} size={16 + addFontSize}
                                      weight={300}/>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {calendar.map((week, index) => (
                            <tr key={index}>
                                {week.map((day, dayIndex) => (
                                    <td
                                        key={dayIndex}
                                        style={{
                                            background: day.isWeddingDay ? colors.p300 : undefined,
                                            borderRadius: 100
                                        }}
                                    >
                                        <Text text={`${day.day ?? ''}`} font={'Pretendard'} size={16 + addFontSize} weight={300}/>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </S.container2.table>
                    <HorizontalDivider/>
                </Column>
                <Column gap={24} $alignItems={'center'}>
                    <Row gap={12} $alignItems={'center'} style={{paddingLeft: 50, paddingRight: 50}}>
                        <S.container2.dateCell>
                            <Text text={'DAYS'} font={templateFont} size={12 + addFontSize} weight={400} color={colors.g300}/>
                            <Text text={`${remainingTime.days}`} font={templateFont} size={24 + addFontSize} weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'HOUR'} font={templateFont} size={12 + addFontSize} weight={400} color={colors.g300}/>
                            <Text text={`${remainingTime.hours}`} font={templateFont} size={24 + addFontSize} weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'MIN'} font={templateFont} size={12 + addFontSize} weight={400} color={colors.g300}/>
                            <Text text={`${remainingTime.minutes}`} font={templateFont} size={24 + addFontSize} weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'SEC'} font={templateFont} size={12 + addFontSize} weight={400} color={colors.g300}/>
                            <Text text={`${remainingTime.seconds}`} font={templateFont} size={24 + addFontSize} weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                    </Row>
                    <Row gap={4}>
                        {wedding?.baseInfo.groomName}
                        <Icon
                            type={IconType.HeartFill}
                            size={16}
                            color={colors.black}
                        />
                        {wedding?.baseInfo.brideName}의 결혼식이
                        <span style={{color: colors.p800}}>{remainingTime.days}</span>일 남았습니다.
                    </Row>
                </Column>
            </S.container2.root>
            <S.container3.root>
                <Column gap={96} $alignItems={'stretch'}>
                    <Column gap={40} $alignItems={'center'}>
                        <Column gap={8} $alignItems={'center'}>
                            <span>{wedding?.baseInfo.groomFatherName}·{wedding?.baseInfo.groomMotherName}의 {wedding?.baseInfo.groomFamilyName}</span>
                            <span>신랑 {wedding?.baseInfo.groomName}</span>
                        </Column>
                        <HorizontalDivider color={colors.g200}/>
                        <Column gap={8} $alignItems={'center'}>
                            <span>{wedding?.baseInfo.brideFatherName}·{wedding?.baseInfo.brideMotherName}의 {wedding?.baseInfo.brideFamilyName}</span>
                            <span>신부 {wedding?.baseInfo.brideName}</span>
                        </Column>
                    </Column>
                    <Button text={'축하 연락하기'}/>
                </Column>
            </S.container3.root>
            <S.container4.root>
                <Text text={'GALLERY'} font={wedding.template.templateFont}/>
                <S.container4.wrapper>
                    <S.container4.scroll ref={scrollContainerRef}>
                        {wedding.imgList.map((img, index) => (
                            <S.container4.img key={index} src={img}
                                              $rootWidth={containerRef.current?.getBoundingClientRect().width ?? 0}/>
                        ))}
                    </S.container4.scroll>
                    <S.container4.indicatorWrapper>
                        {Array.from({length: wedding.imgList.length}, (_, index) => index).map((i, index) => (
                            <S.container4.indicator key={index} selected={i === currentImageIndex}/>
                        ))}
                    </S.container4.indicatorWrapper>
                </S.container4.wrapper>
            </S.container4.root>
            <S.container5.root background={templateColor}>
                <Spacer h={92}/>
                <Column gap={40} $alignItems={'center'}>
                    <span>LOCATION</span>
                    <Column $alignItems={'center'}>
                        <span>{wedding?.weddingPlace.placeName}</span>
                        <span>{wedding?.weddingPlace.addressName} {wedding?.weddingPlace.floorHall}</span>
                    </Column>
                    <S.container5.kakaoMap ref={kakaoMapRef}></S.container5.kakaoMap>
                    <span style={{
                        marginLeft: 24,
                        alignSelf: 'stretch',
                        textAlign: 'start'
                    }}>{wedding?.weddingPlace.placeTransportation}</span>
                </Column>
                <Spacer h={65}/>
            </S.container5.root>
            <S.container6.root>
                <Column gap={40} $alignItems={'center'}>
                    <span>마음 전하실 곳</span>
                    <MoneyInfoInTemplate moneyInfo={wedding.moneyInfo}/>
                </Column>
            </S.container6.root>
            <S.container7.root background={templateColor}>
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={12} $alignItems={'center'}>
                        <span>방명록</span>
                        <span>{wedding?.baseInfo.groomName}, {wedding?.baseInfo.brideName}에게 하고 싶은 말을 남겨주세요</span>
                    </Column>
                    <Column gap={12} $alignItems={'stretch'}>
                        <Column gap={12} $alignItems={'stretch'}>
                            {wedding.guestComments.map((comment, index) => (
                                <GuestComment key={index} comment={comment} onRemove={() => {
                                    setSelectedRemoveGuestComment(comment);
                                    setShowRemoveGuestCommentDialog(true);
                                }}/>
                            ))}
                        </Column>
                        <span style={{alignSelf: 'flex-end'}}>전체보기</span>
                    </Column>
                </Column>
                <Button
                    text={'방명록 작성하기'}
                    style={{
                        alignSelf: 'center'
                    }}
                    onClick={() => {
                        setShowCreateGuestCommentDialog(true);
                    }
                    }/>
            </S.container7.root>
            <FooterTemplate style={{
                background: '#F7F7F2'
            }}/>
            {showCreateGuestCommentDialog && (
                <CreateGuestCommentDialog url={wedding.url} dismiss={() => setShowCreateGuestCommentDialog(false)}/>
            )}
            {showRemoveGuestCommentDialog && selectedRemoveGuestComment && (
                <RemoveGuestCommentDialog
                    selectedGuestComment={selectedRemoveGuestComment}
                    url={wedding.url}
                    dismiss={() => setShowRemoveGuestCommentDialog(false)}
                />
            )}
        </S.container>
    );
}

interface GuestCommentProps {
    comment: Comment;
    onRemove: () => void;
}

function GuestComment(
    {
        comment,
        onRemove,
    }: GuestCommentProps
) {
    return (
        <S.container7.comment>
            <Row gap={8} $alignItems={'center'}>
                <span>From. {comment.name}</span>
                <span>2025.1.1</span>{/* TODO: DUMMY */}
                <Spacer/>
                <Icon type={IconType.CrossLine} size={20} tint={colors.g300} style={{cursor: 'pointer'}}
                      onClick={onRemove}/>
            </Row>
            <span>{comment.content}</span>
        </S.container7.comment>
    );
}

export default Template1;