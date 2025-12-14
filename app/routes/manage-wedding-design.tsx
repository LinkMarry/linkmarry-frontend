import {useEffect, useState} from 'react';
import weddingDesignApi from "~/infrastructure/network/api/wedding-design-api.ts";
import Text from "~/userinterface/component/Text.tsx";
import {css} from "@linaria/core";
import View from "~/userinterface/core/View.tsx";
import type WeddingDesignPreset from "~/infrastructure/network/value/WeddingDesignPreset.ts";

// todo: refactor
const ManageWeddingDesign = () => {
    const [presets, setPresets] = useState<WeddingDesignPreset[]>();

    useEffect(() => {
        (async () => {
            const {data} = await weddingDesignApi.getWeddingDesignPresets();
            setPresets(data);
        })();
    }, []);

    return (
        <View>
            Manage
            <View ui={css`
                display: grid;
                grid-row-gap: 10px;
                grid-column-gap: 44px;
            `}>
                {presets && presets.map((item, index) => (
                    <Item key={index} text={item.name}/>
                ))}
            </View>
        </View>
    );
};

interface ItemProps {
    text: string;
}

const Item = ({text}: ItemProps) => {
    return (
        <View ui={css`
            gap: 8px
        `}>
            <div style={{
                aspectRatio: '9 / 16',
                background: 'gray'
            }}></div>
            <View ui={css`
                flex-direction: row !important;
                align-items: center;
            `}>
                <Text type={'p3'}>{text}</Text>
            </View>
        </View>
    );
};

export default ManageWeddingDesign;

