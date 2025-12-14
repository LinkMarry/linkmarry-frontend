import {useCallback, useEffect, useState} from "react";
import type WeddingDashboard from "~/infrastructure/network/value/WeddingDashboard.ts";
import type WeddingInfo from "~/infrastructure/network/value/WeddingInfo.ts";
import weddingApi from "~/infrastructure/network/api/wedding-api.ts";

const useMyPageWedding = () => {
    const [weddings, setWeddings] = useState<WeddingDashboard>();
    const [selectedWedding, setSelectedWedding] = useState<WeddingInfo>();
    const [showRemoveWeddingDialog, setShowRemoveWeddingDialog] = useState(false);

    const clearData = useCallback(() => {
        setSelectedWedding(undefined);
        setWeddings(undefined);
        setShowRemoveWeddingDialog(false);
    }, []);

    const fetchData = useCallback(async () => {
        clearData();

        const {data} = await weddingApi.getMyWedding();
        setWeddings(data);
    }, [clearData]);

    useEffect(() => {
        (async () => {
            await fetchData();
        })()
    }, [fetchData]);

    const removeWedding = useCallback(async () => {
        if (!selectedWedding) {
            return;
        }

        try {
            await weddingApi.removeWedding(selectedWedding.url);
            setShowRemoveWeddingDialog(false);
            await fetchData();
        } catch (error) {
            console.error(error);
        }
    }, [fetchData, selectedWedding]);

    return {
        showRemoveWeddingDialog,
        setShowRemoveWeddingDialog,
        weddings,
        removeWedding,
        setSelectedWedding
    }
};

export default useMyPageWedding;
