import { useEffect, useState } from 'react'

const useFetch = (url) => {

    // Make this generic so we can fetch any data
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        // abort controller for terminating the fetch if the user navigates to a new page
        // before the request has completed
        // AbortController is a native Javascript function
        const abortControl = new AbortController();

        setIsPending(true);
        // Don't want to hard code the endpoint - we take this in as a parameter
        fetch(url, { signal: abortControl.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText, {
                        cause: response.status
                    });
                }

                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false)
                setError(null)
            })
            .catch(error => {

                // Return out of the catch if the error thrown was an abort error
                if (error.name === "AbortError") {
                    // return console.log("fetch aborted");
                    return;
                }


                if (error.message.includes("Failed to fetch")) {
                    setError(`Error from server: ${error.message}. Server may be down.`)
                } else {
                    setError(`Error from server: ${error.cause} ${error.message}`);
                }
                // console.log(error.message)
                // console.log(error.cause)

                setIsPending(false)
            })
        // Set up a cleanup function that will stop the fetch
        return () => { abortControl.abort(); }


        // We must add the url as a dependency since we are taking it in as a parameter
    }, [url])

    // These are the three properties being used in here and we want to send these back out
    return {
        data,
        isPending,
        error
    }


}

export default useFetch