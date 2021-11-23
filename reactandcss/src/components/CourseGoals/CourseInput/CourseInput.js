import React, { useState } from 'react';
// import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import classes from './CourseInput.module.css';

// const FormControl = styled.div`
//  {
//   margin: 0.5rem 0;
// }

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red' : 'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => (props.invalid ? 'rgb(245, 163, 163)' : "transparent")}
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `;













const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {

    // Reset the form after accepting that it's valid
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Replaced the div with the styled component */}
      {/* <FormControl className={isValid ? '' : 'invalid'}> */}

      {/* We can also use props */}
      {/* <FormControl invalid={!isValid}> */}

      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>

        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* Using inline styles */}
        {/* <label style={{ color: !isValid ? 'red' : ' #ccc' }}>Course Goal</label> */}
        {/* <input style={{ borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} /> */}

      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
