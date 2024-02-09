import { useEffect } from "react";

export const useScrollPositionChange = (callback: () => void) => {
    useEffect(() => {
        const handleScroll = () => {
            callback();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [callback]);
};
