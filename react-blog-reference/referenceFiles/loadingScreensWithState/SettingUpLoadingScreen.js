import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = (props) => {

    // We clear out our blogs array and set the initial state to null. We will update this when we 
    // get the data from the database
    const [blogs, setBlogs] = useState(null);

    // Use another slice of state to watch whether we have data
    const [isPending, setIsPending] = useState(false);

    console.log(JSON.stringify(blogs))

    // Grab the data from a database. Note that we cannot make the function async 
    // we must use the promise api if we are using the fetch inside useEffect
    useEffect(() => {
        // Set our pending state
        setIsPending(true);
        fetch('http://localhost:8181/blogs')
            .then((response) => {
                return response.json()
            })
            .then(data => {
                //console.log(data);
                // Update the state with the value
                setBlogs(data);

                // As soon as we have set the data we are no longer pending
                setIsPending(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(item => item.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <>

            {/* Another conditional to show a loading screen if we are waiting */}
            {isPending && <h1 className="mt-5 text-center">Loading... </h1>}



            {/* Conditional templating in react. Left will be evaluated first and if it's false the right hand side */}
            {/* will not be rendered */}
            {blogs && <BlogList data={blogs} title="All Entries" deleteBlog={deleteBlog} />}
        </>
    )
}

export default Home