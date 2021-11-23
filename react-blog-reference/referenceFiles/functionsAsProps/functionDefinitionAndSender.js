import React, { useState } from 'react'
import BlogList from './functionReceiver';


const Home = (props) => {

    const [blogs, setBlogs] = useState([
        { title: "My Hobbies", body: "I love sleeping", author: "Babs", id: 1 },
        { title: "Single Cat Home please!", body: "I hate Babs", author: "Rory", id: 2 },
        { title: "I'm too old for this.", body: "Sasha is annoying", author: "Babs", id: 3 },
        { title: "Babs is my hero!", body: "I am gonna be just like her when I grow up!", author: "Bubble", id: 4 },
        { title: "Show off my bacon", body: "I'm just shakin shakin!", author: "Shakey", id: 5 },
        { title: "Paper is tasty", body: "I put holes in the human's notes", author: "Sasha", id: 6 },
    ]);

    const deleteBlog = (id) => {
        // filter out the blog we do not want by matching every other item to be put in the new array
        const newBlogs = blogs.filter(item => item.id !== id)
        setBlogs(newBlogs);
    }

    // listed items MUST have a key property or React can't keep track of where they are in the dom
    // Key must be unique
    return (
        <>

            {/* We define all the logic to deal with the blogs list here */}
            {/* We then send through a reference to the function on the props the receiving component can call */}
            {/* In this case I chose deleteBlog because it's descriptive and I feel 'handler' is extraneous */}
            <BlogList data={blogs} title="All Entries" deleteBlog={deleteBlog} />

            <BlogList data={blogs.filter((item) => item.author === "Babs")} title="Bab's Blogs" />
        </>
    )
}

export default Home