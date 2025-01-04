import { useEffect, useRef } from "react";

export const useIntersectionObserver = (callback: () => void, options: IntersectionObserverInit) => {
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [callback, options]);

    return elementRef;
}; 