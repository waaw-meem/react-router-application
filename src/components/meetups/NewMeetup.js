import { useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetup.module.css"



function NewMeetup(props){
    const inputTitleRef = useRef();
    const inputImageRef = useRef();
    const inputAddressRef = useRef();
    const inputDescriptionRef = useRef();

    function submitHandler(event){
       event.preventDefault();

       const meetupTitle = inputTitleRef.current.value;
       const meetupImage = inputImageRef.current.value;
       const meetupAddress = inputAddressRef.current.value;
       const meetupDescription = inputDescriptionRef.current.value;
       

       const metadata = {
        title:meetupTitle,
        image:meetupImage,
        address:meetupAddress,
        description:meetupDescription
       }

    //    console.log(metadata)
    props.addNewMeetup(metadata)

    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={inputTitleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="text" required id="image" ref={inputImageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={inputAddressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea rows="5" required id="description" ref={inputDescriptionRef}/>
                </div>
                <div className={classes.actions}>
                   <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetup