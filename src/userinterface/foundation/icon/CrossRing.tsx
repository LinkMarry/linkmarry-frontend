import {SVGProps} from "react";

export default function CrossRing(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.79289 7.79289C8.18342 7.40237 8.81658 7.40237 9.20711 7.79289L16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L7.79289 9.20711C7.40237 8.81658 7.40237 8.18342 7.79289 7.79289Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929L14.7929 7.79289C15.1834 7.40237 15.8166 7.40237 16.2071 7.79289C16.5976 8.18342 16.5976 8.81658 16.2071 9.20711L9.20711 16.2071C8.81658 16.5976 8.18342 16.5976 7.79289 16.2071Z"
                  fill="current"/>
        </svg>
    )
}