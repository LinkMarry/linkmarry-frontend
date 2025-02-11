import {useEffect, useRef, useState} from "react";

const useFadeIn = (threshold = 0.6) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 한 번 실행 후 관찰 해제
                }
            },
            {
                threshold
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    return {ref, isVisible};
};

export default useFadeIn;