import { useContext } from "react";
import { SearchContext } from "../Destination/Destination";
import RideCount from "../RideCount/RideCount";
import "./SearchResult.css";

const SearchResult = () => {
  const [location] = useContext(SearchContext);
  const { from, to } = location;

  return (
    <div>
      <div className="location">
        <h3>From: {from}</h3>
        <h3> To: {to}</h3>
      </div>
      <RideCount></RideCount>
    </div>
  );
};

export default SearchResult;
