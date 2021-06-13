import { useState, useEffect } from "react";
import { GetCheeses } from "../services/api";
import Navbar from "./layout/Navbar";

export default function CheeseInfo() {
  const [cheeses, setCheeses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses();
      setCheeses(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="background-image">
        <br />
        <h1>Charcuter-Cheese</h1>
      </div>
      <div className="cheese-info">
        <Navbar />
        <div className="cheese-gridder">
          {cheeses &&
            cheeses.map((cheese) => {
              return (
                <div className="info-container">
                  <div className="cheese-name">
                    <div className="name-headding">
                      <h1>{cheese.fields.name}</h1>
                    </div>
                  </div>
                  <div className="cheese-specifics">
                    <p className="cheese-type">
                      Cheese Type: {cheese.fields.type}
                    </p>
                    <p className="flavor-profile">
                      Flavor Profile: {cheese.fields.flavor}
                    </p>
                  </div>
                  <div className="cheese-pairings">
                    <p>
                      <strong>Meats:</strong> <hr />
                      {/* <br /> */}
                      {cheese.fields.meat}
                    </p>

                    <p>
                      <strong>Grains & Nuts:</strong> <hr />
                      {/* <br /> */}
                      {cheese.fields.crackerBreadOrNut}
                    </p>
                    <p>
                      <strong>Sweet & Savory:</strong> <hr />
                      {/* <br /> */}
                      {cheese.fields.sweetOrSavory}
                    </p>
                    <p>
                      <strong>Drinks:</strong> <hr />
                      {/* <br /> */}
                      {cheese.fields.drink}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
      </div>
    </div>
  );
}
