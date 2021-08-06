import { useState, useEffect } from "react";
import { GetCheeses } from "../services/api";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

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
        <hr className="top-hr" />
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
                    <p className="cheese-type cheese-data">
                      Cheese Type: {cheese.fields.type}
                    </p>
                    <p className="flavor-profile cheese-data">
                      Flavor Profile: {cheese.fields.flavor}
                    </p>
                  </div>
                  <div className="cheese-pairings">
                    <h4>
                      <strong>Meats:</strong>
                      <hr />
                      {cheese.fields.meat}
                    </h4>
                    <h4>
                      <strong>Grains & Nuts:</strong>
                      <hr />
                      {cheese.fields.crackerBreadOrNut}
                    </h4>
                    <h4>
                      <strong>Sweet & Savory:</strong>
                      <hr />
                      {cheese.fields.sweetOrSavory}
                    </h4>
                    <h4>
                      <strong>Drinks:</strong>
                      <hr />
                      {cheese.fields.drink}
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
