import {SVGProps} from "react";

export default function Play(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M8 17.1781V6.82145C8 6.03236 8.87115 5.55414 9.53688 5.97779L17.6742 11.1561C18.2917 11.5491 18.2917 12.4505 17.6742 12.8434L9.53688 18.0218C8.87115 18.4454 8 17.9672 8 17.1781Z"
                fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M9 6.8216L9 6.8216V17.1783L17.1374 11.9999L9 6.8216ZM7 6.8216C7 5.24342 8.74231 4.287 10.0738 5.13428L18.2111 10.3126C19.4461 11.0985 19.4461 12.9013 18.2111 13.6873L10.0738 18.8656C8.7423 19.7129 7 18.7564 7 17.1783V6.8216Z"
                  fill="current"/>
        </svg>
    );
}
