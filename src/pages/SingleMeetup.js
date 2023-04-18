import { useNavigate  } from "react-router-dom";
import NewMeetup from "../components/meetups/NewMeetup";

function SingleMeetup(){
    const navigate = useNavigate ();
    function addNewMeetupHandler(metadata){
        fetch("https://react-getting-started-87207-default-rtdb.firebaseio.com/meetup.json",
        {
            method:'POST',
            body:JSON.stringify(metadata),
            headers:{
                'Content-Type':'application/json'
        }
    }
        ).then(()=>{
            navigate('/', { replace: true });
        })
    }
    return(
        <div><NewMeetup addNewMeetup={addNewMeetupHandler}/></div>
    )
}

export default SingleMeetup