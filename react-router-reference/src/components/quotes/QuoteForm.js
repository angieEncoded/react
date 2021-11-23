import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom'
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {

  // Set up a state to manage whether the user has focused the form
  const [formState, setFormState] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  // Change the state as soon as the user has focused the form
  const formActive = () => {
    setFormState(true);
  }

  const finshedEntering = () => {
    setFormState(false)
  }


  return (
    <>
      {/* Remember you must return if you are not using implicit return */}
      <Prompt when={formState} message={(location) => { return 'Are you sure you want to leave? Changes will be lost.' }} />
      <Card>
        <form onFocus={formActive} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finshedEntering} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
