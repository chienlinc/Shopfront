import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import ShoppingCart from "./pages/ShoppingCart";

import MyNavigation from "./components/layout/MyNavigation";

const App = () => {
  return (
    <div>
      <MyNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/shopping" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default App;
