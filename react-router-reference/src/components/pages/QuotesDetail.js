import React, { useEffect } from 'react'
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import Comments from "../comments/Comments"
import HighlightedQuote from "../quotes/HighlightedQuote"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner'

// const DUMMY_DATA = [
//     { id: 'q1', author: 'Babs', text: 'I am too tired for this' },
//     { id: 'q2', author: 'Rory', text: 'I want to go outside' }
// ]


const QuotesDetail = () => {

    // Get the path definition from the main router - it will be in .path
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);


    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])


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

    // Objects are always truthy so check if a field inside exists which will be falsy
    if (!loadedQuote.text) {
        return <p>No Quote Found</p>
    }



    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    {/* We are already on a part of this page that we want to link to */}
                    <Link className='btn--flat' to={`${match.url}/comments`} >Quote Comments</Link>
                </div>
            </Route>
            {/* We can use the definition here for the path */}
            <Route path={`${match.path}/comments`} >
                <Comments />
            </Route>
        </>
    )
}

export default QuotesDetail
