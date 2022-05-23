import { useContext } from "react";
import { FavoritesContext } from "../store/favorites_context";
import MeetupList from "../components/meetups/MeetupList";
import Section from "../components/layout/Section";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <div className="d-flex justify-content-center">
        <h3>You got no favorites yet! Start adding some?</h3>
      </div>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <Section
        title={"Your Favorites"}
        description={"Followings are all your favorite meetups"}
      />
      {content}
    </div>
  );
};

export default FavoritesPage;
