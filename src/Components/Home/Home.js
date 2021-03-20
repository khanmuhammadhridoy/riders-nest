import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Ride from "../Ride/Ride";
import { useHistory } from "react-router";
// import { createContext } from "react";


// export const RideContext = createContext();

const Home = () => {
  const [ride, setRide] = useState("");
  const [rides, setRides] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const res = require("../../fakeData/data.json");
    setRides(res.data);
  }, []);
  const handleRoad = (id) => {
    // setRide(id);
    history.push("/destination");
  };
  // console.log("id", ride);

  return (
    // <RideContext.Provider value={[ride, setRide]}>
      <div className="main ">
        <div className="overlay"></div>
        <div className="component container">
          <Navigation></Navigation>
          <div className="row">
            {rides.map((ride) => (
              <Ride key={ride.id} handleRoad={handleRoad} ride={ride}></Ride>
            ))}
          </div>
        </div>
      </div>
    // </RideContext.Provider>
  );
};

export default Home;
