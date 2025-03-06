import React, {useEffect, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";
import {Row} from "@designsystem/core/FlexLayout";
import WeddingComponent from "@src/component/wedding/WeddingComponent";
import {getDeviceType} from "@remote/enumeration/Device";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";

function WeddingPage() {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            await getWedding();
        })();
    }, []);

    const getWedding = async () => {
        if (!url) return;
        const cookieKey = `firstVisitor_${url}`;

        // todo: fix
        // const isFirstVisitor = !Cookies.get(cookieKey);

        // if (isFirstVisitor) {
        //     Cookies.set(cookieKey, "false", {expires: 365}); // 1년 동안 유지
        // }
        //
        // try {
        //     const {data} = await weddingApi.getWeddingInvitation(url, {
        //         deviceType: getDeviceType(),
        //         firstVisitor: isFirstVisitor
        //     });
        //     setWedding(data);
        // } catch (error) {
        //     console.error(error);
        //     setIsError(true);
        // }
    }

    return (
        <Row arrangement={'center'} ui={css`
            background: ${wedding?.weddingDesign.weddingDesignColor};
            padding: 64px 0;
        `}>
            {wedding && (
                <WeddingComponent
                    wedding={wedding}
                    onRefresh={getWedding}
                />
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
