import {type ComponentPropsWithRef, type ForwardedRef, forwardRef} from 'react';
import Text from "~/userinterface/component/Text.tsx";
import {css} from "@linaria/core";
import Icon from "~/userinterface/foundation/Icon.tsx";
import EditorInspectorWrapper from "~/editor/component/inspector/EditorInspectorWrapper.tsx";
import {DragDropContext, Draggable, Droppable, type DropResult} from "@hello-pangea/dnd";
import View from "~/userinterface/core/View.tsx";
import {reorderedItems} from "~/shared/dnd-util.ts";
import type Binding from "~/shared/Binding.ts";
import {type WeddingDto} from "~/infrastructure/network/value/WeddingDto.ts";
import {positionMap} from "~/infrastructure/network/value/Position.ts";
import {type Position} from "~/infrastructure/network/value/Position.ts";


const EditorInspectorChangeOrder = (
    {
        value: {position},
        update,
    }: Binding<WeddingDto>
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
                        <View ref={provided.innerRef} ui={css`
                            gap: 12px;
                        `} {...provided.droppableProps}>
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
                        </View>
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
        <View ref={ref} ui={css`
            flex-direction: row !important;
            align-items: center;
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
                <Icon iconType={'Hamburger'} width={24} height={24} ui={css`
                    fill: var(--g-600);
                `}/>
            </View>
        </View>
    )
})

export default EditorInspectorChangeOrder;
