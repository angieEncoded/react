import { useState, useEffect } from 'react'

// Hooks must start with use
const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forward) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forward]);

    // Return whatever we want, in this case we want the state of the counter
    return counter;

}


export default useCounter;