import { useState, useEffect } from 'react'
import {GetCheeses} from "../services/api"
import Navbar from "./layout/Navbar"
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
    <div class="cheese-info">
      <Navbar />
      {cheeses &&
        cheeses.map((cheese) => {
          return (
            <div class="info-container">
              <div class="inner-info-container">
                <h1>{cheese.fields.name}</h1>
                <p>{cheese.fields.type}</p>
                <p>{cheese.fields.flavor}</p>
                <p>{cheese.fields.meat}</p>
                <p>{cheese.fields.crackerBreadOrNut}</p>
                <p>{cheese.fields.sweetOrSavory}</p>
                <p>{cheese.fields.drink}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}