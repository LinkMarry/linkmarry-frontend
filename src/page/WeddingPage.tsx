import React, {useCallback, useEffect, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";
import {Row} from "@designsystem/core/FlexLayout";
import WeddingComponent from "@src/component/wedding/WeddingComponent";
import {getDeviceType} from "@remote/enumeration/Device";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import View from "@designsystem/core/View";
import {useCookies} from "react-cookie";
import useResponsive from "@hook/useResponsive";

function WeddingPage() {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();
    const [isError, setIsError] = useState(false);
    const cookieKey = `firstVisitor_${url}`;
    const [cookie, setCookie] = useCookies([cookieKey]);
    const {deviceSize} = useResponsive();

    const getWedding = useCallback(async () => {
        if (!url) return;

        const isFirstVisitor = !cookie[cookieKey];

        if (isFirstVisitor) {
            const date = new Date();
            date.setDate(date.getDate() + 365);
            setCookie(cookieKey, 'false', {
                expires: date
            });
        }

        try {
            const {data} = await weddingApi.getWeddingInvitation(url, {
                deviceType: getDeviceType(),
                firstVisitor: isFirstVisitor
            });
            setWedding(data);
        } catch (error) {
            console.error(error);
            setIsError(true);
        }
    }, [cookie, cookieKey, setCookie, url]);

    useEffect(() => {
        (async () => {
            await getWedding();
        })();
    }, [getWedding]);

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
