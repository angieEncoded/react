import { useEffect, useState } from 'react'

const useFetch = (url) => {

    // Make this generic so we can fetch any data
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsPending(true);
        // Don't want to hard code the endpoint - we take this in as a parameter
        fetch(url)
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
                // console.log(error.message)
                // console.log(error.cause)
                setError(`Error from server: ${error.cause} ${error.message}`);
                setIsPending(false)
            })
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