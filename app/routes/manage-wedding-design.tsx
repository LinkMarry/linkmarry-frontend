import {Text, View} from "~/components";
import {useManageWeddingDesignScreen} from "./useManageWeddingDesignScreen.ts";

import {css} from "@linaria/core";

const ManageWeddingDesign = () => {
    const {presets} = useManageWeddingDesignScreen();

    return (
        <View>
            Manage
            <View
                ui={css`
                    display: grid !important;
                    grid-row-gap: 10px;
                    grid-column-gap: 44px;
                `}
            >
                {presets && presets.map((item, index) => <Item key={index} text={item.name} />)}
            </View>
        </View>
    );
};

interface ItemProps {
    text: string;
}

const Item = ({text}: ItemProps) => {
    return (
        <View
            ui={css`
                gap: 8px;
            `}
        >
            <div
                style={{
                    aspectRatio: "9 / 16",
                    background: "gray",
                }}
            ></div>
            <View
                flexDirection={"row"}
                ui={css`
                    align-items: center;
                `}
            >
                <Text type={"p3"}>{text}</Text>
            </View>
        </View>
    );
};

export default ManageWeddingDesign;
