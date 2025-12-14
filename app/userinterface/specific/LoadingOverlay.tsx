import {styled} from "@linaria/react";

function LoadingOverlay() {
    return (
        <LoadingOverlayStyle>
            <DotsLoader>
                <Dot/>
                <Dot/>
                <Dot/>
            </DotsLoader>
        </LoadingOverlayStyle>
    );
}

const LoadingOverlayStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; /* or fixed, depending on your layout */
    top: 0;
    left: 0;
    width: 100%;
    flex: 1;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15); /* Black color with 30% opacity */
    z-index: 10; /* Adjust this if you need to layer it properly */
    user-select: none;
`;

const DotsLoader = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px; /* 점들 간의 간격 */
    
`
const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white; /* 점 색상 */
    animation: dot-blink 1.5s infinite ease-in-out;
    &:nth-child(1) {
        animation-delay: 0s;
    }

    &:nth-child(2) {
        animation-delay: 0.3s;
    }

    &:nth-child(3) {
        animation-delay: 0.6s;
    }
    
    @keyframes dot-blink {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`

export default LoadingOverlay;
