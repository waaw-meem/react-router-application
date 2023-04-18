import { useState, useEffect } from "react"
import MeetupList from "../components/meetups/MeetupList"
import MeetupItem from "../components/meetups/MeetupItem";

// Read Dummy Data
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
]


function AllMeetups(){
  const [isLoading, setIsLoading] = useState(true)
  const [isMeetupLoaded, setMeetupLoaded] = useState([]);

  useEffect(() => {

    setIsLoading(true)

    fetch("https://react-getting-started-87207-default-rtdb.firebaseio.com/meetup.json")
    .then((response) => {
      response.json();
    }).then((data) =>{

      const meetupsArray = [];
      for(const key in data){
       const meetupItem ={
        id:key,
        ...data[key]
       }
       meetupsArray.push(MeetupItem)
      }
      setIsLoading(false)
      setMeetupLoaded(meetupsArray)
    })
  
  },[])

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }
    return(
        <div>
        <ul>
            {/* Map Function use for example  */}
            {/* {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>
            })} */}
            <MeetupList meetups={DUMMY_DATA}/>
        </ul>
        </div>
    )
}

export default AllMeetups