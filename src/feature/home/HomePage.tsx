import MainWrapper from "@src/userinterface/pattern/header/MainWrapper";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import {css} from "styled-components";
import Text from "@src/userinterface/component/Text";
import View from "@src/userinterface/core/View";
import WeddingDesignPresetCell from "@src/userinterface/specific/WeddingStyleCell";
import TabBar from "@src/userinterface/component/TabBar";
import Loading from "@src/userinterface/specific/Loading";
import useWeddingDesigns from "@src/hook/useWeddingDesigns";
import type WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";
import {desktopStyle, mobileStyle, notDesktopStyle, notMobileStyle, responsive} from "@src/hook/ResponsiveSwitch.tsx";

function HomePage() {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} = useWeddingDesigns();

    return (
        <MainWrapper>
            <Column $alignItems={'center'} $ui={css`
                ${responsive.desktop(css`
                    padding: 72px 24px 40px 24px;
                `)};
                ${responsive.notDesktop(css`
                    padding: 24px 16px 40px 16px;
                `)};
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
            {/*TODO*/}
            {/*<div style={{position: 'absolute', left: '-9999px'}}>*/}
            {/*    <h1>모바일 청첩장</h1>*/}
            {/*    <p>모바일 청첩장은 스마트폰으로 간편하게 결혼식 초대장을 보낼 수 있는 서비스입니다. 무료 모바일 청첩장, 디지털 청첩장, 카카오톡 청첩장, 모바일 청첩장 템플릿을 제공하여 결혼을 더욱*/}
            {/*        특별하게 만들어 드립니다.</p>*/}
            {/*</div>*/}
        </MainWrapper>
    )
}

const Header = () => {
    return (
        <Column $gap={16} $alignItems={'center'}>
            {/*TODO: Refactor*/}
            <Text type={'h2'} bold={true} ui={css`
                text-align: center;
                ${desktopStyle};
            `}>특별한 순간 특별한 초대<br/>
                링크메리와 함께</Text>
            <Text type={'h4'} bold={true} ui={css`
                text-align: center;
                ${notDesktopStyle};
            `}>특별한 순간 특별한 초대<br/>
                링크메리와 함께</Text>
            <Text type={'p3'} ui={css`
                text-align: center;
                word-break: break-word;
                color: var(--g-500);
                ${mobileStyle};
            `}>다양한 스타일, 나만의 청첩장을{<br/>}무료로 만들어볼 수 있습니다</Text>
            <Text type={'p3'} ui={css`
                text-align: center;
                word-break: break-word;
                color: var(--g-500);
                ${notMobileStyle};
            `}>다양한 스타일, 나만의 청첩장을{' '}무료로 만들어볼 수 있습니다</Text>
            <Text type={'p3'} ui={css`
                text-align: center;
                word-break: break-word;
                color: var(--g-500);
                display: none;
            `}>모바일 청첩장, 무료 모바일 청첩장, 디지털 청첩장, 카카오톡 청첩장, 모바일 청첩장 템플릿을 제공하는 링크메리와 함께 결혼을 더욱 특별하게.</Text>
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
    if (selectedWeddingDesigns.length === 0) {
        return (
            <Loading ui={css`
                margin-top: 40px;
                margin-bottom: 500px;
            `}/>
        );
    }

    return (
        <View $ui={css`
            display: grid;
            max-width: 960px;
            align-self: center;
            width: 100%;
            grid-template-columns: repeat(4, 1fr);
            ${responsive.mobile(css`
                grid-template-columns: repeat(2, 1fr);
            `)};
            grid-column-gap: 14px;
            grid-row-gap: 32px;
        `}>
            {selectedWeddingDesigns.map(design => (
                <WeddingDesignPresetCell key={design.id} weddingDesign={design}/>
            ))}
        </View>
    );
};

export default HomePage;
