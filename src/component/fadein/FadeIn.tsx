import React, {
    isValidElement,
    ReactNode,
    RefObject,
    useEffect,
    useState
} from 'react';
import View from "@designsystem/core/View";
import {css, RuleSet} from "styled-components";
import useFadeIn from "@src/component/fadein/useFadeIn";

type Provided = {
    style: RuleSet;
    ref: RefObject<any>;
}

interface Props {
    delay?: number;
    ui?: RuleSet;
    children: ((provided: Provided) => ReactNode) | ReactNode;
}

function FadeIn(
    {
        delay,
        ui,
        children
    }: Props
) {
    const {ref, isVisible} = useFadeIn();
    const [delayedIsVisible, setDelayedIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timeout = setTimeout(() => {
                setDelayedIsVisible(true);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [isVisible]);

    const style = css`
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 1.4s ease-out, transform 1.4s ease-out;

        ${delayedIsVisible && css`
            opacity: 1;
            transform: translateY(0);
        `};
    `

    if (typeof children === "function") {
        return (
            <>
                {children({style, ref})}
            </>
        );
    } else if (isValidElement(children)) {
        return (
            <View ref={ref} $ui={css`
                display: flex;
                flex-direction: column;
                ${style};
                ${ui};
            `}>
                {children}
            </View>
        );
    } else {
        return (
            <></>
        )
    }
}

export default FadeIn;

