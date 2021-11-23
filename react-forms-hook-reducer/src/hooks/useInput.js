import { useReducer } from 'react'
// This hook will check forms for valid input
const initialInputState = {

    value: '',
    istouched: false

}

const inputStateReducer = (previousStateSnapshot, action) => {

    if (action.type === "INPUT") {
        return { value: action.value, isTouched: previousStateSnapshot.isTouched }
    }
    if (action.type === "BLUR") {
        return { isTouched: true, value: previousStateSnapshot.value }
    }

    if (action.type === "RESET") {
        return { isTouched: false, value: "" }
    }

    return initialInputState;
}


// This hook will accept a function which it will run on the input to check the validity.
const useInput = (validateValueFunction) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    // Check validity and touched status of the inputs
    // Here it takes in a function that has the logic to determine validity
    const valueIsValid = validateValueFunction(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    // Change the state of the touched attributes when we focus out of an item
    const valueChanged = event => {
        dispatch({ type: 'INPUT', value: event.target.value })
    }
    const inputBlur = event => { dispatch({ type: 'BLUR' }) }

    // Reset the state of the input and whether it was touched
    const resetInput = () => {
        dispatch({ type: "RESET" })
    }

    // Expose the values and functions we are using to the code calling the hook
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChanged,
        inputBlur,
        resetInput
    }
}

export default useInput
