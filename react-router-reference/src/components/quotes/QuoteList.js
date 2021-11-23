import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// Sort the quotes helper function wants the quotes and a boolean
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory()
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const sortedType = queryParams.get("sort");


  const changeSort = (sort) => {
    // This causes the component to get re-evaluated and rerenders the page
    // history.replace(`${location.pathname}?sort=${sortedType === "asc" ? "desc" : "asc"}`)


    // Alternate way to describe this is with an object
    history.replace({
      pathname: location.pathname,
      search: `sort=${sortedType === "asc" ? "desc" : "asc"}`
    })
  }

  const sortedQuotes = sortQuotes(props.quotes, sortedType === "asc")

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* Sent in an anonymous function to use parameters */}
        <button onClick={changeSort}>Sort {sortedType === "asc" ? "Ascending" : "Descending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
