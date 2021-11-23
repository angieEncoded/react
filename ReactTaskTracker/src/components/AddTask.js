import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {


    // These will have app-level state - each part of the form has its own state
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false); // default is false


    const onSubmit = (event) => {
        event.preventDefault();

        if (!text) {
            alert('Please add a task')
        }
        onAdd({ text, day, reminder })
        setText('');
        setDay('');
        setReminder(false);

    }








    return (

        <form className="needs-validation" noValidate onSubmit={onSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="taskName" placeholder="taskName"
                    value={text} onChange={(event) => setText(event.target.value)} required/>
                <label htmlFor="taskName">Task Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="dayTime" placeholder="Day and Time"
                    value={day} onChange={(event) => setDay(event.target.value)} required/>
                <label htmlFor="dayTime">Day and Time</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" checked={reminder} id="reminderToggle"
                    value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)} />
                <label className="form-check-label" htmlFor="reminderToggle">
                    Set Reminder
                </label>
            </div>
            <div className="d-grid gap-2 mt-4">
                <input type="submit" value="Save Task" className="btn btn-secondary btn-block" />
                <hr className="mb-2" />
            </div>
        </form>


    )
}

export default AddTask





