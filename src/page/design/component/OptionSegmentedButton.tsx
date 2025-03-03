import React, {ComponentPropsWithoutRef, HTMLAttributes} from 'react';
import {Row} from "@designsystem/core/FlexLayout";
import SegmentedButton from "@designsystem/component/SegmentedButton";

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
            {items.map((item, index) => (
                <SegmentedButton
                    key={index}
                    onClick={() => {
                        onClickItem(index);
                    }}
                    selected={index === selectedIndex}
                >{item}</SegmentedButton>
            ))}
        </Row>
    );
}

export default OptionSegmentedButton;
