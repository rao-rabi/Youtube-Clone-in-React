import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import Header from "./Header";
import Videos from "./Videos";
import Sidebar from "./Sidebar";

function HandleApi() {
  const [videoData, setVideoData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(null);

  const fetchApi = () => {
    fetch(api)
      .then((response) => response.json())
      .then((result) => {
        setVideoData(result?.items);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (!searchInput) {
      setFilteredData(videoData);
    } else {
      setFilteredData(
        videoData?.filter((item) => {
          return item?.snippet?.title
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      );
    }
  }, [searchInput, videoData]);

  return (
    <>
      <Header
        value={searchInput}
        setSearchInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="container-fluid row gap-0 m-0 p-0 mt-5 pt-1" style={{ paddingTop:"40px !important",}}>
        <div className="col-lg-2 col-md-3">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 col-12">
          <Videos data={filteredData} />
        </div>
      </div>
    </>
  );
}

export default HandleApi;
