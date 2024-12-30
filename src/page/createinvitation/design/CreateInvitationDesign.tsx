import React, {useRef, useState} from 'react';
import S from './CreateInvitationDesign.style';
import OptionCell from "./component/OptionCell";
import Preview from "./component/Preview";
import {allCasesOfEnum} from "../../../util/enum.util";
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import {options, OptionType} from "./OptionType";
import BaseInfoOption from "./option/BaseInfoOption";
import BaseInfo from "../../../remote/data/value/BaseInfo";
import WeddingScheduleOption from "./option/WeddingScheduleOption";
import WeddingLocationOption from "./option/WeddingLocationOption";
import GreetingOption from "./option/GreetingOption";
import GuestCommentOption from "./option/GuestCommentOption";
import BaseMusicOption from "./option/BaseMusicOption";
import LinkShareOption from "./option/LinkShareOption";
import MoneyInfoOption from "./option/MoneyInfoOption";
import VideoOption from "./option/VideoOption";
import PhoneOption from "./option/PhoneOption";
import RsvpOption from "./option/RsvpOption";

interface CreateInvitationDesignProps {
}

function CreateInvitationDesign(
    {}: CreateInvitationDesignProps
) {
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
                <S.title>청첩장 제작</S.title>
                <S.titleDescription>원하는 청첩장을 만들어보세요!</S.titleDescription>
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
                                                    children = <></>;
                                                    break;
                                                case OptionType.BaseInfo:
                                                    children = <BaseInfoOption refs={{}}/>
                                                    break;
                                                case OptionType.WeddingSchedule:
                                                    children = <WeddingScheduleOption
                                                        refs={{}}/>
                                                    break;
                                                case OptionType.WeddingLocation:
                                                    children = <WeddingLocationOption/>
                                                    break;
                                                case OptionType.Greeting:
                                                    children = <GreetingOption/>
                                                    break;
                                                case OptionType.GuestComment:
                                                    children = <GuestCommentOption/>
                                                    break;
                                                case OptionType.BaseMusic:
                                                    children = <BaseMusicOption/>
                                                    break;
                                                case OptionType.LinkShare:
                                                    children = <LinkShareOption/>
                                                    break;
                                                case OptionType.MoneyInfo:
                                                    children = <MoneyInfoOption/>
                                                    break;
                                                case OptionType.Video:
                                                    children = <VideoOption/>
                                                    break;
                                                case OptionType.Phone:
                                                    children = <PhoneOption/>
                                                    break;
                                                case OptionType.Rsvp:
                                                    children = <RsvpOption/>
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
                                            )
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

export default CreateInvitationDesign;