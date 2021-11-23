import React, { useRef } from 'react'
import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"



const NewMeetupForm = (props) => {

    const titleInputReference = useRef();
    const imageInputReference = useRef();
    const addressInputReference = useRef();
    const descriptionInputReference = useRef();
    // We can set up references to dom elements to get direct access to them


    const submitForm = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputReference.current.value;
        const enteredImage = imageInputReference.current.value;
        const enteredAddress = addressInputReference.current.value;
        const enteredDescription = descriptionInputReference.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetup);

        // console.log(meetup)

    }




    return (

        <Card>
            <form className={classes.form} onSubmit={submitForm}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input ref={titleInputReference} type="text" id="title" required />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Image URL</label>
                    <input ref={imageInputReference} type="text" id="image" required />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input ref={addressInputReference} type="text" id="address" required />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea ref={descriptionInputReference} rows="5" id="description" required></textarea>
                </div>
                <div className={classes.actions}>
                    <button type="submit">Add Meetup</button>
                </div>


            </form>

        </Card >






    )
}

export default NewMeetupForm
