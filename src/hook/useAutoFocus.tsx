import React, {createContext, PropsWithChildren, useContext, useState} from "react";

type AutoFocusObject = {
    autoFocus: boolean;
    setAutoFocus: (value: boolean) => void;
};
const AutoFocusContext = createContext<AutoFocusObject | null>(null);

export const AutoFocusProvider = (props: PropsWithChildren) => {
    const [autoFocus, setAutoFocus] = useState(true);

    return (
        <AutoFocusContext.Provider value={{
            autoFocus,
            setAutoFocus: value => setAutoFocus(value),
        }}>
            {props.children}
        </AutoFocusContext.Provider>
    );
};

const useAutoFocus = () => {
    const object = useContext(AutoFocusContext);
    if (!object) {
        throw new Error("useAutoFocus must be used within a Provider");
    }
    return object;
}

export default useAutoFocus;
