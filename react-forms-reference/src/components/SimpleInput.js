import useInput from "../hooks/useInput"

const SimpleInput = () => {

  // Hook for the entered name
  const {
    value: enteredName, // assign these to aliases that match the inputs
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChanged: nameChanged,
    inputBlur: nameInputBlur,
    resetInput: resetNameInput
  } = useInput(value => value.trim() !== ""); // Send in the validation function

  // Hook for the email address
  const {
    value: enteredEmail, // assign these to aliases that match the inputs
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChanged: emailChanged,
    inputBlur: emailInputBlur,
    resetInput: resetEmailInput
  } = useInput(value => value.includes("@")); // Send in the validation function

  let formIsValid = false;
  // In here we would check all our valid states and then set the overall form
  // The button is disabled until all these checks are true
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  // Prevent default form submission and then send the form data
  const submitForm = (event) => {

    event.preventDefault();
    if (formIsValid) {
      console.log("submitted form")
      // Use the functions that we exposed when requesting the hook
      resetNameInput();
      resetEmailInput();

    } else {
      //send some error
    }

  }

  return (
    // The react way to do a form
    <form onSubmit={submitForm}>

      {/* Name Input Here */}
      <div className={nameInputHasError ? 'form-control invalid' : 'form-control'}>
        <label>Your Name
          <input
            type='text'
            onChange={nameChanged}
            value={enteredName}
            onBlur={nameInputBlur} />
        </label>
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty</p>}


      {/* Email Input Here */}
      <div className={emailInputHasError ? 'form-control invalid' : 'form-control'}>
        <label>Your Email
          <input
            type='text'
            onChange={emailChanged}
            value={enteredEmail}
            onBlur={emailInputBlur} />
        </label>
      </div>
      {emailInputHasError && <p className="error-text">Email must have an @</p>}

      <div className="form-actions">
        {/* Disable the button until the form is valid */}
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
