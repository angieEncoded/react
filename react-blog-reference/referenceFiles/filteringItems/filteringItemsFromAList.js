import React, { useState } from 'react'
import BlogList from './BlogList';


const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My Hobbies", body: "I love sleeping", author: "Babs", id: 1 },
        { title: "Single Cat Home please!", body: "I hate Babs", author: "Rory", id: 2 },
        { title: "I'm too old for this.", body: "Sasha is annoying", author: "Babs", id: 3 },
        { title: "Babs is my hero!", body: "I am gonna be just like her when I grow up!", author: "Bubble", id: 4 },
        { title: "Show off my bacon", body: "I'm just shakin shakin!", author: "Shakey", id: 5 },
        { title: "Paper is tasty", body: "I put holes in the human's notes", author: "Sasha", id: 6 },
    ]);

    // listed items MUST have a key property or React can't keep track of where they are in the dom
    // Key must be unique
    return (
        <>
            {/* This is sending through a property called data with the blogs information */}
            <BlogList data={blogs} title="All Entries" />

            <BlogList data={blogs.filter((item) => item.author === "Babs")} title="Bab's Blogs" />
        </>
    )
}

export default Home