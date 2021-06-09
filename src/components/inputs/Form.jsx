import { useState } from 'react'
import { PostUserOpinion } from "../../services/api"

export default function Form(props) {
const { setOpinions } = props

  const newComment = {
    name: "",
    input: "",
  }

  const [input, setInput] = useState(newComment)
  
  const handleChange = (e) => {
    const { name, value } = e.target

    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await PostUserOpinion(input)
    setOpinions(opinions => ([
    { fields: input }, ...opinions
    ]))
  }

  
  return (
    <div>
      <label> Give us your feedback! What cheeses
        or pairings are you a fan of or
        would you like to see?</label>
      <form onChange={handleChange}>
        <input
          type="text"
          name="name"
          placeholder="Name/Anonymous"
        />
        <br />
        <input 
          style={{height: 100}}
          type="text"
          name="input"
          placeholder="Your thoughts!"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
