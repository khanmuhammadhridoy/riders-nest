import { Button, TextField } from "@material-ui/core";
import React from "react";
import Navigation from "../Navigation/Navigation";
import Map from "../../images/Map.png";
import "./Destination.css";
import { createContext } from "react";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

export const SearchContext = createContext();

const Destination = () => {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState(true);
  const handleBlur = (e) => {
    const route = { ...location };
    route[e.target.name] = e.target.value;
    setLocation(route);
  };
  // console.log("location", location);

  return (
    <SearchContext.Provider value={[location, setLocation]}>
      <div className="container">
        <Navigation></Navigation>
        <div className="row">
          <div className="col-md-4">
            {search ? (
              <form action="">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="from"
                  onBlur={handleBlur}
                  label="From"
                  type="text"
                  id="password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="to"
                  onBlur={handleBlur}
                  label="To"
                  type="text"
                  id="password"
                />
                <TextField
                  id="datetime-local"
                  margin="normal"
                  variant="outlined"
                  label="Time"
                  type="datetime-local"
                  defaultValue="2021-01-03T00:00"
                  className="textField"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  type="submit"
                  onClick={() => setSearch(!search)}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Search
                </Button>
              </form>
            ) : (
              <SearchResult></SearchResult>
            )}
          </div>

          <div className="map col-md-8">
            <img src={Map} alt="" />
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};;

export default Destination;
