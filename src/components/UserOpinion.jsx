import { useState, useEffect } from 'react'
import { GetUserOpinion } from "../services/api"
import Form from "./inputs/Form"

export default function CheeseInfo() {
  const [opinions, setOpinions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetUserOpinion()
      console.log(res)
      setOpinions(res)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Form />
      {opinions &&
        opinions.map((opinion) => {
          return (
            <div>
              <h3>{opinion.fields.name}</h3>
              <p>{opinion.fields.input}</p>
            </div>
          )
        })}
    </div>
  )
}
