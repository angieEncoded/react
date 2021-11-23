import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "New Website", body: "sfsafsdaf", author: "Babs", id: 1 },
        { title: "Welcome", body: "lorem", author: "Rory", id: 2 },
        { title: "Tips", body: "lorem", author: "Yaya", id: 3 }
    ]);

    // listed items MUST have a key property or React can't keep track of where they are in the dom
    // Key must be unique
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

export default Home