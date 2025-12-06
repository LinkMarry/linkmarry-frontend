import {type PropsWithChildren, useEffect, useState} from "react";


function ClientRendering({children}: PropsWithChildren
) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsReady(true);
    }, []);

    if (!isReady) {
        return null;
    }

    return children;
}

export default ClientRendering;