import React from "react";

const VideoCard = ({ info }) => {
  const snippet = info?.snippet;
  const statistics = info?.statistics;

  const { channelTitle, title, thumbnails } = snippet || "";

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
