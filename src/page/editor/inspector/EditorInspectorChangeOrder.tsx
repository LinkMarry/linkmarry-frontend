import React, {ComponentPropsWithRef, ForwardedRef, forwardRef, useState} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import {DragDropContext, Draggable, DraggableProvidedDragHandleProps, Droppable, DropResult} from "react-beautiful-dnd";
import CustomStyle from "@designsystem/core/CustomStyle";
import DndUtil from "@util/dnd.util";

const EditorInspectorChangeOrder = () => {
    const [dummyPositions, setDummyPositions] = useState([
        {
            id: 1,
            text: 'Option1'
        },
        {
            id: 2,
            text: 'Option2'
        },
        {
            id: 3,
            text: 'Option3'
        },
        {
            id: 4,
            text: 'Option4'
        }
    ]);

    const onDragEnd = (result: DropResult) => {
        const reorderedItems = DndUtil.reorderedItems(result, dummyPositions);

        if (reorderedItems) {
            setDummyPositions(reorderedItems);
        }
    };

    return (
        <EditorInspectorWrapper title={'순서변경'}>
            <Divider/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'EditorInspectorChangeOrder-droppable'}>
                    {provided => (
                        <Column ref={provided.innerRef} $alignItems={'stretch'} gap={12} {...provided.droppableProps}>
                            {dummyPositions.map((item, index) => (
                                <Draggable
                                    key={String(item.id)}
                                    draggableId={String(item.id)}
                                    index={index}
                                >
                                    {provided => (
                                        <Item
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            text={item.text}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </Column>
                    )}
                </Droppable>
            </DragDropContext>
        </EditorInspectorWrapper>
    );
};

interface Props extends ComponentPropsWithRef<'div'> {
    text: string;
}

const Item = forwardRef(({text, ...props}: Props, ref?: ForwardedRef<HTMLDivElement>) => {
    return (
        <Row ref={ref} $alignItems={'center'} $customStyle={css`
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
            background: white;
        `} {...props}>
            <Text type={'p2'} customStyle={css`
                flex: 1;
            `}>{text}</Text>
            <CustomStyle $customStyle={css`
                display: flex;
            `}>
                <Icon iconType={IconType.Hamburger} width={24} height={24} customStyle={css`
                    fill: var(--g-600);
                `}/>
            </CustomStyle>
        </Row>
    )
})

export default EditorInspectorChangeOrder;
