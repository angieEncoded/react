import useInput from "../hooks/useInput";
// Values coming back from the hook
// return {
//   value: enteredValue,
//   isValid: valueIsValid,
//   hasError,
//   valueChanged,
//   inputBlur,
//   resetInput
// }

// Store validation helper functions in here
const isNotEmptyString = value => value.trim() !== "";
const isValidEmail = value => value.includes("@");





const BasicForm = (props) => {

  // Hook for FirstName
  const {
    value: fnameValue,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    valueChanged: fnameValueChanged,
    inputBlur: fnameInputBlur,
    resetInput: fnameResetInput
  } =
    useInput(isNotEmptyString) // Send in a function to check validity

  // Hook for LastName
  const {
    value: lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChanged: lnameValueChanged,
    inputBlur: lnameInputBlur,
    resetInput: lnameResetInput
  } =
    useInput(isValidEmail)

  // Hook for Email
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChanged: emailValueChanged,
    inputBlur: emailInputBlur,
    resetInput: emailResetInput
  } =
    useInput(isValidEmail)

  // The button is disabled until all these checks are true
  let formIsValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }



  const submitForm = (event) => {
    event.preventDefault();

    // Form Submission - If all fields check out then submit otherwise return
    if (formIsValid) {
      console.log("Submitted form!")
      emailResetInput();
      lnameResetInput();
      fnameResetInput();
    } else {
      // Send some error logic here
      return;
    }

  }


  return (
    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className={fnameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onBlur={fnameInputBlur}
            onChange={fnameValueChanged}
            value={fnameValue} />
          {fnameHasError && <p className="error-text">First name cannot be blank</p>}
        </div>





        <div className={lnameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onBlur={lnameInputBlur}
            onChange={lnameValueChanged}
            value={lnameValue} />
          {lnameHasError && <p className="error-text">Last name cannot be blank</p>}
        </div>


      </div>



      <div className={emailHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onBlur={emailInputBlur}
          onChange={emailValueChanged}
          value={emailValue} />
        {emailHasError && <p className="error-text">Email must have an @</p>}
      </div>




      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
