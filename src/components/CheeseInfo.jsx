import { useState, useEffect } from 'react'
import {GetCheeses} from "../services/api"
import Navbar from "./layout/Navbar"
import Header from "./layout/Header"

export default function CheeseInfo() {
  const [cheeses, setCheeses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses()
      console.log(res)
      setCheeses(res)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Header />
    <div class="cheese-info">
        <Navbar />
        <div class="cheese-gridder">
      {cheeses &&
        cheeses.map((cheese) => {
          return (
            <div class="info-container">
                <h1>{cheese.fields.name}</h1>
                <div name="cheese-specifics">
                  <p>{cheese.fields.type}</p>
                  <p>{cheese.fields.flavor}</p>
                </div>
                <div class="cheese-pairings">
                <p>Meats: <br />{cheese.fields.meat}</p>
                <p>Grains and Nuts: <br />{cheese.fields.crackerBreadOrNut}</p>
                <p>Sweet and Savory: <br />{cheese.fields.sweetOrSavory}</p>
                <p>Drinks: <br />cheese.fields.drink}</p>
                </div>
            </div>
          )
        })}
          </div>
        </div>
    </div>
  )
}