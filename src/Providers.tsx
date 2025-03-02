import React, {PropsWithChildren, useEffect, useState} from 'react';
import AutoFocusContext from "@src/context/AutoFocusContext";
import AppStateContext from "@src/context/AppStateContext";
import InfoMember from "@remote/value/InfoMember";
import memberApi from "@remote/api/MemberApi";

const Providers = (props: PropsWithChildren) => {
    const [autoFocus, setAutoFocus] = useState(true);
    const [member, setMember] = useState<InfoMember>();

    useEffect(() => {
        (async () => {
            const {data} = await memberApi.getMyProfile();
            setMember(data);
        })();
    }, []);

    return (
        <AutoFocusContext.Provider value={{
            autoFocus,
            setAutoFocus: value => setAutoFocus(value),
        }}>
            <AppStateContext.Provider value={{
                member
            }}>
                {props.children}
            </AppStateContext.Provider>
        </AutoFocusContext.Provider>
    );
};

export default Providers;
