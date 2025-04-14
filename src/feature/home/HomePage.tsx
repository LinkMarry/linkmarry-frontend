import React from 'react';
import MainWrapper from "@src/userinterface/pattern/header/MainWrapper";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import useResponsive from "@src/hook/useResponsive";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";
import WeddingDesignPresetCell from "@src/userinterface/specific/WeddingStyleCell";
import TabBar from "@src/userinterface/component/TabBar";
import Loading from "@src/userinterface/specific/Loading";
import useHome from "@src/feature/home/useHome";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

function HomePage() {
    const {deviceSize} = useResponsive();
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} = useHome();

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
                    <Header/>
                    <Column $gap={16} $alignItems={'stretch'}>
                        <TabBarSection
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <WeddingDesignPresetBody selectedWeddingDesigns={selectedWeddingDesigns}/>
                    </Column>
                </Column>
            </Column>
        </MainWrapper>
    )
}

const Header = () => {
    const {deviceSize} = useResponsive();
    return (
        <Column $gap={16} $alignItems={'center'}>
            <Text type={deviceSize === 'desktop' ? 'h2' : 'h4'} bold={true} ui={css`
                text-align: center;
            `}>특별한 순간 특별한 초대<br/>
                링크메리와 함께</Text>
            <Text type={'p3'} ui={css`
                text-align: center;
                word-break: break-word;
                color: var(--g-500);
            `}>다양한 스타일, 나만의 청첩장을 무료로 만들어볼 수 있습니다</Text>
        </Column>
    );
};

const TabBarSection = ({categories, selectedCategory, setSelectedCategory}: {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}) => {
    if (categories.length === 0) {
        return null;
    }

    return (
        <Row $justifyContent={'center'}>
            <TabBar
                items={categories}
                selectedTab={categories.indexOf(selectedCategory!)}
                onChange={tab => {
                    setSelectedCategory(categories[tab]);
                }}
            />
        </Row>
    );
};

const WeddingDesignPresetBody = ({selectedWeddingDesigns}: {
    selectedWeddingDesigns: WeddingDesignPreset[];
}) => {
    const {deviceSize} = useResponsive();
    if (selectedWeddingDesigns.length > 0) {
        return (
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
                {selectedWeddingDesigns.map(design => (
                    <WeddingDesignPresetCell key={design.id} weddingDesign={design}/>
                ))}
            </View>
        );
    } else {
        return (
            <Loading ui={css`
                margin-top: 40px;
            `}/>
        );
    }
};

export default HomePage;
