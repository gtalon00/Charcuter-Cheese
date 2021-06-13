import { useState, useEffect } from "react";
import { GetUserOpinion } from "../services/api";
import Navbar from "./layout/Navbar";
import Form from "./inputs/Form";

export default function CheeseInfo() {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetUserOpinion();
      setOpinions(res);
    };
    fetchData();
  }, []);

  return (
    <div className="user-opinion-view">
      <div className="user-bg-img"></div>
      <Navbar className="user-navbar" />
      <Form className="user-form" setOpinions={setOpinions} />
      <div className="user-opinion-container">
        {opinions &&
          opinions.map((opinion) => {
            return (
              <div className="user-opinion-in-view">
                <h2>{opinion.fields.name}</h2>
                <hr className="divider" />
                <p>{opinion.fields.input}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
