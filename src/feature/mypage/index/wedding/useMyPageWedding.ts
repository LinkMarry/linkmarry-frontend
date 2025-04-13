import {useCallback, useEffect, useState} from "react";
import WeddingDashboard from "@src/infrastructure/network/value/WeddingDashboard";
import WeddingInfo from "@src/infrastructure/network/value/WeddingInfo";
import weddingApi from "@src/infrastructure/network/api/wedding-api";

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
        fetchData().then(() => {});
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
