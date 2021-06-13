import { useState } from "react";
import { PostUserOpinion } from "../../services/api";

export default function Form(props) {
  const { setOpinions } = props;

  const newComment = {
    name: "",
    input: "",
  };

  const [input, setInput] = useState(newComment);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await PostUserOpinion(input);
    setOpinions((opinions) => [{ fields: input }, ...opinions]);
  };

  return (
    <div className="form">
      <br />
      <div className="prompt">
        <h1 className="input-field-prompt-h1">
          Give us your feedback! <br />
        </h1>
        <h2 className="input-field-prompt-h2">
          What cheeses or pairings are you a fan of
          <br /> or would you like to see?
        </h2>
      </div>
      <br />
      <br />
      <div className="user-input-form">
        <br />
        <form onChange={handleChange}>
          <label className="labels">Name:</label>
          <br />
          <input type="text" name="name" placeholder="Name/Anonymous" />
          <br />
          <label className="labels">Your Message:</label>
          <br />
          <input type="text" name="input" placeholder="Your thoughts!" />
          <br />
          <button className="submit-opinion" onClick={handleSubmit}>
            Submit
          </button>
          <br />
        </form>
        <br />
      </div>
      <hr />
    </div>
  );
}
