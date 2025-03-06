import React from 'react';
import {fontList, textTypes} from "@designsystem/foundation/text/TextType";
import Icon, {IconType} from "@designsystem/foundation/Icon";
import {css} from "styled-components";
import {allCasesOfEnum} from "@util/enum.util";
import View from "@designsystem/core/View";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import Divider from "@designsystem/component/Divider";

function FoundationDemo() {
    return (
        <Column $gap={20} $ui={css`
            padding: 20px;
        `}>
            <Column>
                {textTypes.map((type) => (
                    <>
                        <Text type={type}>가나다라마바사ABCDEFG</Text>
                        <Text type={type} bold={true}>가나다라마바사ABCDEFG</Text>
                    </>
                ))}
            </Column>
            <Divider/>
            <Column $gap={20}>
                {fontList.map(font => (
                    <Row>
                        <Text type={'p3'} ui={css`
                            width: 256px;
                        `}>{font}</Text>
                        <Column>
                            <Text type={'h3'} weight={100} font={font}>가나다라마바사ABCDEFG</Text>
                            <Text type={'h3'} weight={500} font={font}>가나다라마바사ABCDEFG</Text>
                            <Text type={'h3'} weight={700} font={font}>가나다라마바사ABCDEFG</Text>
                        </Column>
                    </Row>
                ))}
            </Column>
            <Divider/>
            <View $ui={css`
                display: flex;
                flex-wrap: wrap;
                width: 256px;
            `}>
                {allCasesOfEnum(IconType)
                    .map((icon) => (
                        <Icon iconType={icon} size={32} ui={css`
                            fill: gray;
                        `}/>
                    ))}
            </View>
        </Column>
    );
}

export default FoundationDemo;
