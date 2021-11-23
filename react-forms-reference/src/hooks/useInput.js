import { useState } from 'react'
// This hook will check forms for valid input




// This hook will accept a function which it will run on the input to check the validity.
const useInput = (validateValueFunction) => {

    // Get the value in from the input 
    const [enteredValue, setEnteredValue] = useState("");
    const [wasTouched, setWasTouched] = useState(false);

    // Check validity and touched status of the inputs
    // Here it takes in a function that has the logic to determine validity
    const valueIsValid = validateValueFunction(enteredValue);
    const hasError = !valueIsValid && wasTouched;

    // Change the state of the touched attributes when we focus out of an item
    const valueChanged = event => { setEnteredValue(event.target.value); }
    const inputBlur = event => { setWasTouched(true); }

    // Reset the state of the input and whether it was touched
    const resetInput = () => {
        setEnteredValue("");
        setWasTouched(false);
    }

    // Expose the values and functions we are using to the code calling the hook
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChanged,
        inputBlur,
        resetInput
    }
}

export default useInput
