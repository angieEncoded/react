import React, { useEffect } from 'react'
import QuoteList from "../quotes/QuoteList"
import useHttp from '../hooks/use-http'
import { getAllQuotes } from "../lib/api"
import LoadingSpinner from '../UI/LoadingSpinner'
import NoQuotesFound from "../quotes/NoQuotesFound"

// const DUMMY_DATA = [
//     { id: 'q1', author: 'Babs', text: 'I am too tired for this' },
//     { id: 'q2', author: 'Rory', text: 'I want to go outside' }
// ]

const AllQuotes = () => {

    // Start in loading state
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    // Check if we are pending
    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    // output something if there is an error
    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedQuotes} />
    )
}

export default AllQuotes