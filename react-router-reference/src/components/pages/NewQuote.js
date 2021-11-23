import React, { useEffect } from 'react'
import QuoteForm from "../quotes/QuoteForm"
import { useHistory } from 'react-router-dom'
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"



// history.push() - user can use the back button
// history.replace() - user cannot use the back button


const NewQuote = () => {

    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push("/quotes");
        }
    }, [status, history])

    const sendAddQuote = (quoteData) => {
        sendRequest(quoteData)
    }


    return (

        <QuoteForm isLoading={status === 'pending'} onAddQuote={sendAddQuote} />
    )
}

export default NewQuote
