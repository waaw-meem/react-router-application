import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourite:[],
    totalFavourite:0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsHandler: (meetupId) => {},
})

export function FavouriteContextProvider(props){
    const [userFavourite, setUserFavourite] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourite((prevUserFavourite) =>{
            return prevUserFavourite.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourite((prevUserFavourite) =>{
            return prevUserFavourite.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemFavouriteHandler(meetupId){
        
            return userFavourite.some(meetup => meetup.id === meetupId)
        
    }


    const context = {
        favourite:userFavourite,
        totalFavourite:userFavourite.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsHandler:itemFavouriteHandler
    }

    return(
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteContext