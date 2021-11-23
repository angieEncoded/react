import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory } from 'react-router-dom'

const NewMeetup = () => {

    // This is a hook that stores the pages we have navigated to
    const history = useHistory();

    // Send the post request
    const addNewMeetup = async (data) => {
        const results = await fetch('http://localhost:8181/meetups', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // This will replace the browser history and will prevent the user from using the
        // back button to get back to the form
        history.replace('/')

        // Use history.push() if you want them to be able to use the back button
    }

    return (

        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addNewMeetup} />
        </section>


    )
}

export default NewMeetup
