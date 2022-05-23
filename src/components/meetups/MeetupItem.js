import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites_context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.meetup.id,
        title: props.meetup.title,
        image: props.meetup.image,
        address: props.meetup.address,
        description: props.meetup.description,
      });
    }
  };

  return (
    <div className="col-lg-6 col-sm-12 mt-4">
      <div className="card shadow-sm">
        <img
          src={props.meetup.image}
          className="img-fluid rounded"
          style={{ height: 300 }}
        />

        <div className="card-body">
          <h5 className="card-title">{props.meetup.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.meetup.address}
          </h6>
          <p className="card-text">{props.meetup.description}</p>
          <div className="d-flex justify-content-end align-items-center">
            {/* <div className="btn-group"> */}
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={toggleFavoriteStatusHandler}
            >
              {itemIsFavorite ? "Favorited !" : "Favorite"}
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupItem;
