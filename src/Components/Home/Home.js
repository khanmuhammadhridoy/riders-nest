import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Ride from "../Ride/Ride";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const [rides, setRides] = useState([]);
  useEffect(() => {
    const res = require("../../fakeData/data.json");
    setRides(res.data);
  }, []);
  const handleRoad = (id) => {
    history.push(`/ride/${id}`);
  };
  return (
    <div className="main ">
      <div className="overlay"></div>
      <div className="component container">
        <Navigation></Navigation>
        <div className="allRide row">
          {rides.map((ride) => (
            <Ride key={ride.id} handleRoad={handleRoad} ride={ride}></Ride>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
