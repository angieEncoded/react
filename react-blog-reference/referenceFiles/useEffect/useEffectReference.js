import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';
import Button from "react-bootstrap/Button"

// useEffect will run on every render of the component

const Home = (props) => {

    const [blogs, setBlogs] = useState([
        { title: "My Hobbies", body: "I love sleeping", author: "Babs", id: 1 },
        { title: "Single Cat Home please!", body: "I hate Babs", author: "Rory", id: 2 },
        { title: "I'm too old for this.", body: "Sasha is annoying", author: "Babs", id: 3 },
        { title: "Babs is my hero!", body: "I am gonna be just like her when I grow up!", author: "Bubble", id: 4 },
        { title: "Show off my bacon", body: "I'm just shakin shakin!", author: "Shakey", id: 5 },
        { title: "Paper is tasty", body: "I put holes in the human's notes", author: "Sasha", id: 6 },
    ]);
    const [name, setName] = useState("Babs")

    // runs when it first loads, and then whenever data changes
    // Changing the state inside of use effect may put you in an endless loop
    useEffect(() => {
        console.log("First useEffect Function Running with no dependencies will run every rerender")
    });

    // Add an empty array to make useEffect run only once on the first render
    useEffect(() => {
        console.log("Second useEffect function which will run only once")
    }, [])

    // Use effect will watch this value and any time it changes it will run the function
    useEffect(() => {
        console.log("Third useEffect function watching the name which will only run on that state change")
        console.log(name)
    }, [name])


    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(item => item.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <>
            <BlogList data={blogs} title="All Entries" deleteBlog={deleteBlog} />
            <BlogList data={blogs.filter((item) => item.author === "Babs")} title="Bab's Blogs" />
            <Button variant="secondary" onClick={() => setName("Rory")}>Change Name</Button>{' '}
            <p>{name}</p>
        </>
    )
}

export default Home