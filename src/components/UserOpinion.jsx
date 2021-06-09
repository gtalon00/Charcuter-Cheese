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
    <div class="user-opinion">
      <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/72966651_2559285287452156_7846582019143237632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=-c4xCAM_yeQAX_lt-_F&_nc_ht=scontent-lga3-2.xx&oh=d1b93c9ea2fc19c67e7cb885b00cfa24&oe=60E79F7A" alt="oopsies" />
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
      </div>
  )
}
