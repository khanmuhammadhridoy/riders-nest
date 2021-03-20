import React from "react";
import "./Ride.css";
const Ride = (props) => {
  const { name, img, id } = props.ride;
  return (
    <div onClick={() => props.handleRoad(id)} className="col-md-3">
      <div className="info">
        <h1>{name}</h1>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Ride;
