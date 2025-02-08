import React, {SVGProps} from 'react';

function Hamburger(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="14" height="12" viewBox="0 0 14 12" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g>
                <rect width="14" height="2" rx="1" fill="current"/>
                <rect y="5" width="14" height="2" rx="1" fill="current"/>
                <rect y="10" width="14" height="2" rx="1" fill="current"/>
            </g>
        </svg>
    );
}

export default Hamburger;