import React, {useEffect, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";
import {Row} from "@designsystem/component/flexLayout";
import TemplateComponent from "@src/component/template/TemplateComponent";
import {getDeviceType} from "@remote/enumeration/Device";
import Cookies from "js-cookie";

function WeddingPage() {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();

    useEffect(() => {
        if (!url) return;
        
        const cookieKey = `firstVisitor_${url}`;

        const isFirstVisitor = !Cookies.get(cookieKey);

        if (isFirstVisitor) {
            Cookies.set(cookieKey, "false", { expires: 365 }); // 1년 동안 유지
        }
        
        (async () => {
            const {data} = await weddingApi.getWeddingInvitation(url, {
                deviceType: getDeviceType(),
                firstVisitor: isFirstVisitor
            });
            setWedding(data);
        })();
    }, []);
    
    return (
        <Row $justifyContent={'center'}>
            {wedding && (
                <TemplateComponent wedding={wedding}/>
            )}
        </Row>
    );
}

export default WeddingPage;