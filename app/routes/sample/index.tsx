import {WeddingComponent, View, Text, SelectDesignSheet, ClientOnly} from "~/components";
import {useEffect, useState} from "react";
import {css} from "@linaria/core";
import {dummyWedding} from "~/domain";

import {useSearchParams} from "react-router";
import {responsive} from "~/style/responsive";

import type {Route} from "./+types/sample";
import {api} from "~/api/index.ts";

export async function loader() {
    const {data} = await api.weddingDesign.getWeddingDesignPresets();
    return data;
}

const SampleScreen = ({loaderData}: Route.ComponentProps) => {
    const [wedding, setWedding] = useState(dummyWedding);
    const [showSelectDesignSheet, setShowSelectDesignSheet] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const viewport = document.querySelector('meta[name="viewport"]');
        const original = viewport?.getAttribute("content") ?? "width=device-width, initial-scale=1";
        viewport?.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");
        return () => {
            viewport?.setAttribute("content", original);
        };
    }, []);

    useEffect(() => {
        const designName = searchParams.get("designName");
        if (designName) {
            setWedding(wedding => ({
                ...wedding,
                weddingDesign: {
                    ...wedding.weddingDesign,
                    weddingDesignName: designName,
                },
            }));
        }
    }, [searchParams]);

    return (
        <ClientOnly>
            <View
                flexDirection={"row"}
                ui={css`
                    justify-content: center;
                    padding: 64px 0;
                    position: relative;

                    ${responsive.mobile} {
                        padding: 0;
                    }
                `}
                style={{
                    background: wedding.weddingDesign.weddingDesignColor,
                }}
            >
                <View
                    ui={css`
                        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
                        border-radius: 16px;
                        overflow: hidden;

                        ${responsive.mobile} {
                            border-radius: 0;
                        }
                    `}
                >
                    <WeddingComponent
                        wedding={wedding}
                        mode={"sample"}
                        onChangeWedding={wedding => setWedding(wedding)}
                    />
                </View>
                <View
                    ui={css`
                        align-items: flex-start;
                        position: fixed;
                        max-width: 436px;
                        width: 100%;
                    `}
                >
                    <Text
                        type={"caption1"}
                        onClick={() => setShowSelectDesignSheet(i => !i)}
                        ui={css`
                            display: flex;
                            color: var(--g-500);
                            background: var(--p-200);
                            padding: 4px 12px;
                            border-radius: 99px;
                            opacity: 0.8;
                            cursor: pointer;
                            margin: 12px;
                        `}
                    >
                        스타일 선택
                    </Text>
                </View>
                <SelectDesignSheet
                    show={showSelectDesignSheet}
                    designName={wedding.weddingDesign.weddingDesignName}
                    onChangeDesignName={designName => {
                        setSearchParams({
                            designName,
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
            </View>
        </ClientOnly>
    );
};

export default SampleScreen;
