import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const NewEntry = () => {

    // Set up the state first
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Rory");
    const [isPending, setIsPending] = useState(false);

    // This represents the browser history
    const history = useHistory();
    // Takes you back 1 page in the history
    // history.go(-1)


    const submitForm = (event) => {
        setIsPending(true);
        event.preventDefault();

        const entry = {
            title: title,
            body: body,
            author: author
        }
        //console.log(entry)

        fetch("http://localhost:8181/blogs", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
            .then((results) => {
                setIsPending(false);
                //console.log(results);
                // redirect the user after the submission
                history.push("/")
            })
            .catch((error) => {
                setIsPending(false);
                console.log(error);
            })




    }

    // console.log(title)
    // console.log(body)
    // console.log(author)

    return (
        <Container>
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">New Entry</h5>

                    <form onSubmit={submitForm}>
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
                                onChange={(event) => setBody(event.target.value)}
                                value={body}
                            />
                        </FloatingLabel>

                        <Form.Select aria-label="Select" className="mt-3"
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}>
                            <option value="Rory" defaultValue>Rory</option>
                            <option value="Babs">Babs</option>
                            <option value="Sasha">Sasha</option>
                            <option value="Shakey">Shakey</option>
                            <option value="Bubble">Bubble</option>
                        </Form.Select>

                        {!isPending && <button className="btn btn-secondary mt-2">Add</button>}
                        {isPending && <button disabled className="btn btn-secondaryu mt-2">Adding Blog...</button>}
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default NewEntry

