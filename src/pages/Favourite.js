import { useContext } from "react"
import FavouriteContext from "../store/favourite-context"
import MeetupList from "../components/meetups/MeetupList"

function Favourite(){
    const favoriteCtx = useContext(FavouriteContext)
    let content;

    if(FavouriteContext.totalFavourites === 0){
        content = <p>You got no fav yet. start adding some?</p>
    }else{
        content = <MeetupList meetups={favoriteCtx.favourite}/>
    }

    return(
        <section>
            <h1>Favourite</h1>
            <MeetupList meetups={FavouriteContext.favourite}/>
        </section>
    )
}

export default Favourite