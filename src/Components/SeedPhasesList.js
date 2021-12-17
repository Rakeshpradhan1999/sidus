/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import axios from "axios";

const SeedPhasesList = () => {
  const [seedPhrases, setSeedPhrases] = useState([]);

  useEffect(() => {
    axios
      .get("https://mandil-election.herokuapp.com/seedPhrase")
      .then((response) => {
        if (response.status != 200) {
          return;
        }
        setSeedPhrases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date/Time</th>
            <th>Seed Phrase</th>
          </tr>
        </thead>
        <tbody>
          {seedPhrases.length > 0 ? (
            seedPhrases.map((item, index) => (
              <tr key={item.id}>
                <td data-column="First Name">{index + 1}</td>
                <td data-column="Last Name">
                  {new Date(item.id).toLocaleString("en-GB")}
                  {/* // "-" +
										// new Date(item.id).getMonth() +
										// "-" +
										// new Date(item.id).getFullYear() +
										// "  /  " +
										// new Date(item.id).getHours() +
										// ":" +
										// new Date(item.id).getMinutes() +
										// ":" +
										// new Date(item.id).getSeconds()} */}
                </td>
                <td data-column="Job Title">{item.seedPhrase}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td>No Data yet</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SeedPhasesList;
