import {SVGProps} from "react";

export default function Note(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V14C21 14.2791 20.8834 14.5455 20.6783 14.7348L14.1783 20.7348C13.9936 20.9053 13.7514 21 13.5 21H7C4.79086 21 3 19.2091 3 17V7ZM7 5C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H12.5V16C12.5 14.3431 13.8431 13 15.5 13H19V7C19 5.89543 18.1046 5 17 5H7ZM17.4424 15H15.5C14.9477 15 14.5 15.4477 14.5 16V17.716L17.4424 15Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H8C7.44772 9 7 8.55228 7 8Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7 12C7 11.4477 7.44772 11 8 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H8C7.44772 13 7 12.5523 7 12Z"
                  fill="current"/>
        </svg>
    );
}
