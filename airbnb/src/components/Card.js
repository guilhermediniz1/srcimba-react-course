import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="photo-card" />
      <div className="card-stats">
        <img src={star} className="star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
