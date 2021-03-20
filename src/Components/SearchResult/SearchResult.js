import React from "react";
import { useContext } from "react";
import { SearchContext } from "../Destination/Destination";
import RideCount from "../RideCount/RideCount";

const SearchResult = () => {
  const [location] = useContext(SearchContext);
  const { from, to } = location;
  return (
    <div>
      <h1>{from}</h1>
      <h1>{to}</h1>
      {/* <RideCount></RideCount> */}
    </div>
  );
};

export default SearchResult;
