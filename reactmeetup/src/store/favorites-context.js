import React from 'react'
import { createContext, useState } from 'react'

// Store it on a server later


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => { },
    removeFavorite: (id) => { },
    itemIsfavorite: (id) => { }
});

export const FavoritesContextProvider = (props) => {

    const [userFavorites, setUserFavorites] = useState([]);


    const addFavorite = (favoriteMeetup) => {
        // We have to get the previous state by running an anonymous function
        setUserFavorites((previousStateSnapshot) => {
            return previousStateSnapshot.concat(favoriteMeetup);
        })
    }

    const removeFavorite = (id) => {
        setUserFavorites((previousStateSnapshot) => {
            // will delete the item we specify
            return previousStateSnapshot.filter(meetup => meetup.id !== id);
        })
    }

    const itemIsfavorite = (id) => {
        // returns true if it exists in the array
        return userFavorites.some(item => item.id === id)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite,
        removeFavorite,
        itemIsfavorite
    };

    return (

        // This is a component wrapper that will give our components access to the state data
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>

    )
}


export default FavoritesContext