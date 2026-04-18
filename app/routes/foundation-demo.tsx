import {fontFamilyList, textTypes} from "~/components/core/text/TextType.ts";
import {css} from "@linaria/core";
import View from "~/components/core/View.tsx";
import Text from "~/components/core/Text.tsx";
import Divider from "~/components/core/Divider.tsx";

const text = '가나다라마바사ABCDEFG12345'

function FoundationDemo() {
    return (
        <View ui={css`
            gap: 20px;
            align-items: flex-start;
            padding: 20px;
        `}>
            <View ui={css`
                align-items: flex-start;
            `}>
                {textTypes.map((type) => (
                    <>
                        <Text type={type}>{text}</Text>
                        <Text type={type} bold={true}>{text}</Text>
                    </>
                ))}
            </View>
            <Divider/>
            <View ui={css`
                align-items: flex-start;
                gap: 20px;
            `}>
                {fontFamilyList.map(font => (
                    <View ui={css`
                        flex-direction: row !important;
                        align-items: flex-start;
                    `}>
                        <Text type={'p3'} ui={css`
                            width: 256px;
                        `}>{font}</Text>
                        <View ui={css`
                            align-items: flex-start;
                        `}>
                            <Text type={'h3'} weight={100} font={font}>{text}</Text>
                            <Text type={'h3'} weight={500} font={font}>{text}</Text>
                            <Text type={'h3'} weight={700} font={font}>{text}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <Divider/>
            <View ui={css`
                display: flex;
                flex-wrap: wrap;
                width: 256px;
            `}>
                {/*TODO*/}
                {/*{allCasesOfEnum(IconType)*/}
                {/*    .map((icon) => (*/}
                {/*        <Icon iconType={icon} size={32} ui={css`*/}
                {/*            fill: gray;*/}
                {/*        `}/>*/}
                {/*    ))}*/}
            </View>
        </View>
    );
}

export default FoundationDemo;
