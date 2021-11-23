import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './hooks/useFetch';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://localhost:8181/blogs/${id}`);
    const history = useHistory();

    const deleteEntry = () => {
        fetch(`http://localhost:8181/blogs/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                console.log(response)
                history.push("/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <Container className="mt-5">
            {error && <div className="text-center">{error} </div>}
            {isPending && <h1 className="text-center">Loading... </h1>}

            {blog &&
                <>
                    <h1 className="mb-5 text-center">Detailed Entry:</h1>
                    <Card>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                            <Card.Text>
                                {blog.body}
                            </Card.Text>
                            <Button variant="secondary" onClick={deleteEntry}>Delete</Button>
                        </Card.Body>

                    </Card>
                </>
            }
        </Container>
    )
}

export default BlogDetails

