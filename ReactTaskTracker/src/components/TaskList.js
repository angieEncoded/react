import React from 'react'
import SingleTask from './SingleTask'

const TaskList = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {/* <ul className="list-group list-group-flush"> */}
            {tasks.map((task) => (
                <SingleTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
            {/* </ul> */}
        </>
    )
}

export default TaskList
