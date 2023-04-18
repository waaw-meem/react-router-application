import { useContext } from "react"

import Card from "../UI/Card"
import classes from "./MeetupItem.module.css"
import FavouriteContext from "../../store/favourite-context";

function MeetupItem(props){
        const favouriteCtx = useContext(FavouriteContext)

        const itemFavourite = favouriteCtx.itemIsHandler(props.id);
        function toggleFavoriteHandler(){
            if(itemFavourite){
                favouriteCtx.removeFavourite(props.id)
            }else{
                favouriteCtx.removeFavourite({
                    id:props.id,
                    title:props.title,
                    description:props.description,
                    image: props.image,
                    address:props.address,
                })
            }
    }

    return(
        <li className={classes.item}>
           <Card>
           <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteHandler}>
                    {itemFavourite ? "Remove from favourite": "To favorite"}
                    </button>
            </div>
           </Card>
        </li>
    )
}

export default MeetupItem