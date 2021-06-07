import { useState, useEffect } from 'react'
import {GetCheeses} from "../services/api"

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
      {cheeses &&
        cheeses.map((cheese) => {
          return (
            <div>
              <h1>{cheese.fields.name}</h1>
              <p>{cheese.fields.type}</p>
              <p>{cheese.fields.flavor}</p>
            </div>
          )
        })}
    </div>
  )
}