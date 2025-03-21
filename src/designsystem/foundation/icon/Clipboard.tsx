import {SVGProps} from "react";

export default function Clipboard(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7 6C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H15C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H9C9.55228 4 10 4.44772 10 5C10 5.55228 9.55228 6 9 6H7Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8 16C8 15.4477 8.44772 15 9 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H9C8.44772 17 8 16.5523 8 16Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8 5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V7C16 7.55228 15.5523 8 15 8H9C8.44772 8 8 7.55228 8 7V5ZM11 4C10.4477 4 10 4.44772 10 5V6H14V5C14 4.44772 13.5523 4 13 4H11Z"
                  fill="current"/>
        </svg>
    );
}
