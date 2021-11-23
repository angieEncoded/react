import React from 'react'
import Card from 'react-bootstrap/Card'
// import classes from "./UserList.module.css"
import ListGroup from 'react-bootstrap/ListGroup'


const UserList = (props) => {
  return (
    <Card className="mt-5 p-2">
      <ListGroup variant="flush">
        {props.users.map((user, index) => <ListGroup.Item key={user.id}>{user.name}, ({user.age}) years old</ListGroup.Item>)}
      </ListGroup>
    </Card>
  )
}

export default UserList
