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
    <div class="form">
      <br />
      <div class="label">
      <label class="input-field-prompt"> Give us your feedback! <br /><br /> What cheeses
      or pairings are you a fan of<br /> or
        would you like to see?</label>
        </div>
        <br />
      <br />
      <div class="user-input-form">
        <br />
      <form onChange={handleChange}>
        <input
          type="text"
          name="name"
          placeholder="Name/Anonymous"
        />
        <br />
        <input 
          type="text"
          name="input"
          placeholder="Your thoughts!"
          />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        </form>
        <br />
      </div>
        <hr />
    </div>
  )
}
