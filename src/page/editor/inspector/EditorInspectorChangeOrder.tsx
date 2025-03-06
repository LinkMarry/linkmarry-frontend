import React, {ComponentPropsWithRef, ForwardedRef, forwardRef} from 'react';
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";
import {css} from "styled-components";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import EditorInspectorWrapper from "@page/editor/inspector/EditorInspectorWrapper";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import View from "@designsystem/core/View";
import DndUtil from "@util/dnd.util";
import Binding from "@src/interface/Binding";
import WeddingDto from "@remote/value/WeddingDto";
import Positions, {positionMap} from "@remote/value/Positions";

interface Props extends Binding<WeddingDto> {
}

const EditorInspectorChangeOrder = (
    {
        value: {position},
        update,
    }: Props
) => {
    const onDragEnd = (result: DropResult) => {
        const reorderedItems = DndUtil.reorderedItems(result, position);

        if (reorderedItems) {
            update(draft => {
                draft.position = reorderedItems;
            });
        }
    };

    return (
        <EditorInspectorWrapper type={'changeOrder'}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={'EditorInspectorChangeOrder-droppable'}>
                    {provided => (
                        <Column ref={provided.innerRef} $alignItems={'stretch'} gap={12} {...provided.droppableProps}>
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
                                            text={positionMap[item as Positions].korean}
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
        <Row ref={ref} $alignItems={'center'} ui={css`
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid var(--g-300);
            background: white;
        `} {...props}>
            <Text type={'p2'} ui={css`
                flex: 1;
            `}>{text}</Text>
            <View ui={css`
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
