import React from "react";
import "./Info.css";
const Info = (props) => {
  const { name, img } = props.info;
  return (
    <div className="col-md-3">
      <div className="info">
        <h1>{name}</h1>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Info;
