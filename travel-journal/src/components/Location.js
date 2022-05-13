import React from "react";

export default function Location(props) {
  return (
      <div className="location">
        <img className="location--image" src={`./images/${props.imageUrl}`}></img>
        <div className="location--info">
          <span>
            <p className="location--country">
              <i
                className="location--map-marker"
                class="fas fa-map-marker-alt"
              ></i>
              {props.location}
            </p>
            <a className="location--link" href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
          <h2 className="location--name">{props.title}</h2>
          <p className="location--dates">
            <strong>{props.startDate + " - " + props.endDate}</strong>
          </p>
          <p className="location--description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
  );
}
