import React from "react";

export default function VideoThumbnail(props) {
  return (
    <div className="thumbnail">
      <div className="card">
        <img src={props.imgUrl} alt="thumbnail" />
        <h3 className="title">{props.title}</h3>
        <h4 className="title2">{props.user}</h4>
        <h4 className="title2">{props.views}</h4>
      </div>
    </div>
  );
}
