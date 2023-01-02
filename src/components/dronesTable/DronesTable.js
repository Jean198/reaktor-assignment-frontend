import React, { useEffect, useState } from "react";
import Drone from "../drone/Drone";
import axios from "axios";
import { URL } from "../../App";
import birdnest from "../../assets/images/birdnest.png";
import loader from "../../assets/images/loader.gif";
import "./dronesTable.css";

// The drones Table
const DronesTable = () => {
  const [dronesData, setDronesData] = useState([]); //State of the array fetched from the backend
  const [isLoading, setIsLoading] = useState(false); // state of the loading icon to display when the fetching in in process

  useEffect(() => {
    setIsLoading(true); //Displaying the loader
    try {
      const interval = setInterval(async () => {
        await axios.get(`${URL}`).then((response) => { //Fetching the data from backend
          setIsLoading(false); // Hidding the loader
          setDronesData(response.data); //Storing the data in the state array
        });
      }, 10000); //Fetching the data every 10 seconds
      return () => clearInterval(interval);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <div>
        <img src={birdnest} alt="" className="birdnest-image" />
      </div>
      {
        <div className="loader">
          {isLoading ? <img src={loader} alt="" /> : null} {/* Showing or hidding the loader*/}
        </div>
      }
      <div className="table-responsive">
        <table className=" table">
          <thead className="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
              <th scope="col">Distance to the Nest</th>
              <th scope="col">Last seen</th>
            </tr>
          </thead>
          <tbody>
            {dronesData &&
              dronesData.map((drone, index) => { {/* mapping the data to the  Drone component*/}
                return <Drone drone={drone} index={index} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DronesTable;
