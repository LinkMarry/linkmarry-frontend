import {
    isValidElement,
    type ReactNode,
    type RefObject,
    useEffect,
    useState
} from 'react';
import View from "~/userinterface/core/View.tsx";
import useFadeIn from "~/userinterface/specific/fadein/useFadeIn";
import {css, cx, type LinariaClassName} from "@linaria/core";

type Provided<T = any> = {
    style: LinariaClassName;
    ref: RefObject<T>;
}

interface Props {
    delay?: number;
    ui?: LinariaClassName;
    as?: string;
    children: ((provided: Provided) => ReactNode) | ReactNode;
}

function FadeIn(
    {
        delay,
        ui,
        as,
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
    }, [delay, isVisible]);

    const style = cx(
        css`
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1.4s ease-out, transform 1.4s ease-out;
        `,
        delayedIsVisible ? css`
            opacity: 1;
            transform: translateY(0);
        ` : undefined
    )

    if (typeof children === "function") {
        return (
            <>
                {children({style, ref})}
            </>
        );
    } else if (isValidElement(children)) {
        return (
            <View
                as={as}
                ref={ref} // Ref 타입 단언
                ui={cx(
                    css`
                        display: flex;
                        flex-direction: column;
                    `,
                    style,
                    ui
                )}
            >
                {children}
            </View>
        );
    }

    return null;
}

export default FadeIn;

