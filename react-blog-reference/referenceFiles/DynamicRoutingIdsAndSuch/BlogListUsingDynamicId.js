import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const BlogList = (props) => {


    const blogs = props.data;
    const title = props.title;

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
                        <ListGroup.Item>
                            <Link className="btn btn-secondary" to={`/blogs/${item.id}`}>
                                Details
                            </Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </>
    )
}

export default BlogList
