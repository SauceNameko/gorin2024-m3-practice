import { useEffect, useState } from "react";

export const useTheme = (setIsModal) => {
    const [count, setCount] = useState(0);
    const [isCommand, setIsCommand] = useState(false);

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.shiftKey && e.key == "ArrowLeft") {
            setCount(prev => prev == 0 ? 2 : prev - 1);
        } else if (e.ctrlKey && e.shiftKey && e.key == "ArrowRight") {
            setCount(prev => prev == 2 ? 0 : prev + 1);
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("theme") == "simple") {
            setCount(0);
        } else if (sessionStorage.getItem("theme") == "dark") {
            setCount(1);
        } else if (sessionStorage.getItem("theme") == "orange") {
            setCount(2);
        }
    }, [])

    useEffect(() => {
        if (count == 0) {
            sessionStorage.setItem("theme", "simple");
        } else if (count == 1) {
            sessionStorage.setItem("theme", "dark");
        } else if (count == 2) {
            sessionStorage.setItem("theme", "orange");
        }
    }, [count]);

    const handleClickToggle = () => {
        setIsCommand(!isCommand);
    }

    const handleClickCountChange = (e) => {
        if (e.target.className == "left") {
            setCount(prev => prev == 0 ? 2 : prev - 1);
        } else {
            setCount(prev => prev == 2 ? 0 : prev + 1);
        }
    }

    useEffect(() => {

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const theme = [
        {
            map: { back: "#FFFFFF", icon: "#1E90FF" },
            modal: { text_back: "rgba(0,0,0,0.7)", image_back: "" }
        },
        {
            map: { back: "#1A1A2E", icon: "#4F9DA6" },
            modal: { text_back: "rgba(26,26,46,0.95)", image_back: "" }
        },
        {
            map: { back: "#FFE4C4", icon: "#FF4500" },
            modal: { text_back: "rgba(139,69,19,0.8)", image_back: "#FFE4C4" }
        },
    ];

    const handleClickClose = (e) => {
        if (e.target.className == "close" || e.target.className == "back") {
            setIsModal(false);
        }
    }

    return { handleClickToggle, isCommand, handleClickCountChange, count, theme, handleClickClose };
}