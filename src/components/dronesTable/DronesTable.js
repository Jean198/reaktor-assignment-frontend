import React, { useEffect, useState } from "react";
import Drone from "../drone/Drone";
import axios from "axios";
import { URL } from "../../App";



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
    <div>
      <Drone />
    </div>
  );
}

export default DronesTable




