import React from "react";
import YoutubeShorts from "./Assests/youtube-shorts-logo-15252.png";
import { styles } from "../styles";
const Sidebar = () => {
  return (
    <>
      <div className="px-md-2" id="sideBarMenu">
        <div id="youtubeMainIcons">
          <div className={`${styles.mainYoutubeIcon} bg-body-secondary`}>
            <i className="bi bi-house-door-fill lead pe-2"></i>
            <span className="fw-medium">Home</span>
          </div>
          <div className={styles.mainYoutubeIcon}>
            <i className="bi bi-compass lead pe-2"></i>Explore
          </div>
          <div className={`${styles.mainYoutubeIcon} d-md-flex d-none`}>
            <img
              className="object-fit-contain"
              width={15}
              src={YoutubeShorts}
              alt=""
            />
            <span className="ps-2">Shorts</span>
          </div>
          <div className={styles.mainYoutubeIcon}>
            <i className="bi bi-collection-play lead pe-2"></i>Library
          </div>
        </div>
        <hr  className="d-md-block d-none" />

        <div className="ps-1 d-md-flex d-none justify-content-start flex-wrap">
          <p className="text-start">
            Sign in to like videos, comment, and subscribe.
          </p>
          <button
            type="button"
            className="btn btn-outline-primary rounded-0 signup"
          >
            <i className="bi bi-person-circle pe-2"></i>
            <span>SIGN IN</span>
          </button>
        </div>
        <hr className="d-md-block d-none" />

        <div className="d-md-flex d-none justify-content-start align-items-start flex-wrap flex-column">
          <p className="fw-bold text-nowrap lead mb-1 px-3">Best of Youtube</p>
          <div className={styles.bestOfYoutubeIcon}>
            <i className="bi bi-music-note-beamed bg-black px-2 py-1 text-white rounded-circle small object-fit-contain"></i>
            Music
          </div>
          <div className={styles.bestOfYoutubeIcon}>
            <i className="bi bi-trophy-fill bg-black px-2 py-1 text-white rounded-circle small object-fit-contain"></i>
            Sports
          </div>
          <div className={styles.bestOfYoutubeIcon}>
            <i className="bi bi-controller bg-black px-2 py-1 text-white rounded-circle small object-fit-contain"></i>
            Gaming
          </div>
          <div className={styles.bestOfYoutubeIcon}>
            <i className="bi bi-film bg-black px-2 py-1 text-white rounded-circle small object-fit-contain"></i>
            Movies
          </div>
          <div className={styles.bestOfYoutubeIcon}>
            <i className="bi bi-newspaper bg-black px-2 py-1 text-white rounded-circle small object-fit-contain"></i>
            News
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
