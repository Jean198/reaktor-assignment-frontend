import React from "react";

// The drone information displayed as a row in the table
const Drone = ({ drone, index }) => {
  return (
    <>
      <tr key={drone.droneSerialNum}>
        <th scope="row">{index + 1}</th>
        <td>{drone.pilotName}</td>
        <td>{drone.email}</td>
        <td>{drone.phone}</td>
        <td>{drone.distance} Meters</td>
        <td>{drone.lastSeen} mins ago</td>
      </tr>
    </>
  );
};

export default Drone;
