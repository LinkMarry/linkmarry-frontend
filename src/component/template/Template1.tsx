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
import GuestCommentsTemplate from "@src/component/template/component/GuestCommentsTemplate";
import ContactingCongratulationDialog from "@src/component/template/dialog/ContactingCongratulationDialog";
import {increaseFontSize} from "@util/html.util";
import ImgDesign from "@remote/enumeration/ImgDesign";
import GuestCommentsDetailDialog from "@src/component/template/dialog/GuestCommentsDetailDialog";

const {kakao} = window as any;

interface Template1Props {
    wedding: Wedding;
}

function parseDate(dateString: string): Date {
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
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);
    const [showGuestCommentsDetailDialog, setShowGuestCommentsDetailDialog] = useState(false);
    const [selectedRemoveGuestComment, setSelectedRemoveGuestComment] = useState<Comment>();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const kakaoMapRef = useRef<HTMLDivElement>(null);

    const weddingDate = wedding.weddingSchedule.weddingDate;
    const date = weddingDate ? parseDate(weddingDate) : null;  // 입력 날짜 파싱
    const calendar = date ? getCalendar(date) : null;

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0;

        const scrollContainer = scrollContainerRef.current;
        const scrollPosition = scrollContainer.scrollLeft - 34;
        const imageWidth = containerWidth - 34 * 2 + 8; // 이미지 너비 + 간격
        const index = Math.floor(scrollPosition / imageWidth);
        console.log(`${scrollPosition}, ${imageWidth}`);
        console.log(index);
        setCurrentImageIndex(index); // 현재 스크롤된 이미지 인덱스를 상태에 저장
    };

    useEffect(() => {
        const calculateRemainingTime = () => {
            if (!date) return;

            const now = new Date();
            const timeDiff = date.getTime() - now.getTime();

            // 시간 차가 음수일 경우 결혼식이 이미 지났다는 의미
            if (timeDiff <= 0) {
                setRemainingTime({days: 0, hours: 0, minutes: 0, seconds: 0});
                return;
            }

            setRemainingTime({
                days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)), // 남은 일수 
                hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
            });
        };

        calculateRemainingTime();
        const interval = setInterval(calculateRemainingTime, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [weddingDate]);

    useEffect(() => {
        if (!kakao || !kakao.maps) {
            alert('지도 서비스가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }
        
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        new kakao.maps.Map(kakaoMapRef.current, {
            center: new kakao.maps.LatLng(35.6632, 128.4141),
            level: 5, // 확대 레벨
        });

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const {templateColor, templateFont, templateFontSize} = wedding.template;

    (() => {
        const addFontSize = templateFontSizeRecord[templateFontSize].addFontSize;
        increaseFontSize(containerRef, addFontSize);
    })();

    return (
        <S.container ref={containerRef} $templateFont={templateFont}>
            <S.container1.root background={templateColor}>
                <S.container1.titleWrapper>
                    {/*<Text text={'MIN라인LINE Seed*@ HYOLYN & TAFYANG'} font={'LINESeedKR'} weight={400}/>*/}
                    {/*<HorizontalDivider color={colors.black}/>*/}
                    <S.container1.descriptionWrapper>
                        <Text size={18} weight={300}>
                            {wedding.weddingSchedule.weddingDate}
                        </Text>
                        <Text size={18} weight={300}>
                            {wedding.weddingPlace.placeName}
                        </Text>
                    </S.container1.descriptionWrapper>
                </S.container1.titleWrapper>
                <Column gap={44} $alignItems={'center'}>
                    <S.container1.img src={wedding.imgList[0]}/>
                    <Row gap={8} $alignItems={'center'}>
                        <Text size={16} weight={300}>
                            신랑 {wedding.baseInfo.groomName}
                        </Text>
                        <Icon type={IconType.HeartFill} size={16} color={colors.white}/>
                        <Text size={16} weight={300}>
                            신부 {wedding.baseInfo.brideName}
                        </Text>
                    </Row>
                </Column>
            </S.container1.root>
            <S.container2.root>
                <Text color={colors.g600} size={20} weight={300}>
                    WEDDING DAY
                </Text>
                {wedding.weddingSchedule.calendar && (
                    <Column gap={25} $alignSelf={'stretch'} $alignItems={'stretch'}>
                        <HorizontalDivider/>
                        <S.container2.table>
                            <thead>
                            <tr>
                                {['일', '월', '화', '수', '목', '금', '토'].map((i, index) => (
                                    <th key={index}>
                                        <Text
                                            font={'Pretendard'}
                                            color={colors.g500}
                                            size={16}
                                            weight={300}
                                        >{i}</Text>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {calendar && calendar.map((week, index) => (
                                <tr key={index}>
                                    {week.map((day, dayIndex) => (
                                        <td
                                            key={dayIndex}
                                            style={{
                                                background: day.isWeddingDay ? colors.p300 : undefined,
                                                borderRadius: 100
                                            }}
                                        >
                                            <Text font={'Pretendard'} size={16} weight={300}>
                                                {day.day ?? ''}
                                            </Text>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </S.container2.table>
                        <HorizontalDivider/>
                    </Column>
                )}
                {wedding.weddingSchedule.dDay && (
                    <Column gap={24} $alignItems={'center'}>
                        <Row gap={12} $alignItems={'center'} style={{paddingLeft: 50, paddingRight: 50}}>
                            <S.container2.dateCell>
                                <Text size={12} weight={400} color={colors.g300}>DAYS</Text>
                                <Text size={24} weight={300} color={colors.g600}>
                                    {remainingTime.days}
                                </Text>
                            </S.container2.dateCell>
                            <S.container2.dateCell>
                                <Text size={12} weight={400} color={colors.g300}>HOUR</Text>
                                <Text size={24} weight={300} color={colors.g600}>
                                    {remainingTime.hours}
                                </Text>
                            </S.container2.dateCell>
                            <S.container2.dateCell>
                                <Text size={12} weight={400} color={colors.g300}>MIN</Text>
                                <Text size={24} weight={300} color={colors.g600}>
                                    {remainingTime.minutes}
                                </Text>
                            </S.container2.dateCell>
                            <S.container2.dateCell>
                                <Text size={12} weight={400} color={colors.g300}>SEC</Text>
                                <Text size={24} weight={300} color={colors.g600}>
                                    {remainingTime.seconds}
                                </Text>
                            </S.container2.dateCell>
                        </Row>
                        <Row gap={4}>
                            <Text size={14} weight={300}>{wedding.baseInfo.groomName}</Text>
                            <Icon
                                type={IconType.HeartFill}
                                size={16}
                                color={colors.black}
                            />
                            <Text size={14} weight={300}>{wedding.baseInfo.brideName}의 결혼식이</Text>
                            <Text size={14} weight={300}
                                  color={colors.p800}>{remainingTime.days}</Text>
                            <Text size={14} weight={300}>일 남았습니다.</Text>
                        </Row>
                    </Column>
                )}
            </S.container2.root>
            <S.container3.root background={templateColor}>
                <Column gap={96} $alignItems={'stretch'}>
                    <Column gap={40} $alignItems={'center'}>
                        <Column gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}>
                                {wedding.baseInfo.groomFatherName}·{wedding.baseInfo.groomMotherName}의 {wedding.baseInfo.groomFamilyName}
                            </Text>
                            <Row gap={8} $alignItems={'center'}>
                                <Text font={'GangwonEduAll'} weight={100} size={24}
                                      color={colors.g600}>
                                    신랑&nbsp;
                                </Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {wedding.baseInfo.groomName}
                                </Text>
                            </Row>
                        </Column>
                        <HorizontalDivider color={colors.g200}/>
                        <Column gap={8} $alignItems={'center'}>
                            <Text font={'GangwonEduAll'} weight={100} size={24} color={colors.g600}>
                                {wedding.baseInfo.brideFatherName}·{wedding.baseInfo.brideMotherName}의 {wedding.baseInfo.brideFamilyName}
                            </Text>
                            <Row gap={8} $alignItems={'center'}>
                                <Text font={'GangwonEduAll'} weight={100} size={24}
                                      color={colors.g600}>
                                    신부&nbsp;
                                </Text>
                                <Text font={'GangwonEduAll'} weight={100} size={24}>
                                    {wedding.baseInfo.brideName}
                                </Text>
                            </Row>
                        </Column>
                    </Column>
                    <Button text={'축하 연락하기'} onClick={() => {
                        setShowContactingCongratulationDialog(true);
                    }}/>
                </Column>
            </S.container3.root>
            <S.container4.root>
                <Text font={wedding.template.templateFont} color={colors.g600} size={20} weight={300}>
                    GALLERY
                </Text>
                {wedding.imgDesign === ImgDesign.SLIDE ? (
                    <S.container4.slideWrapper>
                        <S.container4.scroll ref={scrollContainerRef}>
                            {wedding.imgList.map((img, index) => (
                                <S.container4.slideImg
                                    key={index}
                                    src={img}
                                    $rootWidth={containerRef.current?.getBoundingClientRect().width ?? 0}
                                />
                            ))}
                        </S.container4.scroll>
                        <S.container4.indicatorWrapper>
                            {Array.from({length: wedding.imgList.length}, (_, index) => index).map((i, index) => (
                                <S.container4.indicator key={index} selected={i === currentImageIndex}/>
                            ))}
                        </S.container4.indicatorWrapper>
                    </S.container4.slideWrapper>
                ) : (
                    <S.container4.gridWrapper>
                        {wedding.imgList.map((img, index) => (
                            <S.container4.gridImg key={index} src={img}/>
                        ))}
                    </S.container4.gridWrapper>
                )}
            </S.container4.root>
            <S.container5.root background={templateColor}>
                <Spacer h={92}/>
                <Column gap={40} $alignItems={'center'}>
                    <Text font={wedding.template.templateFont} color={colors.g600} size={20}
                          weight={300}>
                        LOCATION
                    </Text>
                    <Column $alignItems={'center'}>
                        <Text size={16} weight={300}>
                            {wedding.weddingPlace.placeName}
                        </Text>
                        <Text size={16} weight={300}>
                            {wedding.weddingPlace.addressName} {wedding.weddingPlace.floorHall}
                        </Text>
                    </Column>
                    <S.container5.kakaoMap ref={kakaoMapRef} style={{
                        display: wedding.weddingPlace.placeStatus ? 'flex' : 'none'
                    }}></S.container5.kakaoMap>
                    <Text size={16} weight={300} style={{
                        marginLeft: 24,
                        alignSelf: 'stretch',
                        textAlign: 'start'
                    }}>{wedding.weddingPlace.placeTransportation}</Text>
                </Column>
                <Spacer h={65}/>
            </S.container5.root>
            <S.container6.root>
                <Column gap={40} $alignItems={'center'}>
                    <Text size={20} weight={300} color={colors.g600}>마음 전하실 곳</Text>
                    <MoneyInfoInTemplate moneyInfo={wedding.moneyInfo}/>
                </Column>
            </S.container6.root>
            <S.container7.root background={templateColor}>
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={12} $alignItems={'center'}>
                        <Text size={20} weight={300} color={colors.g600}>방명록</Text>
                        <Text size={16} weight={300} color={colors.g600}>
                            {wedding.baseInfo.groomName}, {wedding.baseInfo.brideName}에게 하고 싶은 말을 남겨주세요
                        </Text>
                    </Column>
                    <Column gap={12} $alignItems={'stretch'}>
                        <GuestCommentsTemplate
                            comments={wedding.guestComments}
                            design={wedding.guestComment.design}
                            background={colors.white}
                            onRemove={comment => {
                                setSelectedRemoveGuestComment(comment);
                                setShowRemoveGuestCommentDialog(true);
                            }}
                        />
                        <Text
                            style={{alignSelf: 'flex-end', paddingRight: 4}}
                            size={14} weight={300} color={colors.g600}
                            onClick={() => {
                                setShowGuestCommentsDetailDialog(true);
                            }}
                        >전체보기</Text>
                    </Column>
                </Column>
                <Button
                    text={'방명록 작성하기'}
                    style={{
                        alignSelf: 'center'
                    }}
                    onClick={() => {
                        setShowCreateGuestCommentDialog(true);
                    }}
                />
            </S.container7.root>
            <FooterTemplate background={templateColor}/>
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
            {showContactingCongratulationDialog && (
                <ContactingCongratulationDialog
                    baseInfo={wedding.baseInfo}
                    phone={wedding.phone}
                    dismiss={() => setShowContactingCongratulationDialog(false)}
                />
            )}
            {showGuestCommentsDetailDialog && (
                <GuestCommentsDetailDialog
                    comments={wedding.guestComments}
                    dismiss={() => setShowGuestCommentsDetailDialog(false)}
                />
            )}
        </S.container>
    );
}


export default Template1;