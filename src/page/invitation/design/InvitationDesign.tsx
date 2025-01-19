import React, {useEffect, useState} from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import S from '@page/invitation/design/InvitationDesign.style';
import OptionCell from "@page/invitation/design/component/OptionCell";
import {allCasesOfEnum} from "@util/enum.util";
import {options, OptionType} from "@page/invitation/design/OptionType";
import BaseInfoOption from "@page/invitation/design/option/BaseInfoOption";
import WeddingScheduleOption from "@page/invitation/design/option/WeddingScheduleOption";
import WeddingPlaceOption from "@page/invitation/design/option/WeddingPlaceOption";
import GreetingOption from "@page/invitation/design/option/GreetingOption";
import GuestCommentOption from "@page/invitation/design/option/GuestCommentOption";
import BaseMusicOption from "@page/invitation/design/option/BaseMusicOption";
import LinkShareOption from "@page/invitation/design/option/LinkShareOption";
import MoneyInfoOption from "@page/invitation/design/option/MoneyInfoOption";
import VideoOption from "@page/invitation/design/option/VideoOption";
import PhoneOption from "@page/invitation/design/option/PhoneOption";
import RsvpOption from "@page/invitation/design/option/RsvpOption";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Button from "@designsystem/component/button";
import TemplateOption from "@page/invitation/design/option/TemplateOption";
import {useNavigate, useSearchParams} from "react-router-dom";
import Template, {defaultTemplate} from "@remote/value/Template";
import BaseInfo, {defaultBaseInfo} from "@remote/value/BaseInfo";
import WeddingSchedule, {defaultWeddingSchedule} from "@remote/value/WeddingSchedule";
import WeddingPlace, {defaultWeddingPlace} from "@remote/value/WeddingPlace";
import Greeting, {defaultGreeting} from "@remote/value/Greeting";
import GuestComment, {defaultGuestComment} from "@remote/value/GuestComment";
import MoneyInfo, {defaultMoneyInfo} from "@remote/value/MoneyInfo";
import Phone, {defaultPhone} from "@remote/value/Phone";
import Rsvp, {defaultRsvp} from "@remote/value/Rsvp";
import Wedding from "@remote/value/Wedding";
import TemplateComponent from "@src/component/template/TemplateComponent";
import LinkShare, {defaultLinkShare} from "@remote/value/LinkShare";
import BaseMusic, {defaultBaseMusic} from "@remote/value/BaseMusic";
import Video, {defaultVideo} from "@remote/value/Video";
import GalleryOption from "@page/invitation/design/option/GalleryOption";
import ImgDesign from "@remote/enumeration/ImgDesign";
import {dummyComments} from "@remote/value/Comment";
import weddingApi from "@remote/api/WeddingApi";

function InvitationDesign() {
    const [searchParams] = useSearchParams();
    const url = searchParams.get('url');

    const [template, setTemplate] = useState<Template>(defaultTemplate);
    const [baseInfo, setBaseInfo] = useState<BaseInfo>(defaultBaseInfo);
    const [weddingSchedule, setWeddingSchedule] = useState<WeddingSchedule>(defaultWeddingSchedule);
    const [weddingPlace, setWeddingPlace] = useState<WeddingPlace>(defaultWeddingPlace);
    const [greeting, setGreeting] = useState<Greeting>(defaultGreeting);
    const [guestComment, setGuestComment] = useState<GuestComment>(defaultGuestComment);
    const [baseMusic, setBaseMusic] = useState<BaseMusic>(defaultBaseMusic);
    const [linkShare, setLinkShare] = useState<LinkShare>(defaultLinkShare);
    const [moneyInfo, setMoneyInfo] = useState<MoneyInfo>(defaultMoneyInfo);
    const [video, setVideo] = useState<Video>(defaultVideo);
    const [phone, setPhone] = useState<Phone>(defaultPhone);
    const [rsvp, setRsvp] = useState<Rsvp>(defaultRsvp);
    const [imgList, setImgList] = useState<string[]>([]);
    const [imgDesign, setImgDesign] = useState<ImgDesign>(ImgDesign.SLIDE);

    const navigate = useNavigate();

    const wedding: Wedding = {
        url: url ?? '',
        position: [],
        template,
        baseInfo,
        weddingSchedule,
        weddingPlace,
        greeting,
        guestComment,
        guestCommentList: dummyComments,
        baseMusic,
        linkShare,
        moneyInfo,
        video,
        phone,
        rsvp,
        imgList,
        imgDesign,
        waterMark: false
    }
    // Drag and drop
    const [items, setItems] = useState(allCasesOfEnum(OptionType));
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setItems(reorderedItems);
    };

    useEffect(() => {
        if (url === null) {
            navigate('/');
        }
    }, []);

    const saveDesign = async () => {
        // // validation
        // if (!url) return;
        //
        // const groomName = groomNameRef.current!!.value;
        // const groomFatherName = groomFatherNameRef.current!!.value;
        // const groomFatherStatus = groomFatherStatusRef.current!!.value;
        // const groomMotherName = groomMotherNameRef.current!!.value;
        // const groomMotherStatus = groomMotherStatusRef.current!!.value;
        // const groomFamilyName = groomFamilyNameRef.current!!.value;
        // const brideName = brideNameRef.current!!.value;
        // const brideFatherName = brideFatherNameRef.current!!.value;
        // const brideFatherStatus = brideFatherStatusRef.current!!.value;
        // const brideMotherName = brideMotherNameRef.current!!.value;
        // const brideMotherStatus = brideMotherStatusRef.current!!.value;
        // const brideFamilyName = brideFamilyNameRef.current!!.value;
        // const statusFlower = statusFlowerRef.current!!.value;
        // const brideMarkFirst = brideMarkFirstRef.current!!.value;
        // if (isAnyEmpty(groomName, groomFatherName, groomMotherName, groomFamilyName, brideName, brideFatherName, brideMotherName, brideFamilyName)) {
        //     alert('기본 정보를 입력해 주세요');
        //     return;
        // }
        //
        // const weddingDate = weddingDateRef.current!!.value;
        // const weddingTime = weddingTimeRef.current!!.value;
        // const calendar = calendarRef.current!!.value;
        // const dDay = dDayRef.current!!.value;
        // if (isAnyEmpty(weddingDate, weddingTime)) {
        //     alert('예식 일시를 입력해 주세요');
        //     return;
        // }
        //
        // const greetingTitle = greetingTitleRef.current!!.value;
        // const greetingContent = greetingContentRef.current!!.value;
        // if (isAnyEmpty(greetingTitle, greetingContent)) {
        //     alert('인사말을 입력해 주세요');
        //     return;
        // }
        //
        // const guestCommentTitle = guestCommentTitleRef.current!!.value;
        // const guestCommentContent = guestCommentContentRef.current!!.value;
        // const guestCommentDesign = guestCommentDesignRef.current!!.value;
        // const guestCommentPrivateContent = guestCommentPrivateContentRef.current!!.value!!;
        // const guestCommentPrivateDate = guestCommentPrivateDateRef.current!!.value!!;
        // if (isAnyEmpty(guestCommentTitle, guestCommentContent, guestCommentDesign)) {
        //     alert('방명록을 입력해 주세요');
        //     return;
        // }
        //
        // const effect = effectRef.current!!.value!!;
        //
        // const infoTitle = infoTitleRef.current!!.value;
        // const infoContent = infoContentRef.current!!.value;
        // const kakaoStatus = kakaoStatusRef.current!!.value;
        // const groomNameMoneyInfo = groomNameMoneyInfoRef.current!!.value;
        // const groomBankName = groomBankNameRef.current!!.value;
        // const groomBankNumber = groomBankNumberRef.current!!.value;
        // const groomKakaoUrl = groomKakaoUrlRef.current!!.value;
        // const groomFatherNameMoneyInfo = groomFatherNameMoneyInfoRef.current!!.value;
        // const groomFatherBankName = groomFatherBankNameRef.current!!.value;
        // const groomFatherBankNumber = groomFatherBankNumberRef.current!!.value;
        // const groomFatherKakaoUrl = groomFatherKakaoUrlRef.current!!.value;
        // const groomMotherNameMoneyInfo = groomMotherNameMoneyInfoRef.current!!.value;
        // const groomMotherBankName = groomMotherBankNameRef.current!!.value;
        // const groomMotherBankNumber = groomMotherBankNumberRef.current!!.value;
        // const groomMotherKakaoUrl = groomMotherKakaoUrlRef.current!!.value;
        // const brideNameMoneyInfo = brideNameMoneyInfoRef.current!!.value;
        // const brideBankName = brideBankNameRef.current!!.value;
        // const brideBankNumber = brideBankNumberRef.current!!.value;
        // const brideKakaoUrl = brideKakaoUrlRef.current!!.value;
        // const brideFatherNameMoneyInfo = brideFatherNameMoneyInfoRef.current!!.value;
        // const brideFatherBankName = brideFatherBankNameRef.current!!.value;
        // const brideFatherBankNumber = brideFatherBankNumberRef.current!!.value;
        // const brideFatherKakaoUrl = brideFatherKakaoUrlRef.current!!.value;
        // const brideMotherNameMoneyInfo = brideMotherNameMoneyInfoRef.current!!.value;
        // const brideMotherBankName = brideMotherBankNameRef.current!!.value;
        // const brideMotherBankNumber = brideMotherBankNumberRef.current!!.value;
        // const brideMotherKakaoUrl = brideMotherKakaoUrlRef.current!!.value;
        //
        // if (isAnyEmpty(
        //     infoTitle, infoContent,
        //     groomNameMoneyInfo, groomBankName, groomBankNumber, groomFatherNameMoneyInfo, groomFatherBankName, groomFatherBankNumber, groomMotherNameMoneyInfo, groomMotherBankName, groomMotherBankNumber,
        //     brideNameMoneyInfo, brideBankName, brideBankNumber, brideFatherNameMoneyInfo, brideFatherBankName, brideFatherBankNumber, brideMotherNameMoneyInfo, brideMotherBankName, brideMotherBankNumber
        // )) {
        //     alert('축의금을 입력해 주세요');
        //     return;
        // }
        //
        // const videoTitle = videoTitleRef.current!!.value;
        // const videoUrl = videoUrlRef.current!!.value;
        // if (isAnyEmpty(videoTitle, videoUrl)) {
        //     alert('동영상을 입력해 주세요');
        //     return;
        // }
        //
        // const groomTel = groomTelRef.current!!.value;
        // const groomFatherTel = groomFatherTelRef.current!!.value;
        // const groomMotherTel = groomMotherTelRef.current!!.value;
        // const brideTel = brideTelRef.current!!.value;
        // const brideFatherTel = brideFatherTelRef.current!!.value;
        // const brideMotherTel = brideMotherTelRef.current!!.value;
        // if (isAnyEmpty(
        //     groomTel, groomFatherTel, groomMotherTel,
        //     brideTel, brideFatherTel, brideMotherTel
        // )) {
        //     alert('연락처를 입력해 주세요');
        //     return;
        // }
        //
        // const rsvpTitle = rsvpTitleRef.current!!.value;
        // const rsvpContent = rsvpContentRef.current!!.value;
        // // const attendStatus = attendStatusRef.current!!.value;
        // const attendMealStatus = attendMealStatusRef.current!!.value;
        // const attendGuestCntStatus = attendGuestCntStatusRef.current!!.value;
        // const attendPhoneStatus = attendPhoneStatusRef.current!!.value;
        // const attendEtcStatus = attendEtcStatusRef.current!!.value;
        // const startPopupStatus = startPopupStatusRef.current!!.value;
        // const startPopupMessage = startPopupMessageRef.current!!.value;
        //
        // if (isAnyEmpty(rsvpTitle, rsvpContent, startPopupMessage)) {
        //     alert('참석의사를 입력해 주세요');
        //     return;
        // }
        //
        // // Request
        // await weddingApi.createWedding({
        //     url,
        //     position: [],
        //     template: {
        //         templateName: '',
        //         templateColor: '#ECECEC',
        //         templateFont: '',
        //         templateFontSize: '',
        //     },
        //     baseInfo: {
        //         groomName,
        //         groomFatherName,
        //         groomFatherStatus,
        //         groomMotherName,
        //         groomMotherStatus,
        //         groomFamilyName,
        //         brideName,
        //         brideFatherName,
        //         brideFatherStatus,
        //         brideMotherName,
        //         brideMotherStatus,
        //         brideFamilyName,
        //         statusFlower,
        //         brideMarkFirst,
        //     },
        //     weddingSchedule: {
        //         weddingDate,
        //         weddingTime,
        //         calendar,
        //         dDay
        //     },
        //     weddingPlace: {
        //         x: 0,
        //         y: 0,
        //         placeUrl: '',
        //         placeName: '',
        //         addressName: '',
        //         floorHall: '',
        //         placeTel: '',
        //         placeTransportation: '',
        //         placeStatus: false,
        //     },
        //     greeting: {
        //         greetingTitle,
        //         greetingContent
        //     },
        //     guestComment: {
        //         title: guestCommentTitle,
        //         content: guestCommentContent,
        //         design: Design.STICKER,
        //         privateContent: guestCommentPrivateContent,
        //         privateDate: guestCommentPrivateDate
        //     },
        //     baseMusic: {
        //         musicUrl: '',
        //         effect
        //     },
        //     linkShare: {
        //         kakaoImgUrl: '',
        //         kakaoTitle: '',
        //         kakaoContent: '',
        //         urlImg: '',
        //         urlTitle: '',
        //         urlContent: ''
        //     },
        //     moneyInfo: {
        //         infoTitle,
        //         infoContent,
        //         kakaoStatus,
        //         groomNameMoneyInfo,
        //         groomBankName,
        //         groomBankNumber,
        //         groomKakaoUrl,
        //         groomFatherNameMoneyInfo,
        //         groomFatherBankName,
        //         groomFatherBankNumber,
        //         groomFatherKakaoUrl,
        //         groomMotherNameMoneyInfo,
        //         groomMotherBankName,
        //         groomMotherBankNumber,
        //         groomMotherKakaoUrl,
        //         brideNameMoneyInfo,
        //         brideBankName,
        //         brideBankNumber,
        //         brideKakaoUrl,
        //         brideFatherNameMoneyInfo,
        //         brideFatherBankName,
        //         brideFatherBankNumber,
        //         brideFatherKakaoUrl,
        //         brideMotherNameMoneyInfo,
        //         brideMotherBankName,
        //         brideMotherBankNumber,
        //         brideMotherKakaoUrl,
        //     },
        //     video: {
        //         videoTitle,
        //         videoUrl
        //     },
        //     phone: {
        //         groomTel,
        //         groomFatherTel,
        //         groomMotherTel,
        //         brideTel,
        //         brideFatherTel,
        //         brideMotherTel
        //     },
        //     rsvp: {
        //         rsvpTitle,
        //         rsvpContent,
        //         attendStatus: true,
        //         attendMealStatus,
        //         attendGuestCntStatus,
        //         attendPhoneStatus,
        //         attendEtcStatus,
        //         startPopupStatus,
        //         startPopupMessage,
        //     },
        //     imgList: []
        // });
        await weddingApi.createWedding({
            url: url ?? '',
            position: [],
            template,
            baseInfo,
            weddingSchedule,
            weddingPlace,
            greeting,
            guestComment,
            baseMusic,
            linkShare,
            moneyInfo,
            video,
            phone,
            rsvp,
            imgList,
            imgDesign,
        });
    };

    return (
        <S.container>
            <S.optionContainer>
                <Row $alignItems={'flex-end'}>
                    <Column gap={8}>
                        <Text type={'h5'}>청첩장 제작</Text>
                        <Text type={'p3'} color={colors.g500}>원하는 청첩장을 만들어보세요!</Text>
                    </Column>
                    <Spacer/>
                    <Button text={'저장하기'} size={'medium'} onClick={saveDesign}/>
                </Row>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'option-droppable'}>
                        {(provided) => (
                            <S.options {...provided.droppableProps} ref={provided.innerRef}>
                                {items.map((option, index) => (
                                    <Draggable
                                        key={`${option}`}
                                        draggableId={`${option}`}
                                        index={index}
                                    >
                                        {provided => {
                                            let children: React.ReactNode;
                                            switch (option) {
                                                case OptionType.Template:
                                                    children = <TemplateOption
                                                        template={template}
                                                        onChange={template => setTemplate(template)}
                                                    />;
                                                    break;
                                                case OptionType.BaseInfo:
                                                    children = <BaseInfoOption
                                                        baseInfo={baseInfo}
                                                        onChange={baseInfo => setBaseInfo(baseInfo)}
                                                    />;
                                                    break;
                                                case OptionType.WeddingSchedule:
                                                    children = <WeddingScheduleOption
                                                        weddingSchedule={weddingSchedule}
                                                        onChange={weddingSchedule => setWeddingSchedule(weddingSchedule)}
                                                    />;
                                                    break;
                                                case OptionType.WeddingLocation:
                                                    children = <WeddingPlaceOption
                                                        weddingPlace={weddingPlace}
                                                        onChange={weddingPlace => setWeddingPlace(weddingPlace)}
                                                    />;
                                                    break;
                                                case OptionType.Greeting:
                                                    children = <GreetingOption
                                                        greeting={greeting}
                                                        onChange={greeting => setGreeting(greeting)}
                                                    />;
                                                    break;
                                                case OptionType.GuestComment:
                                                    children = <GuestCommentOption
                                                        guestComment={guestComment}
                                                        onChange={guestComment => setGuestComment(guestComment)}
                                                    />;
                                                    break;
                                                case OptionType.BaseMusic:
                                                    children = <BaseMusicOption
                                                        baseMusic={baseMusic}
                                                        onChange={baseMusic => setBaseMusic(baseMusic)}
                                                    />;
                                                    break;
                                                case OptionType.LinkShare:
                                                    children = <LinkShareOption
                                                        linkShare={linkShare}
                                                        onChange={linkShare => setLinkShare(linkShare)}
                                                    />;
                                                    break;
                                                case OptionType.MoneyInfo:
                                                    children = <MoneyInfoOption
                                                        moneyInfo={moneyInfo}
                                                        onChange={moneyInfo => setMoneyInfo(moneyInfo)}
                                                    />;
                                                    break;
                                                case OptionType.Video:
                                                    children = <VideoOption
                                                        video={video}
                                                        onChange={video => setVideo(video)}
                                                    />;
                                                    break;
                                                case OptionType.Phone:
                                                    children = <PhoneOption
                                                        phone={phone}
                                                        onChange={phone => setPhone(phone)}
                                                    />;
                                                    break;
                                                case OptionType.Rsvp:
                                                    children = <RsvpOption
                                                        rsvp={rsvp}
                                                        onChange={rsvp => setRsvp(rsvp)}
                                                    />;
                                                    break;
                                                case OptionType.Gallery:
                                                    children = <GalleryOption
                                                        imgList={imgList}
                                                        imgDesign={imgDesign}
                                                        onChangeImgDesign={setImgDesign}
                                                        onChangeImgList={setImgList}
                                                    />
                                                    break;
                                            }
                                            return (
                                                <OptionCell
                                                    {...provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    title={options[option].title}
                                                    children={children}
                                                />
                                            );
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </S.options>
                        )}
                    </Droppable>
                </DragDropContext>
            </S.optionContainer>
            <S.preview>
                <S.previewScrollableContent>
                    <S.previewContent>
                        <TemplateComponent wedding={wedding} isPreview={true}/>
                    </S.previewContent>
                </S.previewScrollableContent>
            </S.preview>
        </S.container>
    );
}

export default InvitationDesign;