import { Link } from "react-router-dom";
import "./myNavigation.css";
import styles from "./myNavigation.module.css";
import "./myNavigation.scss";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites_context";

const MyNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light py-5"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <span className="mb-0 h2">Meetups</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${styles.linksize}`}
                aria-current="page"
                // style={{ fontSize: 25 }}
              >
                All Meetups
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new" className="nav-link link-size">
                Add New Meetup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link link-size-2">
                Your Favorites
                <span className="badge badge-light">
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavigation;
