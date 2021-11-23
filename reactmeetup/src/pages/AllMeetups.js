import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList"

const AllMeetups = () => {

    // The the initial state of a loading spinner while we get data
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // First item will be run by react on our behalf
    // If we don't have the second array argument, it will run every time. No difference
    // to just running the code
    useEffect(() => {
        setLoadingSpinner(true);
        // If we had gotten something from props, then we would put that in
        // the dependencies


        // Send the post request
        fetch('http://localhost:8181/meetups').then(response => {
            return response.json();
        }).then((data) => {

            // I didn't have to do the extra stuff max did with firebase since
            // I used json-server and that gave me the data as it was expected
            setLoadingSpinner(false);
            setLoadedMeetups(data);
        })
    }, []);// react will check the values in this array
    // We *could* use the setLoadingSpinned and setLoadedMeetups but react 
    // guarantees them so we can omit them
    // The empty array will guarantee this will only run the first time this page is run




    // This will only run if the loading state is tru
    if (loadingSpinner) {
        return (
            <p>Loading...</p>
        )
    }


    return (

        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />

        </section>

    )
}

export default AllMeetups
