// Put this in an input component
const Input = (props) => {
    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}


// And then use it in other components with props
<Card className={classes.login}>
    <form onSubmit={submitHandler}>


        <Input
            id="email"
            label="email"
            type="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChange={emailChangeHandler}
            onblur={validateEmailHandler}
        />

        <Input
            id="passsword"
            label="password"
            type="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onblur={validatePasswordHandler}
        />

        <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                Login
            </Button>
        </div>
    </form>
</Card>