import React, {useEffect} from 'react';
import weddingDesignApi from "@remote/api/admin/WeddingDesignApi";

// todo: refactor
const ManageWeddingDesignPage = () => {
    useEffect(() => {
        weddingDesignApi.getWeddingDesign('');
    })

    return (
        <div>

        </div>
    );
};

export default ManageWeddingDesignPage;

