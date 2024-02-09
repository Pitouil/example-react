import {useState} from "react";

export const useCount = (initialCount = 0, min = Infinity * -1, max = Infinity) => {
    const [count, setCount] = useState<number>(initialCount);

    const updateCount = (value) => {
        setCount((prev) => Math.max(Math.min(prev + value, max), min));
    }

    const increment = () => updateCount(1);
    const decrement = () => updateCount(-1);

    return {count, setCount, updateCount, increment, decrement};
}