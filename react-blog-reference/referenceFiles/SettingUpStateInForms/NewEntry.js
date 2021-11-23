import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const NewEntry = () => {

    // Set up the state first
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Rory");

    // Keep track of what is in the state fields
    console.log(title)
    console.log(body)
    console.log(author)

    return (
        <Container>
            <form>
                <Card className="mt-5 p-3">
                    <Card.Body>
                        <Card.Title>New Blog Entry:</Card.Title>
                        <Card.Text>

                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    required
                                    // This will set up two way binding between the state and this element
                                    onChange={(event) => setTitle(event.target.value)}
                                    value={title}
                                />
                            </FloatingLabel>



                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    // Set up two way binding with the state
                                    onChange={(event) => setBody(event.target.value)}
                                    value={body}
                                />
                            </FloatingLabel>


                            <Form.Select aria-label="Select" className="mt-3"
                                value={author}
                                onChange={(event) => setAuthor(event.target.value)}>
                                <option>Rory</option>
                                <option>Babs</option>
                                <option>Sasha</option>
                                <option>Shakey</option>
                                <option>Bubble</option>
                            </Form.Select>




                        </Card.Text>
                        <Button variant="primary" >Submit</Button>
                    </Card.Body>
                </Card>
            </form>
        </Container>
    )
}

export default NewEntry

