import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'


const Home = () => {

    // Array destructure the value and the function that will update the value
    const [name, setName] = useState("Babs");
    const [age, setAge] = useState("5");

    // Change the item with the function on the button click
    const buttonClicked = (event) => {
        setName("Rory")
        setAge(6)
    }

    return (
        <>
            {/* The button click will change the state and trigger a re-render of the component */}
            <h1 className="mt-5 text-center">Home Page</h1>
            <Button variant="secondary" className="mt-5" onClick={buttonClicked}>No Hello</Button>{' '}
            <p className="mt-5">{name} is {age} years old</p>
        </>
    )
}

export default Home