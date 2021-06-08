import { useState, useEffect } from 'react'
import { GetUserOpinion } from "../services/api"
import Navbar from "./layout/Navbar"
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
    <div class="right-side">
      <Navbar />
      <div class="user-interaction">
      <Form setOpinions={setOpinions}/>
      {opinions &&
        opinions.map((opinion) => {
          return (
            <div class="user-opinion-in-view">
              <h3>{opinion.fields.name}</h3>
              <p>{opinion.fields.input}</p>
            </div>
          )
        })}
        </div>
    </div>
  )
}
