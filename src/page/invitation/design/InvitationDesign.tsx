import React, {useEffect, useState} from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import S from '@page/invitation/design/InvitationDesign.style';
import OptionCell from "@page/invitation/design/component/OptionCell";
import {allCasesOfEnum} from "@util/enum.util";
import {optionRecord, OptionType} from "@page/invitation/design/OptionType";
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
import {useNavigate, useParams} from "react-router-dom";
import {defaultTemplate} from "@remote/value/Template";
import {defaultBaseInfo} from "@remote/value/BaseInfo";
import {defaultWeddingSchedule} from "@remote/value/WeddingSchedule";
import {defaultWeddingPlace} from "@remote/value/WeddingPlace";
import {defaultGreeting} from "@remote/value/Greeting";
import {defaultGuestComment} from "@remote/value/GuestComment";
import {defaultMoneyInfo} from "@remote/value/MoneyInfo";
import {defaultPhone} from "@remote/value/Phone";
import {defaultRsvp} from "@remote/value/Rsvp";
import {defaultLinkShare} from "@remote/value/LinkShare";
import {defaultBaseMusic} from "@remote/value/BaseMusic";
import {defaultVideo} from "@remote/value/Video";
import {dummyComments} from "@remote/value/Comment";
import Wedding from "@remote/value/Wedding";
import TemplateComponent from "@src/component/template/TemplateComponent";
import GalleryOption from "@page/invitation/design/option/GalleryOption";
import ImgDesign from "@remote/enumeration/ImgDesign";
import weddingApi from "@remote/api/WeddingApi";
import WeddingDto from "@remote/value/WeddingDto";

type DesignMode = 'create' | 'edit';

function InvitationDesign() {
    const {url} = useParams();
    const navigate = useNavigate();
    const [mode, setMode] = useState<DesignMode>();
    const [wedding, setWedding] = useState<WeddingDto>({
        url: url!!,
        position: [],
        template: defaultTemplate,
        baseInfo: defaultBaseInfo,
        weddingSchedule: defaultWeddingSchedule,
        weddingPlace: defaultWeddingPlace,
        greeting: defaultGreeting,
        guestComment: defaultGuestComment,
        baseMusic: defaultBaseMusic,
        linkShare: defaultLinkShare,
        moneyInfo: defaultMoneyInfo,
        video: defaultVideo,
        phone: defaultPhone,
        rsvp: defaultRsvp,
        imgList: [],
        imgDesign: ImgDesign.SLIDE,
    });

    const weddingForPreview: Wedding = {
        url: url ?? '',
        position: wedding.position,
        template: wedding.template,
        baseInfo: wedding.baseInfo,
        weddingSchedule: wedding.weddingSchedule,
        weddingPlace: wedding.weddingPlace,
        greeting: wedding.greeting,
        guestComment: wedding.guestComment,
        guestCommentList: dummyComments,
        baseMusic: wedding.baseMusic,
        linkShare: wedding.linkShare,
        moneyInfo: wedding.moneyInfo,
        video: wedding.video,
        phone: wedding.phone,
        rsvp: wedding.rsvp,
        imgList: wedding.imgList,
        imgDesign: wedding.imgDesign,
        waterMark: false
    }
    // Drag and drop
    const staticOptions = allCasesOfEnum(OptionType).filter(option => !optionRecord[option].draggable);
    const [draggableOptions, setDraggableOptions] = useState(allCasesOfEnum(OptionType).filter(option => optionRecord[option].draggable));
    const position = draggableOptions.map(option => optionRecord[option].index);
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(draggableOptions);
        const [removed] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, removed);

        setDraggableOptions(reorderedItems);
    };

    useEffect(() => {
        if (!url) {
            navigate('/');
            return;
        }

        (async () => {
            try {
                const {data} = await weddingApi.getWedding(url);
                setMode('edit');
                loadTemp(data);
            } catch (error) {
                console.error(error);
                setMode('create');
            }
        })();
    }, []);

    useEffect(() => {
        console.log(position)
        setWedding({...wedding, position});
    }, [JSON.stringify(position)]);

    const loadTemp = (alt: WeddingDto) => {
        const temp = localStorage.getItem(`temp_Design_${url}`);
        localStorage.removeItem(`temp_Design_${url}`);
        if (temp === null) {
            setWedding(alt);
            console.log('temp is null');
            return;
        }

        const isLoad = window.confirm('임시 저장된 디자인이 있습니다. 불러오시겠습니까?');
        if (!isLoad) {
            setWedding(alt);
            return;
        }

        const wedding: WeddingDto = JSON.parse(temp);
        setWedding(wedding);
    }

    const onChangeWedding = (wedding: WeddingDto) => {
        localStorage.setItem(`temp_Design_${url}`, JSON.stringify(wedding));
        setWedding(wedding);
    }

    const saveDesign = async () => {
        // TODO: Validation
        switch (mode) {
            case 'create':
                await weddingApi.createWedding(wedding);
                setMode('edit');
                alert('청첩장 생성되었습니다');
                break;
            case 'edit':
                await weddingApi.editWedding(wedding);
                alert('청첩장이 수정되었습니다');
                break;
        }
    };

    const makeOption = (option: OptionType) => {
        switch (option) {
            case OptionType.Template:
                return <TemplateOption
                    template={wedding.template}
                    onChange={template => onChangeWedding({...wedding, template})}
                />;
            case OptionType.BaseInfo:
                return <BaseInfoOption
                    baseInfo={wedding.baseInfo}
                    onChange={baseInfo => onChangeWedding({...wedding, baseInfo})}
                />;
            case OptionType.WeddingSchedule:
                return <WeddingScheduleOption
                    weddingSchedule={wedding.weddingSchedule}
                    onChange={weddingSchedule => onChangeWedding({
                        ...wedding,
                        weddingSchedule
                    })}
                />;
            case OptionType.WeddingPlace:
                return <WeddingPlaceOption
                    weddingPlace={wedding.weddingPlace}
                    onChange={weddingPlace => onChangeWedding({
                        ...wedding,
                        weddingPlace
                    })}
                />;
            case OptionType.Greeting:
                return <GreetingOption
                    greeting={wedding.greeting}
                    onChange={greeting => onChangeWedding({...wedding, greeting})}
                />;
            case OptionType.GuestComment:
                return <GuestCommentOption
                    guestComment={wedding.guestComment}
                    onChange={guestComment => onChangeWedding({
                        ...wedding,
                        guestComment
                    })}
                />;
            case OptionType.BaseMusic:
                return <BaseMusicOption
                    baseMusic={wedding.baseMusic}
                    onChange={baseMusic => onChangeWedding({...wedding, baseMusic})}
                />;
            case OptionType.LinkShare:
                return <LinkShareOption
                    linkShare={wedding.linkShare}
                    onChange={linkShare => onChangeWedding({...wedding, linkShare})}
                />;
            case OptionType.MoneyInfo:
                return <MoneyInfoOption
                    moneyInfo={wedding.moneyInfo}
                    onChange={moneyInfo => onChangeWedding({...wedding, moneyInfo})}
                />;
            case OptionType.Video:
                return <VideoOption
                    video={wedding.video}
                    onChange={video => onChangeWedding({...wedding, video})}
                />;
            case OptionType.Phone:
                return <PhoneOption
                    phone={wedding.phone}
                    onChange={phone => onChangeWedding({...wedding, phone})}
                />;
            case OptionType.Rsvp:
                return <RsvpOption
                    rsvp={wedding.rsvp}
                    onChange={rsvp => onChangeWedding({...wedding, rsvp})}
                />;
            case OptionType.Gallery:
                return <GalleryOption
                    imgList={wedding.imgList}
                    imgDesign={wedding.imgDesign}
                    onChangeImgDesign={imgDesign => onChangeWedding({
                        ...wedding,
                        imgDesign
                    })}
                    onChangeImgList={imgList => onChangeWedding({
                        ...wedding,
                        imgList
                    })}
                />
        }
    }

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
                                {staticOptions.map((option, index) => (
                                    <OptionCell
                                        key={index}
                                        draggable={optionRecord[option].draggable}
                                        title={optionRecord[option].title}
                                    >{makeOption(option)}</OptionCell>
                                ))}
                                {draggableOptions.map((option, index) => (
                                    <Draggable
                                        key={`${option}`}
                                        draggableId={`${option}`}
                                        index={index}
                                    >
                                        {provided => {
                                            return (
                                                <OptionCell
                                                    {...provided.draggableProps}
                                                    draggable={optionRecord[option].draggable}
                                                    dragHandleProps={provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    title={optionRecord[option].title}
                                                >{makeOption(option)}</OptionCell>
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
                        <TemplateComponent wedding={weddingForPreview} isPreview={true}/>
                    </S.previewContent>
                </S.previewScrollableContent>
            </S.preview>
        </S.container>
    );
}

export default InvitationDesign;