import React, { useEffect, useState } from "react";
import Drone from "../drone/Drone";
import axios from "axios";
import { URL } from "../../App";
import birdnest from "../../assets/images/birdnest.png"
import './dronesTable.css'



const DronesTable = () => {
  const [dronesData, setDronesData] = useState([]);
  useEffect(() => {
    try {
      const interval = setInterval(async () => {
        await axios.get(`${URL}`).then((response) => {
          console.log(response.data);
          setDronesData(response.data);
        });
      }, 3000);
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
              dronesData.map((drone, index) => {
                return (
                  <Drone drone={drone} index={index}/>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DronesTable




