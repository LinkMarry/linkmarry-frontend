import React, {useEffect, useState} from 'react';
import {css} from "styled-components";
import {dummyWedding} from "@src/infrastructure/network/value/Wedding";
import WeddingComponent from "@src/userinterface/specific/wedding/WeddingComponent";
import {Column, Row} from "@src/userinterface/core/FlexLayout";
import useResponsive from "@src/hook/useResponsive";
import View from "@src/userinterface/core/View";
import Text from "@src/userinterface/component/Text";
import SelectDesignSheet from "@src/userinterface/specific/wedding/component/selectdesignsheet/SelectDesignSheet";
import {useSearchParams} from "react-router-dom";

const SamplePage = () => {
    const {deviceSize} = useResponsive();
    const [wedding, setWedding] = useState(dummyWedding);
    const [showSelectDesignSheet, setShowSelectDesignSheet] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const designName = searchParams.get('designName');
        if (designName) {
            setWedding(wedding => ({
                ...wedding,
                weddingDesign: {
                    ...wedding.weddingDesign,
                    weddingDesignName: designName
                }
            }));
        }
    }, [searchParams]);

    return (
        <Row $alignItems={'stretch'} $justifyContent={'center'} $ui={css`
            background: ${wedding.weddingDesign.weddingDesignColor};
            padding: 64px 0;
            position: relative;

            ${deviceSize === 'mobile' && css`
                padding: 0;
            `};
        `}>
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
                    mode={'sample'}
                    onChangeWedding={wedding => setWedding(wedding)}
                />
            </View>
            <Column $ui={css`
                position: fixed;
                max-width: 436px;
                width: 100%;
            `}>
                <Text type={'caption1'} onClick={() => setShowSelectDesignSheet(i => !i)} ui={css`
                    display: flex;
                    color: var(--g-500);
                    background: var(--p-200);
                    padding: 4px 12px;
                    border-radius: 99px;
                    opacity: 0.8;
                    cursor: pointer;
                    margin: 12px;
                `}>스타일 선택</Text>
            </Column>
            {showSelectDesignSheet && (
                <SelectDesignSheet
                    designName={wedding.weddingDesign.weddingDesignName}
                    onChangeDesignName={designName => {
                        setSearchParams({
                            designName
                        });
                    }}
                    dismiss={() => setShowSelectDesignSheet(false)}
                    ui={css`
                        max-width: 436px;
                        overflow: hidden;
                    `}
                />
            )}
        </Row>
    );
};

export default SamplePage;
