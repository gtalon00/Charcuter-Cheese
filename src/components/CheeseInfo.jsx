import {useState, useEffect} from 'react'
import {GetCheeses} from "../services/api"

export default function CheeseInfo() {
  const [cheese, setCheese] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses()
      console.log(res)
      setCheese(res.fields)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      Cheese Info
      cheese is good!
      <h1>{cheese.name}</h1>
      <p>{cheese.type}</p>
      <p>{cheese.flavor}</p>
    </div>
  )
}