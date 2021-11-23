import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from "../Inputs/Input"

const emailReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes('@') }
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 }
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }

  return { value: '', isValid: false }
}



const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  // Our reducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  const authContext = useContext(AuthContext);

  const emailInputref = useRef();
  const passwordInputRef = useRef();


  // this is how we alias with object destructuring pull the isValid proprety out as some name 
  // as = : in this context
  // If we pull this value from the state directly, we have the snapshot in time from 
  // when either object became 'valid'
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;






  // Go back to the useEffect solution - this will run with the latest state values
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]) // And now this will only run if the state had been changed


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value })

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputref.current.focus();
    } else {
      passwordInputRef.current.focus();
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>


        <Input
          ref={emailInputref}
          id="email"
          label="email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onblur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef}
          id="passsword"
          label="password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onblur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;