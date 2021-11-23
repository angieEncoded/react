import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container mt-5">
            <h1>404 Not Found</h1>
            <p>That page cannot be found</p>
            <Link to="/"> Back home...</Link>
        </div>
    )
}

export default NotFound
