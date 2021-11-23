import React from 'react'

const SingleTask = ({ task, onDelete, onToggle }) => {
    return (

        <li className={`list-group-item singleTask ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <i className="las la-2x la-trash float-end text-danger singleTaskDelete"
                onClick={() => onDelete(task.id)}
            ></i>
            {task.text} <br />
            {task.day}
        </li >


    )
}

export default SingleTask
