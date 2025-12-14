import {type ComponentPropsWithoutRef} from "react";
import {css, cx, type LinariaClassName} from "@linaria/core";
import {styled} from "@linaria/react";

interface Props extends ComponentPropsWithoutRef<'div'> {
    w?: number;
    h?: number;
    ui?: LinariaClassName;
}

function Spacer({w, h, ui, ...props}: Props) {
    return (
        <StyledSpacer className={cx(
            (w === undefined && h === undefined) ? css`
                flex: 1;
            ` : undefined,
            ui
        )} {...props}/>
    );
}

// TODO: Refactoring
const StyledSpacer = styled.div<{
    w?: number;
    h?: number;
}>`
    min-width: ${({w}) => w ? `${w}px` : 'auto'};
    min-height: ${({h}) => h ? `${h}px` : 'auto'};
`

export default Spacer;
