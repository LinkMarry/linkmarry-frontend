import React, {useEffect, useState} from 'react';
import Wedding from "@remote/value/Wedding";
import weddingApi from "@remote/api/WeddingApi";
import {useParams} from "react-router-dom";
import {Row} from "@designsystem/component/flexLayout";
import TemplateComponent from "@src/component/template/TemplateComponent";

function WeddingPage() {
    const {url} = useParams();
    const [wedding, setWedding] = useState<Wedding>();

    useEffect(() => {
        if (!url) return;
        
        (async () => {
            const {data} = await weddingApi.getWedding(url);
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