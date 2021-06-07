import React from 'react'

export default function CheeseInfo() {
  const [cheese, setCheese] = useState

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetCheeses()
      setCheese(res.fields)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <h1>{cheese?.name}</h1>
      <p>{cheese?.type}</p>
      <p>{cheese?.flavor}</p>
    </div>
  )
}