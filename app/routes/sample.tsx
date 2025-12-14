import {useEffect, useState} from 'react';
import {css} from "@linaria/core";
import {dummyWedding} from "~/infrastructure/network/value/Wedding.ts";
import WeddingComponent from "~/userinterface/specific/wedding/WeddingComponent.tsx";
import View from "~/userinterface/core/View.tsx";
import Text from "~/userinterface/component/Text.tsx";
import SelectDesignSheet from "~/userinterface/specific/wedding/component/selectdesignsheet/SelectDesignSheet.tsx";
import {useSearchParams} from "react-router";
import {responsive} from "~/hook/ResponsiveSwitch.tsx";
import ClientRendering from "~/ClientRendering.tsx";
import weddingDesignApi from "~/infrastructure/network/api/wedding-design-api.ts";
import type {Route} from "./+types/sample";


export async function loader() {
    const {data} = await weddingDesignApi.getWeddingDesignPresets();
    return data;
}

const Sample = (
    {
        loaderData
    }: Route.ComponentProps
) => {
    const [wedding, setWedding] = useState(dummyWedding);
    const [showSelectDesignSheet, setShowSelectDesignSheet] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const designName = searchParams.get('designName');
        if (designName) {
            setWedding(wedding => ({
                ...wedding,
                weddingDesign: {
                    ...wedding.weddingDesign,
                    weddingDesignName: designName
                }
            }));
        }
    }, [searchParams]);

    return (
        <ClientRendering>
            <View ui={css`
                flex-direction: row !important;
                justify-content: center;
                padding: 64px 0;
                position: relative;

                ${responsive.mobile} {
                    padding: 0;
                }
            `} style={{
                background: wedding.weddingDesign.weddingDesignColor
            }}>
                <View ui={css`
                    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    overflow: hidden;

                    ${responsive.mobile} {
                        border-radius: 0;
                    }
                `}>
                    <WeddingComponent
                        wedding={wedding}
                        mode={'sample'}
                        onChangeWedding={wedding => setWedding(wedding)}
                    />
                </View>
                <View ui={css`
                    align-items: flex-start;
                    position: fixed;
                    max-width: 436px;
                    width: 100%;
                `}>
                    <Text type={'caption1'} onClick={() => setShowSelectDesignSheet(i => !i)} ui={css`
                        display: flex;
                        color: var(--g-500);
                        background: var(--p-200);
                        padding: 4px 12px;
                        border-radius: 99px;
                        opacity: 0.8;
                        cursor: pointer;
                        margin: 12px;
                    `}>스타일 선택</Text>
                </View>
                {showSelectDesignSheet && (
                    <SelectDesignSheet
                        designName={wedding.weddingDesign.weddingDesignName}
                        onChangeDesignName={designName => {
                            setSearchParams({
                                designName
                            });
                        }}
                        dismiss={() => setShowSelectDesignSheet(false)}
                        weddingDesigns={loaderData}
                        ui={css`
                            max-width: 436px;
                            overflow: hidden;
                            width: 100vw;
                        `}
                    />
                )}
            </View>
        </ClientRendering>
    );
};

export default Sample;
