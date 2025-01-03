import React, {useRef, useState} from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import S from '@page/invitation/design/InvitationDesign.style';
import OptionCell from "@page/invitation/design/component/OptionCell";
import Preview from "@page/invitation/design/component/Preview";
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
import {CheckboxRef} from "@designsystem/component/checkbox";
import {Column, Row} from "@designsystem/component/flexLayout";
import Text from "@designsystem/component/text";
import {TextType} from "@designsystem/foundation/text/textType";
import colors from "@designsystem/foundation/colors";
import Spacer from "@designsystem/component/spacer";
import Button from "@designsystem/component/button";
import TemplateOption from "@page/invitation/design/option/TemplateOption";

function InvitationDesign() {
    // BaseInfoOption refs
    const groomNameRef = useRef<HTMLInputElement>(null);
    const groomFatherNameRef = useRef<HTMLInputElement>(null);
    const groomFatherStatusRef = useRef<CheckboxRef>(null);
    const groomMotherNameRef = useRef<HTMLInputElement>(null);
    const groomFamilyNameRef = useRef<HTMLInputElement>(null);
    const groomMotherStatusRef = useRef<CheckboxRef>(null);
    const brideNameRef = useRef<HTMLInputElement>(null);
    const brideFatherNameRef = useRef<HTMLInputElement>(null);
    const brideFatherStatusRef = useRef<CheckboxRef>(null);
    const brideMotherNameRef = useRef<HTMLInputElement>(null);
    const brideFamilyNameRef = useRef<HTMLInputElement>(null);
    const brideMotherStatusRef = useRef<CheckboxRef>(null);
    const statusFlowerRef = useRef<CheckboxRef>(null);
    const brideMarkFirstRef = useRef<CheckboxRef>(null);

    // WeddingSchedule refs
    const weddingDateRef = useRef<HTMLInputElement>(null);
    const weddingTimeRef = useRef<HTMLInputElement>(null);
    const calendarRef = useRef<CheckboxRef>(null);
    const dDayRef = useRef<CheckboxRef>(null);

    // WeddingLocation refs
    const placeNameRef = useRef<HTMLInputElement>(null);
    const placeTelRef = useRef<HTMLInputElement>(null);
    const placeTransportationRef = useRef<HTMLInputElement>(null);
    const placeStatusRef = useRef<CheckboxRef>(null);

    // Greeting refs
    const greetingTitleRef = useRef<HTMLInputElement>(null);
    const greetingContentRef
        = useRef<HTMLTextAreaElement>(null);

    // GuestComment refs
    const titleRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLInputElement>(null);
    const designRef = useRef<HTMLInputElement>(null);
    const privateContentRef = useRef<CheckboxRef>(null);
    const privateDateRef = useRef<CheckboxRef>(null);

    // BaseMusic refs
    const effectRef = useRef<CheckboxRef>(null);

    // MoneyInfo refs
    const infoTitleRef = useRef<HTMLInputElement>(null);
    const infoContentRef = useRef<HTMLInputElement>(null);
    const kakaoStatusRef = useRef<CheckboxRef>(null);
    const groomNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const groomBankNameRef = useRef<HTMLInputElement>(null);
    const groomBankNumberRef = useRef<HTMLInputElement>(null);
    const groomKakaoUrlRef = useRef<HTMLInputElement>(null);
    const groomFatherNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const groomFatherBankNameRef = useRef<HTMLInputElement>(null);
    const groomFatherBankNumberRef = useRef<HTMLInputElement>(null);
    const groomFatherKakaoUrlRef = useRef<HTMLInputElement>(null);
    const groomMotherNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const groomMotherBankNameRef = useRef<HTMLInputElement>(null);
    const groomMotherBankNumberRef = useRef<HTMLInputElement>(null);
    const groomMotherKakaoUrlRef = useRef<HTMLInputElement>(null);
    const brideNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const brideBankNameRef = useRef<HTMLInputElement>(null);
    const brideBankNumberRef = useRef<HTMLInputElement>(null);
    const brideKakaoUrlRef = useRef<HTMLInputElement>(null);
    const brideFatherNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const brideFatherBankNameRef = useRef<HTMLInputElement>(null);
    const brideFatherBankNumberRef = useRef<HTMLInputElement>(null);
    const brideFatherKakaoUrlRef = useRef<HTMLInputElement>(null);
    const brideMotherNameMoneyInfoRef = useRef<HTMLInputElement>(null);
    const brideMotherBankNameRef = useRef<HTMLInputElement>(null);
    const brideMotherBankNumberRef = useRef<HTMLInputElement>(null);
    const brideMotherKakaoUrlRef = useRef<HTMLInputElement>(null);

    // VideoOption refs
    const videoTitleRef = useRef<HTMLInputElement>(null);
    const videoUrlRef = useRef<HTMLInputElement>(null);

    // PhoneOption refs
    const groomTelRef = useRef<HTMLInputElement>(null);
    const groomFatherTelRef = useRef<HTMLInputElement>(null);
    const groomMotherTelRef = useRef<HTMLInputElement>(null);
    const brideTelRef = useRef<HTMLInputElement>(null);
    const brideFatherTelRef = useRef<HTMLInputElement>(null);
    const brideMotherTelRef = useRef<HTMLInputElement>(null);

    // RsvpOption refs
    const rsvpTitleRef = useRef<HTMLInputElement>(null);
    const rsvpContentRef = useRef<HTMLInputElement>(null);
    const attendStatusRef = useRef<CheckboxRef>(null);
    const attendMealStatusRef = useRef<CheckboxRef>(null);
    const attendGuestCntStatusRef = useRef<CheckboxRef>(null);
    const attendPhoneStatusRef = useRef<CheckboxRef>(null);
    const attendEtcStatusRef = useRef<CheckboxRef>(null);
    const startPopupStatusRef = useRef<CheckboxRef>(null);
    const startPopupMessageRef = useRef<HTMLTextAreaElement>(null);

    // Drag and drop
    const [items, setItems] = useState(allCasesOfEnum(OptionType));
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setItems(reorderedItems);
    };

    return (
        <S.container>
            <S.optionContainer>
                <Row $alignItems={'flex-end'}>
                    <Column gap={8}>
                        <Text text={'청첩장 제작'} type={TextType.h5}/>
                        <Text text={'원하는 청첩장을 만들어보세요!'} type={TextType.p3} color={colors.g500}/>
                    </Column>
                    <Spacer/>
                    <Button text={'저장하기'} size={'small'}/>
                </Row>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={'droppable'}>
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
                                                    children = <TemplateOption/>;
                                                    break;
                                                case OptionType.BaseInfo:
                                                    children = <BaseInfoOption refs={{
                                                        groomNameRef,
                                                        groomFatherNameRef,
                                                        groomFatherStatusRef,
                                                        groomMotherNameRef,
                                                        groomFamilyNameRef,
                                                        groomMotherStatusRef,
                                                        brideNameRef,
                                                        brideFatherNameRef,
                                                        brideFatherStatusRef,
                                                        brideMotherNameRef,
                                                        brideFamilyNameRef,
                                                        brideMotherStatusRef,
                                                        statusFlowerRef,
                                                        brideMarkFirstRef,
                                                    }}/>
                                                    break;
                                                case OptionType.WeddingSchedule:
                                                    children = <WeddingScheduleOption
                                                        refs={{
                                                            weddingDateRef,
                                                            weddingTimeRef,
                                                            calendarRef,
                                                            dDayRef
                                                        }}/>
                                                    break;
                                                case OptionType.WeddingLocation:
                                                    children = <WeddingPlaceOption
                                                        refs={{
                                                            placeNameRef,
                                                            placeTelRef,
                                                            placeTransportationRef,
                                                            placeStatusRef,
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.Greeting:
                                                    children = <GreetingOption
                                                        refs={{
                                                            greetingTitleRef,
                                                            greetingContentRef
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.GuestComment:
                                                    children = <GuestCommentOption
                                                        refs={{
                                                            titleRef,
                                                            contentRef,
                                                            designRef,
                                                            privateContentRef,
                                                            privateDateRef,
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.BaseMusic:
                                                    children = <BaseMusicOption
                                                        refs={{
                                                            effectRef
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.LinkShare:
                                                    children = <LinkShareOption/>
                                                    break;
                                                case OptionType.MoneyInfo:
                                                    children = <MoneyInfoOption
                                                        refs={{
                                                            infoTitleRef,
                                                            infoContentRef,
                                                            kakaoStatusRef,
                                                            groomNameMoneyInfoRef,
                                                            groomBankNameRef,
                                                            groomBankNumberRef,
                                                            groomKakaoUrlRef,
                                                            groomFatherNameMoneyInfoRef,
                                                            groomFatherBankNameRef,
                                                            groomFatherBankNumberRef,
                                                            groomFatherKakaoUrlRef,
                                                            groomMotherNameMoneyInfoRef,
                                                            groomMotherBankNameRef,
                                                            groomMotherBankNumberRef,
                                                            groomMotherKakaoUrlRef,
                                                            brideNameMoneyInfoRef,
                                                            brideBankNameRef,
                                                            brideBankNumberRef,
                                                            brideKakaoUrlRef,
                                                            brideFatherNameMoneyInfoRef,
                                                            brideFatherBankNameRef,
                                                            brideFatherBankNumberRef,
                                                            brideFatherKakaoUrlRef,
                                                            brideMotherNameMoneyInfoRef,
                                                            brideMotherBankNameRef,
                                                            brideMotherBankNumberRef,
                                                            brideMotherKakaoUrlRef,
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.Video:
                                                    children = <VideoOption
                                                        refs={{
                                                            videoTitleRef,
                                                            videoUrlRef
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.Phone:
                                                    children = <PhoneOption
                                                        refs={{
                                                            groomTelRef,
                                                            groomFatherTelRef,
                                                            groomMotherTelRef,
                                                            brideTelRef,
                                                            brideFatherTelRef,
                                                            brideMotherTelRef,
                                                        }}
                                                    />
                                                    break;
                                                case OptionType.Rsvp:
                                                    children = <RsvpOption
                                                        refs={{
                                                            rsvpTitleRef,
                                                            rsvpContentRef,
                                                            attendStatusRef,
                                                            attendMealStatusRef,
                                                            attendGuestCntStatusRef,
                                                            attendPhoneStatusRef,
                                                            attendEtcStatusRef,
                                                            startPopupStatusRef,
                                                            startPopupMessageRef
                                                        }}
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
            <Preview/>
        </S.container>
    );
}

export default InvitationDesign;