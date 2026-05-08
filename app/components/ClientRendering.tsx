import {type PropsWithChildren, useEffect, useState} from "react";

function ClientOnly({children}: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => setIsReady(true), []);

    if (!isReady) {
        return null;
    }

    return <>{children}</>;
}

export default ClientOnly;
