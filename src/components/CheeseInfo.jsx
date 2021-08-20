import { useState, useEffect } from "react";
import { GetCheeses } from "../services/api";
// import { useParams } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function CheeseInfo() {
  const [cheeses, setCheeses] = useState([]);
  const [page, setPage] = useState(5);
  // const [toggleCheese, setToggleCheese] = useState(false);
  // const { cheese } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses();
      setCheeses(res);
    };
    fetchData();
  }, []);

  // const handleToggleCheese = async (cheeses) => {
  //   toggleCheese ? setToggleCheese(false) : setToggleCheese(cheeses.fields);
  // };

  const handleRight = async (cheeses) => {
    if (page === 0) {
      // Show type and profile
      setPage(1); // page = 1
    } else if (page === 1) {
      // Show meat pairing
      setPage(2); // page = 2
    } else if (page === 2) {
      // Show creackerBreadOrNut
      setPage(3); // page = 3
    } else if (page === 3) {
      // Show sweetOrSavory
      setPage(4); // page = 4
    } else if (page === 4) {
      // Show drinks
      setPage(5); // page = 5
    } else {
      setPage(0);
      // setToggleCheese(cheeses.fields);
    }
  };

  const handleLeft = async () => {
    if (page === 5) {
      // Show type and profile
      setPage(4); // page = 1
    } else if (page === 1) {
      // Show meat pairing
      setPage(0); // page = 2
    } else if (page === 2) {
      // Show creackerBreadOrNut
      setPage(1); // page = 3
    } else if (page === 3) {
      // Show sweetOrSavory
      setPage(2); // page = 4
    } else if (page === 4) {
      // Show drinks
      setPage(3); // page = 5
    } else {
      setPage(5);
    }
  };
  // toggle ? setToggle(false) : setToggle(true);

  return (
    <div>
      <div className="background-image">
        <br />
        <h1>Charcuter-Cheese</h1>
        <br />
        <Navbar />
      </div>
      <div className="cheese-info">
        {/* <hr className="top-hr" /> */}
        <div className="cheese-gridder">
          {cheeses &&
            cheeses.map((cheese) => {
              return (
                // <div className="info-container">
                <div
                  key={cheese.id}
                  className={
                    cheese.fields.type === "Blue-Veined"
                      ? "info-container bv-cheese"
                      : cheese.fields.type === "Washed Rind"
                      ? "info-container wr-cheese"
                      : cheese.fields.type === "Semi-Hard"
                      ? "info-container sh-cheese"
                      : cheese.fields.type === "Fresh"
                      ? "info-container f-cheese"
                      : cheese.fields.type === "Alpine"
                      ? "info-container a-cheese"
                      : cheese.fields.type === "Hard"
                      ? "info-container h-cheese"
                      : cheese.fields.type === "Semi-Soft"
                      ? "info-container ss-cheese"
                      : cheese.fields.type === "Bloomy Rind"
                      ? "info-container br-cheese"
                      : cheese.fields.type === "Goat"
                      ? "info-container g-cheese"
                      : "info-container"
                  }
                >
                  <div className="info-background-color">
                    <div className="cheese-name-container">
                      <div className="name-headding">
                        <h1
                          className={
                            page === 5
                              ? "cheese-name show-alone"
                              : "cheese-name"
                          }
                        >
                          {cheese.fields.name}
                        </h1>
                      </div>
                    </div>
                    {/* {toggleCheese === cheese.name ? (
                      <div> */}
                    <div
                      className={
                        page === 0
                          ? "cheese-specifics show"
                          : "cheese-specifics hide"
                      }
                    >
                      <p className="cheese-type cheese-data">
                        Cheese Type: {cheese.fields.type}
                      </p>
                      <p className="flavor-profile cheese-data">
                        Flavor Profile: {cheese.fields.flavor}
                      </p>
                    </div>

                    <div
                      className={
                        page === 1
                          ? "cheese-pairings-meat show"
                          : "cheese-pairings-meat hide"
                      }
                    >
                      <h4>
                        <strong>Meats:</strong>
                        <hr />
                        {cheese.fields.meat}
                      </h4>
                    </div>

                    <div
                      className={
                        page === 2
                          ? "cheese-pairings-grain-nut show"
                          : "cheese-pairings-grain-nut hide"
                      }
                    >
                      <h4>
                        <strong>Grains & Nuts:</strong>
                        <hr />
                        {cheese.fields.crackerBreadOrNut}
                      </h4>
                    </div>

                    <div
                      className={
                        page === 3
                          ? "cheese-pairings-sweet-savory show"
                          : "cheese-pairings-sweet-savory hide"
                      }
                    >
                      <h4>
                        <strong>Sweet & Savory:</strong>
                        <hr />
                        {cheese.fields.sweetOrSavory}
                      </h4>
                    </div>

                    <div
                      className={
                        page === 4
                          ? "cheese-pairings-drink show"
                          : "cheese-pairings-drink hide"
                      }
                    >
                      <h4>
                        <strong>Drinks:</strong>
                        <hr />
                        {cheese.fields.drink}
                      </h4>
                    </div>
                    {/* </div>
                    ) : (
                      ""
                    )} */}
                    <div className="side-arrow">
                      {/* <h2
                        className="arrow left"
                        // onClick={() => handleToggleCheese(cheeses.fields.name)}
                        onClick={handleLeft}
                      > */}
                      <img
                        src="https://i.imgur.com/DyuNss3.png"
                        className="arrow left"
                        // onClick={() => handleToggleCheese(cheeses.fields.name)}
                        onClick={handleLeft}
                      />
                      {/* </h2> */}
                      {/* <h2
                        className="arrow right"
                        // onClick={() => handleToggleCheese(cheeses.fields.name)}
                        onClick={handleRight}
                      > */}
                      <img
                        src="https://i.imgur.com/DyuNss3.png"
                        className="arrow right"
                        // onClick={() => handleToggleCheese(cheeses.fields.name)}
                        onClick={handleRight}
                      />
                      {/* </h2> */}
                    </div>
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
