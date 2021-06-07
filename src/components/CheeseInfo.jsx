import {useState, useEffect} from 'react'
import {GetCheeses} from "../services/api"

export default function CheeseInfo() {
  const [cheeses, setCheeses] = useState([])
  // const [cheese, setCheese] = useState({
  //   name: "",
  //   type: "",
  //   flavor: "",
  // })
  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses()
      console.log(res)
      setCheeses(res.fields)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      {cheeses &&
        cheeses.map((cheese) => {
          return (
            <div>
              <h1>{cheese.name}</h1>
              <p>{cheese.type}</p>
              <p>{cheese.flavor}</p>
            </div>
          )
        })}
    </div>
  )
}