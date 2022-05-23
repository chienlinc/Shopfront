import React, { Component } from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup}/>)}
        </div>
      </div>
    </div>
  );
};

export default MeetupList;
