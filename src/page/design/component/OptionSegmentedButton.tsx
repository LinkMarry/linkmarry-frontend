import React, {ComponentPropsWithoutRef} from 'react';
import {Row} from "@designsystem/core/FlexLayout";

interface OptionSegmentedButtonProps extends ComponentPropsWithoutRef<'div'> {
    selectedIndex?: number;
    items: string[];
    onClickItem: (index: number) => void;
}

function OptionSegmentedButton(
    {
        selectedIndex,
        items,
        onClickItem,
        ...props
    }: OptionSegmentedButtonProps
) {
    return (
        <Row gap={8} {...props}>
            {/*{items.map((item, index) => (*/}
            {/*    <SegmentedButton*/}
            {/*        key={index}*/}
            {/*        onClick={() => {*/}
            {/*            onClickItem(index);*/}
            {/*        }}*/}
            {/*        selected={index === selectedIndex}*/}
            {/*    >{item}</SegmentedButton>*/}
            {/*))}*/}
        </Row>
    );
}

export default OptionSegmentedButton;
