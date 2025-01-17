import React, {HTMLAttributes} from 'react';
import {Row} from "@designsystem/component/flexLayout";
import SegmentedButton from "@designsystem/component/segmentedButton";

interface OptionSegmentedButtonProps extends HTMLAttributes<HTMLDivElement> {
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