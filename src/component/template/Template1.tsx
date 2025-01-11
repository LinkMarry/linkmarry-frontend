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
import {templateFontSizeRecord, templateFontSizes} from "@remote/value/Template";
import {LinkMarryFont} from "@designsystem/foundation/text/textType";
import GuestCommentsTemplate from "@src/component/template/component/GuestCommentsTemplate";
import ContactingCongratulationDialog from "@src/component/template/dialog/ContactingCongratulationDialog";

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
    const [showContactingCongratulationDialog, setShowContactingCongratulationDialog] = useState(false);
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
                        <Text
                            text={wedding.weddingSchedule.weddingDate} font={templateFont} size={18 + addFontSize}
                            weight={300}
                        />
                        <Text
                            text={wedding.weddingPlace.placeName} font={templateFont} size={18 + addFontSize}
                            weight={300}
                        />
                    </S.container1.descriptionWrapper>
                </S.container1.titleWrapper>
                <Column gap={44} $alignItems={'center'}>
                    <S.container1.img src={wedding.imgList[0]}/>
                    <Row gap={8} $alignItems={'center'}>
                        <Text
                            text={`신랑 ${wedding.baseInfo.groomName}`} size={16 + addFontSize} font={templateFont}
                            weight={300}
                        />
                        <Icon type={IconType.HeartFill} size={16 + addFontSize} color={colors.white}/>
                        <Text
                            text={`신부 ${wedding.baseInfo.brideName}`} size={16 + addFontSize} font={templateFont}
                            weight={300}
                        />
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
                                        <Text
                                            text={`${day.day ?? ''}`}
                                            font={'Pretendard'}
                                            size={16 + addFontSize}
                                            weight={300}
                                        />
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
                            <Text text={'DAYS'} font={templateFont} size={12 + addFontSize} weight={400}
                                  color={colors.g300}/>
                            <Text text={`${remainingTime.days}`} font={templateFont} size={24 + addFontSize}
                                  weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'HOUR'} font={templateFont} size={12 + addFontSize} weight={400}
                                  color={colors.g300}/>
                            <Text text={`${remainingTime.hours}`} font={templateFont} size={24 + addFontSize}
                                  weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'MIN'} font={templateFont} size={12 + addFontSize} weight={400}
                                  color={colors.g300}/>
                            <Text text={`${remainingTime.minutes}`} font={templateFont} size={24 + addFontSize}
                                  weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                        <S.container2.dateCell>
                            <Text text={'SEC'} font={templateFont} size={12 + addFontSize} weight={400}
                                  color={colors.g300}/>
                            <Text text={`${remainingTime.seconds}`} font={templateFont} size={24 + addFontSize}
                                  weight={300} color={colors.g600}/>
                        </S.container2.dateCell>
                    </Row>
                    <Row gap={4}>
                        <Text text={wedding.baseInfo.groomName} font={templateFont} size={14 + addFontSize}
                              weight={300}/>
                        <Icon
                            type={IconType.HeartFill}
                            size={16 + addFontSize}
                            color={colors.black}
                        />
                        <Text text={`${wedding.baseInfo.brideName}의 결혼식이`} font={templateFont} size={14 + addFontSize}
                              weight={300}/>
                        <Text text={`${remainingTime.days}`} font={templateFont} size={14 + addFontSize} weight={300}
                              color={colors.p800}/>
                        <Text text={'일 남았습니다.'} font={templateFont} size={14 + addFontSize} weight={300}/>
                    </Row>
                </Column>
            </S.container2.root>
            <S.container3.root>
                <Column gap={96} $alignItems={'stretch'}>
                    <Column gap={40} $alignItems={'center'}>
                        <Column gap={8} $alignItems={'center'}>
                            <Text
                                text={`${wedding.baseInfo.groomFatherName}·${wedding.baseInfo.groomMotherName}의 ${wedding.baseInfo.groomFamilyName}`}
                                font={'GangwonEduAll'} weight={100} size={24 + addFontSize} color={colors.g600}
                            />
                            <Row gap={8} $alignItems={'center'}>
                                <Text
                                    text={`신랑 `} font={'GangwonEduAll'} weight={100} size={24 + addFontSize}
                                    color={colors.g600}
                                />
                                <Text
                                    text={`${wedding.baseInfo.groomName}`} font={'GangwonEduAll'} weight={100}
                                    size={24 + addFontSize}
                                />
                            </Row>
                        </Column>
                        <HorizontalDivider color={colors.g200}/>
                        <Column gap={8} $alignItems={'center'}>
                            <Text
                                text={`${wedding.baseInfo.brideFatherName}·${wedding.baseInfo.brideMotherName}의 ${wedding.baseInfo.brideFamilyName}`}
                                font={'GangwonEduAll'} weight={100} size={24 + addFontSize} color={colors.g600}
                            />
                            <Row gap={8} $alignItems={'center'}>
                                <Text
                                    text={`신부 `} font={'GangwonEduAll'} weight={100}
                                    size={24 + addFontSize} color={colors.g600}
                                />
                                <Text
                                    text={`${wedding.baseInfo.brideName}`} font={'GangwonEduAll'} weight={100}
                                    size={24 + addFontSize}
                                />
                            </Row>
                        </Column>
                    </Column>
                    <Button text={'축하 연락하기'} onClick={() => {
                        setShowContactingCongratulationDialog(true);
                    }}/>
                </Column>
            </S.container3.root>
            <S.container4.root>
                <Text text={'GALLERY'} font={wedding.template.templateFont} color={colors.g600} size={20 + addFontSize}
                      weight={300}/>
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
                    <Text text={'LOCATION'} font={wedding.template.templateFont} color={colors.g600}
                          size={20 + addFontSize}
                          weight={300}/>
                    <Column $alignItems={'center'}>
                        <Text text={wedding.weddingPlace.placeName} font={templateFont} size={16 + addFontSize}
                              weight={300}/>
                        <Text text={`${wedding.weddingPlace.addressName} ${wedding.weddingPlace.floorHall}`}
                              font={templateFont} size={16 + addFontSize} weight={300}/>
                    </Column>
                    <S.container5.kakaoMap ref={kakaoMapRef} style={{
                        display: wedding.weddingPlace.placeStatus ? 'flex' : 'none'
                    }}></S.container5.kakaoMap>
                    <Text
                        text={wedding.weddingPlace.placeTransportation} font={templateFont} size={16 + addFontSize}
                        weight={300}
                        style={{
                            marginLeft: 24,
                            alignSelf: 'stretch',
                            textAlign: 'start'
                        }}
                    />
                </Column>
                <Spacer h={65}/>
            </S.container5.root>
            <S.container6.root>
                <Column gap={40} $alignItems={'center'}>
                    <Text text={'마음 전하실 곳'} font={templateFont} size={20 + addFontSize} weight={300}
                          color={colors.g600}/>
                    <MoneyInfoInTemplate moneyInfo={wedding.moneyInfo}/>
                </Column>
            </S.container6.root>
            <S.container7.root background={templateColor}>
                <Column gap={40} $alignItems={'stretch'}>
                    <Column gap={12} $alignItems={'center'}>
                        <Text text={'방명록'} font={templateFont} size={20 + addFontSize} weight={300}
                              color={colors.g600}/>
                        <Text text={`${wedding.baseInfo.groomName}, ${wedding.baseInfo.brideName}에게 하고 싶은 말을 남겨주세요`}
                              font={templateFont} size={16 + addFontSize} weight={300} color={colors.g600}/>
                    </Column>
                    <Column gap={12} $alignItems={'stretch'}>
                        <GuestCommentsTemplate
                            comments={wedding.guestComments}
                            design={wedding.guestComment.design}
                            templateFont={templateFont}
                            background={colors.white}
                            addFontSize={addFontSize}
                            onRemove={comment => {
                                setSelectedRemoveGuestComment(comment);
                                setShowRemoveGuestCommentDialog(true);
                            }}
                        />
                        <Text
                            text={'전체보기'} style={{alignSelf: 'flex-end', paddingRight: 4}} font={templateFont}
                            size={14 + addFontSize} weight={300} color={colors.g600}
                        />
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
            <FooterTemplate
                templateFont={templateFont}
                addFontSize={addFontSize}
                style={{
                    background: '#F7F7F2'
                }}
            />
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
        </S.container>
    );
}


export default Template1;