import React from 'react'
import Button from 'react-bootstrap/Button'


const Home = () => {

    const buttonClicked = (event) => {
        console.log("Button clicked")
    }

    // We have to accept the event object as a parameter
    const secondButton = (event, name) => {
        console.log(`Hello ${name}`)
        console.log(event.target)
    }


    return (
        <>
            <h1 className="mt-5 text-center">Home Page</h1>
            <Button variant="secondary" className="mt-5" onClick={buttonClicked}>No Hello</Button>{' '}

            {/* In order to get access to the event object we have to pass it in to the invoked function as a parameter */}
            <Button variant="secondary" className="mt-5" onClick={(event) => secondButton(event, 'Babs')}>Hello with a passed Value</Button>{' '}

        </>
    )
}

export default Home