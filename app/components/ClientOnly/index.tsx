import {type PropsWithChildren, useEffect, useState} from "react";

export const ClientOnly = ({children}: PropsWithChildren) => {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => setIsReady(true), []);

    if (!isReady) {
        return null;
    }

    return <>{children}</>;
};
