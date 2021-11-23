import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from "./hooks/useFetch"

const Home = () => {

    const url = "http://localhost:8181/blogs"
    const { data: blogs, isPending, error } = useFetch(url);

    return (
        <>
            {error && <div className="mt-5 text-center">{error} </div>}
            {isPending && <h1 className="mt-5 text-center">Loading... </h1>}
            {blogs && <BlogList data={blogs} title="All Entries" />}
        </>
    )
}

export default Home