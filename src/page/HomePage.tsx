import React from 'react';
import HasHeader from "@designsystem/pattern/header/HasHeader";
import {Column, Row} from "@designsystem/component/FlexLayout";
import {css} from "styled-components";
import useResponsive from "@hook/useResponsive";
import Text from "@designsystem/component/Text";
import CustomStyle from "@designsystem/component/CustomStyle";
import WeddingStyleCell from "@src/component/WeddingStyleCell";
import Spacer from "@designsystem/component/Spacer";
import {hideScrollBar} from "@util/css.util";
import Divider from "@designsystem/component/Divider";
import Footer from "@src/component/Footer";

function HomePage() {
    const {deviceSize} = useResponsive();

    return (
        <HasHeader>
            <Column $alignItems={'center'} flex={1} $customStyle={css`
                ${deviceSize === 'desktop' ? css`
                    padding: 72px 24px 0 24px;
                ` : css`
                    padding: 24px 16px 0 16px;
                `}
                overflow-y: scroll;
            `}>
                <HomePageImpl/>
            </Column>
        </HasHeader>
    );
}

function HomePageImpl() {
    const {deviceSize} = useResponsive();

    return (
        <Column gap={40} $alignItems={'stretch'} $customStyle={css`
            max-width: 1100px;
            width: 100%;
            flex: 1;
        `}>
            {/*header*/}
            <Column gap={16} $alignItems={'center'}>
                <Text type={deviceSize === 'desktop' ? 'h2' : 'h4'} bold={true} customStyle={css`
                    text-align: center;
                `}>특별한 순간 특별한 초대<br/>
                    링크메리와 함께</Text>
                <Text type={'p3'} customStyle={css`
                    text-align: center;
                    word-break: break-word;
                    color: var(--g-500);
                `}>100가지가 넘는 다양한 스타일, 나만의 청첩장을 무료로 만들어볼 수 있습니다</Text>
            </Column>
            {/*content*/}
            <Column gap={16} $alignItems={'stretch'}>
                <Row $justifyContent={'center'}>
                    <Row gap={8} $customStyle={css`
                        overflow-x: scroll;
                        ${hideScrollBar};
                    `}>
                        <SegmentedButton selected={false} text={'모던'}/>
                        <SegmentedButton selected={true} text={'빈티지'}/>
                        <SegmentedButton selected={false} text={'레트로'}/>
                        <SegmentedButton selected={false} text={'로맨틱'}/>
                        <SegmentedButton selected={false} text={'클래식'}/>
                    </Row>
                </Row>
                <CustomStyle $customStyle={css`
                    display: grid;
                    max-width: 960px;
                    align-self: center;
                    width: 100%;
                    grid-template-columns: repeat(4, 1fr);
                    ${deviceSize === 'mobile' && css`
                        grid-template-columns: repeat(2, 1fr);
                    `};
                    grid-column-gap: 14px;
                    grid-row-gap: 32px;
                `}>
                    <WeddingStyleCell/>
                    <WeddingStyleCell/>
                    <WeddingStyleCell/>
                    <WeddingStyleCell/>
                    <WeddingStyleCell/>
                    <WeddingStyleCell/>
                </CustomStyle>
            </Column>
            <Divider/>
            <Footer/>
        </Column>
    )
}

function SegmentedButton(props: {
    selected: boolean;
    text: string;
}) {
    return (
        <Column $alignItems={'center'} $customStyle={css`
            min-width: 68px;
            padding: 10px 0;
            cursor: pointer;
            border-radius: 6px;
            transition: 0.1s background;
            position: relative;

            &:hover {
                background: var(--g-100);
            }

            &:active {
                background: var(--g-200);
            }
        `}>
            <Text type={'p3'} bold={true} customStyle={css`
                ${props.selected ? css`
                    color: var(--g-800);
                ` : css`
                    color: var(--g-500);
                `}
            `}>{props.text}</Text>
            {props.selected && (
                <CustomStyle $customStyle={css`
                    position: absolute;
                    width: 29px;
                    height: 2px;
                    border-radius: 10px;
                    background: var(--g-800);
                    bottom: 0;
                `}/>
            )}
        </Column>
    );
}

export default HomePage;