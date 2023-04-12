import {Link} from "react-router-dom"

import classes from "./MainNavigation.module.css";

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">AllMeetups</Link></li>
                    <li><Link to="/fav-page">Favourite</Link></li>
                    <li><Link to="/single-meetup">Single Meetups</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation