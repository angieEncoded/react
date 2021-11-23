import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(false);

    // Set an error state so we can work with it later
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsPending(true);
        fetch('http://localhost:8181/blogss')
            .then((response) => {

                //console.log(response)
                // Handle the error coming from the server
                if (!response.ok) {
                    throw new Error(response.statusText, {
                        cause: response.status
                    });
                }

                //console.log(response)
                return response.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                console.log(error.message)
                console.log(error.cause)

                // Set the error message on the state
                setError(`Error from server: ${error.cause} ${error.message}`);
                setIsPending(false)

                //console.log(error)
            })
    }, [])

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(item => item.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <>
            {error && <div className="mt-5 text-center">{error} </div>}
            {isPending && <h1 className="mt-5 text-center">Loading... </h1>}
            {blogs && <BlogList data={blogs} title="All Entries" deleteBlog={deleteBlog} />}
        </>
    )
}

export default Home