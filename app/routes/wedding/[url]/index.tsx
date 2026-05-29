import {WeddingComponent, Text, View, ClientOnly} from "~/components";
import {css} from "@linaria/core";

import {responsive} from "~/style/responsive";
import {useWeddingScreen} from "./hook.ts";
import {Navigate, useParams, useSearchParams} from "react-router";

import usePreventZoom from "~/hook/usePreventZoom.ts";

const WeddingScreen = () => {
    const {url} = useParams();
    const [searchParams] = useSearchParams();

    if (url === "sample") {
        return <Navigate to={{pathname: "/sample", search: searchParams.toString()}} replace={true} />;
    }

    return (
        <ClientOnly>
            <WeddingScreenInner />
        </ClientOnly>
    );
};

const WeddingScreenInner = () => {
    const {wedding, handleRefresh, isError} = useWeddingScreen();

    usePreventZoom(wedding?.gallery.galleryZoom ?? false);

    return (
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
                    <WeddingComponent wedding={wedding} onRefresh={handleRefresh} />
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
    );
};

export default WeddingScreen;
