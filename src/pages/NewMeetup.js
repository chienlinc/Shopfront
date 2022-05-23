import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
import Section from "../components/layout/Section";
import { FIREBASE_URL } from "../FirebaseLink";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(FIREBASE_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Section
        title={"Add New Meetup"}
        description={"Please add your new meetup below"}
      />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetupPage;
