import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"

function MeetupList(props){
    return(
        <li className={classes.list}>
            {props.meetups.map(meetup => 
            <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            />)}
        </li>
    )
}

export default MeetupList