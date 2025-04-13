import React, {useEffect, useState} from 'react';
import weddingDesignApi from "@src/infrastructure/network/api/WeddingDesignApi";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import Text from "@src/userinterface/component/Text";
import {css} from "styled-components";
import View from "@src/userinterface/core/View";
import WeddingDesignPreset from "@src/infrastructure/network/value/WeddingDesignPreset";

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
            <View $ui={css`
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
        <Column $alignItems={'stretch'} $gap={8}>
            <div style={{
                aspectRatio: '9 / 16',
                background: 'gray'
            }}></div>
            <Row $alignItems={'center'}>
                <Text type={'p3'}>{text}</Text>
            </Row>
        </Column>
    )
}

export default ManageWeddingDesignPage;

