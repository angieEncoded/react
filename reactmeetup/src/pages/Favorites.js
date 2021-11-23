import React from 'react'
import { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context'


const Favorites = () => {

    // connect to the context
    const favoritesContext = useContext(FavoritesContext);

    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <p>No Favorites! Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesContext.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>


    )
}

export default Favorites
