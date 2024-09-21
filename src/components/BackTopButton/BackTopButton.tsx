'use client';

import { KeyboardArrowUp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const BackTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // Ensures the component is mounted before interacting with the DOM

    useEffect(() => {
        setIsMounted(true); // Set this when the component mounts to prevent hydration mismatch

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Only render the button once the component is mounted on the client
    if (!isMounted) {
        return null;
    }

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} id="button" className="scrollToTopBtn">
                    <KeyboardArrowUp className="size-8" />
                </button>
            )}
        </div>
    );
};

export default BackTopButton;
