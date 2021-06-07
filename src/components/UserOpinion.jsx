import {useState} from 'react'

export default function UserOpinion() {
  const newComment = {
    name: "",
    input: "",
  }
  const [input, setInput] = useState()
  return (
    <div>
      <br />
      <label> Give us your feedback! What cheeses
        or pairings are you a fan of or
        would you like to see?</label>
      <form>
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
        <button >Submit</button>
      </form>
      
    </div>
  )
}
