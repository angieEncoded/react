import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import CustomModal from "../ui/CustomModal"

const AddUser = (props) => {

    // Add the two references
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(); // dont set this to an empty object, it will still be truthy
    // must reset it to undefined to dismiss the modal

    const dismissError = () => {
        setError(null)
    }

    const addUser = (event) => {
        event.preventDefault();
        const enteredName = usernameInputRef.current.value
        const enteredAge = ageInputRef.current.value;

        // Basic checks
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Username cannot be blank."
            })
            return;
        }
        // Force a conversion to a number with +
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Age must be realistic...."
            })
            return;
        }

        // Pointer to the function in App.js
        props.onAddUser(enteredName, enteredAge);

        // This is an edge case when manipulating the dom directly is okay
        usernameInputRef.current.value = "";
        ageInputRef.current.value = ""
    }

    return (
        // <Container>
        <>
            {/* Putting the error modal in here because this is ultiamtely where the logic is happening */}
            {error && <CustomModal title={error.title} message={error.message} dismissError={dismissError} />}

            <Card className="p-2 mt-5 mx-3">
                <form onSubmit={addUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            ref={usernameInputRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Age"
                            ref={ageInputRef} />
                        <Form.Text className="text-muted">
                            We'll never tell.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="secondary" onClick={addUser}>Submit</Button>{' '}
                    {/* <Button text="Add User" type="submit" /> */}
                </form>
            </Card >

        </>
        // </Container>
    )
}

export default AddUser
