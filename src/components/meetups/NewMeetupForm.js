import { useRef } from "react";

const NewMeetupForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        // console.log(meetupData)
        props.onAddMeetup(meetupData)
    }

  return (
    <div className="container-fluid mt-4">
      <div className="d-flex justify-content-center">
        <form style={{ width: '55%' }} onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="title"
              className="form-control"
              id="title"
            //   aria-describedby="emailHelp"
              placeholder="Title"
              ref={titleInputRef}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="URL"
              ref={imageInputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input
              type="address"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Address"
              ref={addressInputRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="form-check">
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewMeetupForm;
