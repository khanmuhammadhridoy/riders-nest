import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Info from "../Info/Info";
import { useHistory } from "react-router";

const Home = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const res = require("../../fakeData/data.json");
    setData(res.data);
  }, []);
  const handleRoad = () => {
    history.push("/destination");
  };
  console.log(data);

  return (
    <div className="main ">
      <div className="overlay"></div>
      <div className="component container">
        <Navigation></Navigation>
        <div onClick={handleRoad} className="row">
          {data.map((info) => (
            <Info key={info.id} info={info}></Info>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
