import React, { useState } from 'react'
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "New Website", body: "sfsafsdaf", author: "Babs", id: 1 },
        { title: "Welcome", body: "lorem", author: "Rory", id: 2 },
        { title: "Tips", body: "lorem", author: "Yaya", id: 3 }
    ]);

    // listed items MUST have a key property or React can't keep track of where they are in the dom
    // Key must be unique
    return (
        <>
            {/* This is sending through a property called data with the blogs information */}
            <BlogList data={blogs} />
        </>
    )
}

export default Home