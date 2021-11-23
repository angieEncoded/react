import React, { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from "../ui/Card"
import FavoritesContext from "../../store/favorites-context"

const MeetupItem = (props) => {

    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsfavorite(props.id);

    function toggleFavorite() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.id)
        } else {
            favoritesContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address

            })
        }
    }




    return (

        <li className={classes.item}>
            <Card >
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />

                </div>
                <div className={classes.content}>
                    <h3>{props.title} </h3>
                    <address>{props.address} </address>
                    <p>{props.description} </p>
                </div>
                <button className={classes.actions} onClick={toggleFavorite}>{itemIsFavorite ? "Remove from favorites" : "Add to favorites"}</button>
            </Card>
        </li>
    )
}

export default MeetupItem
