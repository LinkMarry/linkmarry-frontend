import {useCallback, useEffect, useState} from "react";
import {api} from "~/api/index.ts";
import type {WeddingDashboard, WeddingInfo} from "~/domain";

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

        const {data} = await api.wedding.getMyWedding();
        setWeddings(data);
    }, [clearData]);

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [fetchData]);

    const removeWedding = useCallback(async () => {
        if (!selectedWedding) return;

        try {
            await api.wedding.removeWedding(selectedWedding.url);
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
        setSelectedWedding,
    };
};

export default useMyPageWedding;
