import React from "react";
import YoutubeLogo from "./Assests/Youtube-logo.png";
const Header = ({value, setSearchInput}) => {

  return (
    <div className="d-flex justify-content-between align-items-center px-md-4 px-1 py-1 position-absolute top-0 left-0 z-3 bg-white w-100">
      {/* icons */}
      <div className="d-flex justify-content-center align-items-center gap-md-4">
        <i
          className="bi bi-list fs-3 d-md-block d-none"
        ></i>
        <img src={YoutubeLogo} alt="Youtube Logo" width={100} />
      </div>
      {/* search Bar and mic */}
      <div className="d-flex align-items-center justify-content-around gap-2">
        <div
          className="d-md-flex d-none align-items-center flex-nowrap"
          style={{ width: "40vw" }}
        >
          <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="Search"
            value={value}
            onChange={setSearchInput}
            className="px-3 py-2 border-1 border-secondary-subtle border-opacity-50 w-100"
            style={{ outline: "none" }}
          />
          <button className="py-2 border-1 border-secondary-subtle border-opacity-50">
            <i className="bi bi-search mx-3"></i>
          </button>
        </div>
        <i className="bi bi-mic-fill fs-5 p-1 px-2 bg-body-secondary rounded-circle d-md-block d-none"></i>
      </div>
      {/* dropdown and signIn */}
      <div className="d-flex gap-3 align-items-center">
        <div className="box d-md-none d-flex align-items-center">
          <input type="search" name="search" id="search" value={value} onChange={setSearchInput} />
          <i className="bi bi-search"></i>
        </div>
        {/* grid */}
        <i className="bi bi-grid-3x3-gap fs-5 me-2 d-md-block d-none"></i>
        {/* dropdown */}
        <div className="dropstart">
          <div data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots-vertical fs-5"></i>
          </div>
          <ul className="dropdown-menu rounded-0 w-100 p-2 mt-5">
            <li>
              <a className="dropdown-item ps-0" href="/">
                Your Data
              </a>
            </li>
            <hr />
            <li>
              <a className="dropdown-item ps-0" href="/">
                Settings
              </a>
            </li>
            <hr />
            <li>
              <a className="dropdown-item ps-0" href="/">
                Languages
              </a>
            </li>
            <hr />
            <li>
              <a className="dropdown-item ps-0" href="/">
                My Account
              </a>
            </li>
            <hr />
            <li>
              <a className="dropdown-item ps-0" href="/">
                FAQ
              </a>
            </li>
            <hr />
            <li>
              <a className="dropdown-item ps-0" href="/">
                Error
              </a>
            </li>
          </ul>
        </div>
        {/* sign In */}
        <button
          type="button"
          className="btn btn-outline-primary rounded-0 d-md-block d-none"
        >
          <i className="bi bi-person-circle pe-2"></i>
          <span>SIGN IN</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
