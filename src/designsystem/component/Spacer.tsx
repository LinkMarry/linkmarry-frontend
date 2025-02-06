import {CSSProperties, HTMLAttributes} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    w?: number;
    h?: number;
    style?: CSSProperties;
}

function Spacer(
    {
        w,
        h,
        style,
        ...props
    }: Props
) {
    return (
        <div style={{
            minWidth: w &&`${w}px`,
            minHeight: h && `${h}px`,
            flex: !w && !h ? 1 : undefined,
            ...style
        }} {...props}/>
    );
}

export default Spacer;