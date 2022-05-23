import MeetupList from "../components/meetups/MeetupList";
import Section from "../components/layout/Section";
import { useState, useEffect } from "react";
import { FIREBASE_URL } from "../FirebaseLink";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Australia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png",
    address: "University of Melbourne",
    description: "This is our first meetup.",
  },
  {
    id: "m2",
    title: "Taiwan",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
    address: "Kaohsiung",
    description: "This is our second meetup.",
  },
  {
    id: "m3",
    title: "Malaysia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png",
    address: "Kuala Lumpur",
    description: "This is our third meetup.",
  },
];

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetup] = useState([]);

  useEffect(() => {
    fetch(FIREBASE_URL, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
        "Access-Control-Allow-Headers": "Authorization",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetup(meetups);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ....</p>
      </section>
    );
  }

  return (
    <div>
      <Section
        title={"All Meetups"}
        description={"Followings are all available meetups"}
      />
      <div>
        <MeetupList meetups={loadedMeetups} />

        {/* <MeetupList meetups={DUMMY_DATA} /> */}

        {/* <ul>
          {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
};

export default AllMeetupsPage;
