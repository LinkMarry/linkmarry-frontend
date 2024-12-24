import React, {useState} from 'react';
import S from './CreateInvitationDesign.style';
import OptionCell from "./component/OptionCell";
import Preview from "./component/Preview";
import BaseInfoOption from "./component/BaseInfoOption";
import WeddingScheduleOption from "./component/WeddingScheduleOption";
import WeddingLocationOption from "./component/WeddingLocationOption";
import {allCasesOfEnum} from "../../../util/enum.util";
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import ReactDOM from "react-dom/client";

enum OptionType {
    Template,
    BaseInfo,
    WeddingSchedule,
    WeddingLocation
}

const options: {
    [key in OptionType]: {
        title: string;
        children: React.ReactNode;
    }
} = {
    [OptionType.Template]: {
        title: '템플릿',
        children: <>wow</>
    },
    [OptionType.BaseInfo]: {
        title: '기본 정보',
        children: <BaseInfoOption/>
    },
    [OptionType.WeddingSchedule]: {
        title: '예식 일시',
        children: <WeddingScheduleOption/>
    },
    [OptionType.WeddingLocation]: {
        title: '예식 장소',
        children: <WeddingLocationOption/>
    }
}

function CreateInvitationDesign() {
    const [items, setItems] = useState(allCasesOfEnum(OptionType));
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

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
                                        {provided => (
                                            <OptionCell
                                                {...provided.draggableProps}
                                                dragHandleProps={provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                title={options[option].title}
                                                children={options[option].children}/>
                                        )}
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