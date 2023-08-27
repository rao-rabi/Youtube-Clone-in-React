import React from "react";
import VideosTags from "./VideosTags";

function Videos({ data }) {
  return (
    <>
      <VideosTags />
      <div className="row justify-content-start row-cols-md-3 row-cols-lg-4 row-cols-1 gy-4">
        {data?.map((item, id) => (
          <div key={id}>
            <div
              className="card col videoCard mt-1 mb-1"
              style={{minHeight:"20rem"}}
            >
              <img
                src={item?.snippet?.thumbnails?.medium?.url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">{item?.snippet?.title}</h6>
                <p className="card-text small">{item?.snippet?.channelTitle}</p>
                <p className="card-text small">{item?.snippet?.publishTime}</p>
              </div>

              <div className="card-body p-0">
                <h6>{item?.channelTitle}</h6>
              <div className="m-2 cardButtons">
                <button className="btn bg-body-secondary w-100 p-1 mb-2"><i class="bi bi-clock-history"></i><span>WATCH LATER</span></button>
                <button className="btn bg-body-secondary w-100 p-1"><i class="bi bi-list-stars"></i><span>ADD TO QUEUE</span></button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Videos;
