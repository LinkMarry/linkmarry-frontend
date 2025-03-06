import React from 'react';
import MainWrapper from "@designsystem/pattern/header/MainWrapper";
import {Column, Row} from "@designsystem/core/FlexLayout";
import {css} from "styled-components";
import useResponsive from "@hook/useResponsive";
import Text from "@designsystem/component/Text";
import View from "@designsystem/core/View";
import WeddingStyleCell from "@src/component/WeddingStyleCell";
import TabBar, {dummyTabBarItems} from "@designsystem/component/TabBar";

function HomePage() {
    const {deviceSize} = useResponsive();

    return (
        <MainWrapper>
            <Column $alignItems={'center'} $ui={css`
                ${deviceSize === 'desktop' ? css`
                    padding: 72px 24px 40px 24px;
                ` : css`
                    padding: 24px 16px 40px 16px;
                `};
            `}>
                <Column $gap={40} $alignItems={'stretch'} $ui={css`
                    max-width: 1100px;
                    width: 100%;
                    flex: 1;
                `}>
                    {/*header*/}
                    <Column $gap={16} $alignItems={'center'}>
                        <Text type={deviceSize === 'desktop' ? 'h2' : 'h4'} bold={true} ui={css`
                            text-align: center;
                        `}>특별한 순간 특별한 초대<br/>
                            링크메리와 함께</Text>
                        <Text type={'p3'} ui={css`
                            text-align: center;
                            word-break: break-word;
                            color: var(--g-500);
                        `}>100가지가 넘는 다양한 스타일, 나만의 청첩장을 무료로 만들어볼 수 있습니다</Text>
                    </Column>
                    {/*content*/}
                    <Column $gap={16} $alignItems={'stretch'}>
                        <Row $justifyContent={'center'}>
                            <TabBar items={dummyTabBarItems} selectedTab={0} onChange={tab => {}}/>
                        </Row>
                        <View $ui={css`
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
                        </View>
                    </Column>
                </Column>
            </Column>
        </MainWrapper>
    )
}

export default HomePage;
