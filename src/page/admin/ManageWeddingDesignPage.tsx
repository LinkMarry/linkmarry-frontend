import React, {useEffect, useState} from 'react';
import weddingDesignApi from "@remote/api/WeddingDesignApi";
import {Column, Row} from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";
import {css} from "styled-components";
import View from "@designsystem/core/View";
import WeddingDesignPreset from "@remote/value/WeddingDesignPreset";

// todo: refactor
const ManageWeddingDesignPage = () => {
    const [presets, setPresets] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setPresets(data);
        })();
    }, []);

    return (
        <Column>
            Manage
            <View ui={css`
                display: grid;
                grid-row-gap: 10px;
                grid-column-gap: 44px;
            `}>
                {presets && presets.map((item, index) => (
                    <Item text={item.name}/>
                ))}
            </View>
        </Column>
    );
};

interface ItemProps {
    text: string;
}

const Item = ({text}: ItemProps) => {
    return (
        <Column alignment={'stretch'} gap={8}>
            <div style={{
                aspectRatio: '9 / 16',
                background: 'gray'
            }}></div>
            <Row alignment={'center'}>
                <Text type={'p3'}>{text}</Text>
            </Row>
        </Column>
    )
}

export default ManageWeddingDesignPage;

