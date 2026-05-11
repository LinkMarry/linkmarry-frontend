import {WeddingComponent, Text, View, ClientOnly} from "~/components";
import {css} from "@linaria/core";

import {responsive} from "~/style/responsive";
import useWedding from "~/hook/useWedding.ts";
import {Navigate, useParams, useSearchParams} from "react-router";

import usePreventZoom from "~/hook/usePreventZoom.ts";

const Wedding = () => {
    const {wedding, getWedding, isError} = useWedding();
    const {url} = useParams();
    const [searchParams] = useSearchParams();

    usePreventZoom(wedding?.gallery.galleryZoom ?? false);

    if (url === "sample") {
        const url = new URL(`${window.location.origin}/sample`);

        searchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
        });

        console.log(`url -  s${url.toString()}`);

        return <Navigate to={url.toString()} />;
    }

    return (
        <ClientOnly>
            <View
                flexDirection={"row"}
                ui={css`
                    justify-content: center;
                    padding: 64px 0;

                    ${responsive.mobile} {
                        padding: 0;
                    }
                `}
                style={{
                    background: wedding?.weddingDesign.weddingDesignColor,
                }}
            >
                {wedding && (
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
                        <WeddingComponent wedding={wedding} onRefresh={getWedding} />
                    </View>
                )}
                {isError && (
                    <Text
                        type={"h5"}
                        ui={css`
                            margin-top: 20px;
                        `}
                    >
                        청첩장을 찾을 수 없습니다
                    </Text>
                )}
            </View>
        </ClientOnly>
    );
};

export default Wedding;
