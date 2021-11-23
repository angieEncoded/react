import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const BlogDetails = () => {

    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch(`http://localhost:8181/blogs/${id}`);

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
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </>
            }




        </Container>
    )
}

export default BlogDetails

