import MainWrapper from "~/userinterface/pattern/header/MainWrapper";
import {css, cx} from "@linaria/core";
import Text from "~/userinterface/component/Text";
import View from "~/userinterface/core/View.tsx";
import WeddingDesignPresetCell from "~/userinterface/specific/WeddingStyleCell";
import TabBar from "~/userinterface/component/TabBar";
import Loading from "~/userinterface/specific/Loading";
import useWeddingDesigns from "~/hook/useWeddingDesigns.ts";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset";
import {desktopStyle, mobileStyle, notDesktopStyle, notMobileStyle, responsive} from "~/hook/ResponsiveSwitch";
import weddingDesignApi from "~/infrastructure/network/api/wedding-design-api.ts";
import type {Route} from "./+types/home";

export async function loader() {
    const {data} = await weddingDesignApi.getWeddingDesignPresets();
    return data;
}

function Home(
    {
        loaderData
    }: Route.ComponentProps
) {
    const {selectedCategory, setSelectedCategory, categories, selectedWeddingDesigns} = useWeddingDesigns(loaderData);
    return (
        <MainWrapper>
            <View ui={css`
                align-items: center;

                ${responsive.desktop} {
                    padding: 72px 24px 40px 24px;
                }

                ${responsive.notDesktop} {
                    padding: 24px 16px 40px 16px;
                }
            `}>
                <View ui={css`
                    gap: 40px;
                    max-width: 1100px;
                    width: 100%;
                    flex: 1;
                `}>

                    <Header/>
                    <View ui={css`
                        gap: 16px;
                    `}>
                        <TabBarSection
                            categories={categories}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                        <WeddingDesignPresetBody selectedWeddingDesigns={selectedWeddingDesigns}/>
                    </View>
                </View>
            </View>
        </MainWrapper>
    );
}

const Header = () => {
    return (
        <View ui={css`
            gap: 16px;
            align-items: center;
        `}>
            {/*TODO: Refactor*/}
            <Text type={'h2'} bold={true} ui={cx(
                css`
                    text-align: center;
                `,
                desktopStyle
            )}>특별한 순간 특별한 초대<br/>
                링크메리와 함께</Text>
            <Text type={'h4'} bold={true} ui={cx(
                css`
                    text-align: center;
                `,
                notDesktopStyle
            )}>특별한 순간 특별한 초대<br/>
                링크메리와 함께</Text>
            <Text type={'p3'} ui={cx(
                css`
                    text-align: center;
                    word-break: break-word;
                    color: var(--g-500);
                `,
                mobileStyle
            )}>다양한 스타일, 나만의 청첩장을{<br/>}무료로 만들어볼 수 있습니다</Text>
            <Text type={'p3'} ui={cx(
                css`
                    text-align: center;
                    word-break: break-word;
                    color: var(--g-500);
                `,
                notMobileStyle
            )}>다양한 스타일, 나만의 청첩장을{' '}무료로 만들어볼 수 있습니다</Text>
        </View>
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
        <View ui={css`
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `}>
            <TabBar
                items={categories}
                selectedTab={categories.indexOf(selectedCategory!)}
                onChange={tab => {
                    setSelectedCategory(categories[tab]);
                }}
            />
        </View>
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
        <View ui={css`
            display: grid !important;
            max-width: 960px;
            align-self: center;
            width: 100%;
            grid-template-columns: repeat(4, 1fr);

            ${responsive.mobile} {
                grid-template-columns: repeat(2, 1fr);
            }

            grid-column-gap: 14px;
            grid-row-gap: 32px;
        `}>
            {selectedWeddingDesigns.map(design => (
                <WeddingDesignPresetCell key={design.id} weddingDesign={design}/>
            ))}
        </View>
    );
};

export default Home;