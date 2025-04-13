import React, {ComponentPropsWithRef, ForwardedRef, forwardRef} from 'react';
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import Icon, {IconType} from "@src/userinterface/foundation/Icon";
import EditorInspectorWrapper from "@src/feature/editor/component/inspector/EditorInspectorWrapper";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import View from "@src/userinterface/core/View";
import {reorderedItems} from "@src/shared/dnd-util";
import Binding from "@src/shared/Binding";
import WeddingDto from "@src/infrastructure/network/value/WeddingDto";
import Position, {positionMap} from "@src/infrastructure/network/value/Position";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorChangeOrder = (
    {
        value: {position},
        update,
    }: Props
) => {
    const onDragEnd = (result: DropResult) => {
        const items = reorderedItems(result, position);

        if (items) {
            update(draft => {
                draft.position = items;
            });
        }
    };

    return (
        <EditorInspectorWrapper type={'changeOrder'}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'EditorInspectorChangeOrder-droppable'}>
                    {provided => (
                        <Column ref={provided.innerRef} $alignItems={'stretch'} $gap={12} {...provided.droppableProps}>
                            {position.map((item, index) => (
                                <Draggable
                                    key={String(item)}
                                    draggableId={String(item)}
                                    index={index}
                                >
                                    {provided => (
                                        <Item
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            text={positionMap[item as Position].korean}
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

interface ItemProps extends ComponentPropsWithRef<'div'> {
    text: string;
}

const Item = forwardRef(({text, ...props}: ItemProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return (
        <Row ref={ref} $alignItems={'center'} $ui={css`
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
            background: white;
        `} {...props}>
            <Text type={'p2'} ui={css`
                flex: 1;
            `}>{text}</Text>
            <View $ui={css`
                display: flex;
            `}>
                <Icon iconType={IconType.Hamburger} width={24} height={24} ui={css`
                    fill: var(--g-600);
                `}/>
            </View>
        </Row>
    )
})

export default EditorInspectorChangeOrder;
