import { useEffect, useState } from "react";

export const useTheme = () => {
    const [count, setCount] = useState(0);
    const [isCommand, setIsCommand] = useState(false);

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.shiftKey && e.key == "ArrowLeft") {
            setCount(prev => prev == 0 ? 2 : prev - 1);
        } else if (e.ctrlKey && e.shiftKey && e.key == "ArrowRight") {
            setCount(prev => prev == 2 ? 0 : prev + 1);
        }
    }

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
    return { handleClickToggle, isCommand, handleClickCountChange };
}