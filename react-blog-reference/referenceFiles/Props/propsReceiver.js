import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

// Alternative way to get data from props is with destructuring
// const BlogList = ({data}) => {


// Sending the blogs through to this component as a property called data
const BlogList = (props) => {


    // Here I extract the data from the prop and set it to the variable
    const blogs = props.data

    return (
        <>
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
                    <Button variant="secondary">See this entry</Button>
                </Card>
            ))}
        </>
    )
}

export default BlogList
