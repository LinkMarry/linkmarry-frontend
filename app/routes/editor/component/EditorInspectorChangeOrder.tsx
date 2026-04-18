import {type ComponentPropsWithRef, type ForwardedRef, forwardRef} from 'react';
import Text from "~/components/core/Text.tsx";
import {css} from "@linaria/core";
import Icon from "~/components/core/icon";
import EditorInspectorWrapper from "~/routes/editor/component/EditorInspectorWrapper.tsx";
import {DragDropContext, Draggable, Droppable, type DropResult} from "@hello-pangea/dnd";
import View from "~/components/core/View.tsx";
import {reorderedItems} from "~/lib/dnd-util.ts";
import type Binding from "~/lib/Binding.ts";
import {positionMap} from "~/api/value/Position.ts";
import {type Position} from "~/api/value/Position.ts";
import type Wedding from "~/api/value/Wedding.ts";


const EditorInspectorChangeOrder = (
    {
        value: {position},
        update,
    }: Binding<Wedding>
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
