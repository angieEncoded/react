import React, { useState, useEffect } from 'react'

// Create our context object
// Takes a default context
// We get back a component!
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { }, // this can just be an empty function and it helps with ide autocompletion
    // Otherwise, dot notation won't see any function on this object to suggest
    onLogin: (email, password) => { }
});

// All the logic can live in this app instead
export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();


    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    return (<AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler

        }}>{props.children}</AuthContext.Provider>)
}

export default AuthContext

// Now we need to provide the context to React
// We need to consume it - hook into it or listen to it
// Providing means we wrap components that need it, in it.
// If we need it everywhere, wrap app in it