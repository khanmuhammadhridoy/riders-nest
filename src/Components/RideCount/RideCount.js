import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Icon from "../../images/peopleicon.png";
import "./RideCount.css";

const RideCount = () => {
  const { id } = useParams();
  const [ride, setRide] = useState({});
  useEffect(() => {
    fetch(`https://api.mocki.io/v1/${id}`)
      .then((res) => res.json())
      .then((data) => setRide(data[0]));
  }, [id]);
  const { name, img } = ride;
  return (
    <div>
      <div className="ride">
        <img src={img} alt="" />
        <p>{name}</p>
        <img src={Icon} alt="" />
        <p>4</p>
        <p>$67</p>
      </div>
      <div className="ride">
        <img src={img} alt="" />
        <p>{name}</p>
        <img src={Icon} alt="" />
        <p>4</p>
        <p>$67</p>
      </div>
      <div className="ride">
        <img src={img} alt="" />
        <p>{name}</p>
        <img src={Icon} alt="" />
        <p>4</p>
        <p>$67</p>
      </div>
      <div className="ride">
        <img src={img} alt="" />
        <p>{name}</p>
        <img src={Icon} alt="" />
        <p>4</p>
        <p>$67</p>
      </div>
    </div>
  );
};

export default RideCount;
