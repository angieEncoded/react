import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

// Sending the blogs through to this component as a property called data
const BlogList = (props) => {

    // Here I extract the data from the prop and set it to the variable
    const blogs = props.data;
    const title = props.title;
    // Take the function out of the props
    const deleteBlog = props.deleteBlog;

    return (
        <>
            <h1 className="mt-5 text-center">{title}</h1>
            {/* This is how we output a list */}
            {blogs.map(item => (
                <Card className="mt-5 shadow" key={item.id}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.body}
                        </Card.Text>

                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{item.author}</ListGroup.Item>
                    </ListGroup>
                    {/* Call the function that lives in the Home component to delete this blog */}
                    <Button variant="secondary" onClick={() => deleteBlog(item.id)}>Delete Item</Button>
                </Card>
            ))}
        </>
    )
}

export default BlogList
