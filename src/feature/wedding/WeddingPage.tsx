import React from 'react';
import {Row} from "@src/userinterface/core/FlexLayout";
import WeddingComponent from "@src/userinterface/specific/wedding/WeddingComponent";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";
import useResponsive from "@src/hook/useResponsive";
import useWedding from "@src/feature/wedding/useWedding";
import {Navigate, useParams, useSearchParams} from "react-router-dom";

function WeddingPage() {
    const {deviceSize} = useResponsive();
    const {wedding, getWedding, isError} = useWedding();
    const {url} = useParams();
    const [searchParams] = useSearchParams();

    if (url === 'sample') {
        const url = new URL(`${window.location.origin}/sample`);

        searchParams.forEach((value, key) => {
            url.searchParams.set(key, value);
        });

        console.log(`url -  s${url.toString()}`);

        return <Navigate to={url.toString()}/>;
    }

    return (
        <Row $justifyContent={'center'} $ui={css`
            background: ${wedding?.weddingDesign.weddingDesignColor};
            padding: 64px 0;
            ${deviceSize === 'mobile' && css`
                padding: 0;
            `};
        `}>
            {wedding && (
                <View $ui={css`
                    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    overflow: hidden;
                    ${deviceSize === 'mobile' && css`
                        border-radius: 0;
                    `};
                `}>
                    <WeddingComponent
                        wedding={wedding}
                        onRefresh={getWedding}
                    />
                </View>
            )}
            {isError && (
                <Text type={'h5'} ui={css`
                    margin-top: 20px;
                `}>청첩장을 찾을 수 없습니다</Text>
            )}
        </Row>
    );
}

export default WeddingPage;
