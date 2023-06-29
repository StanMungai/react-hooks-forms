import React from "react";

function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  // const [newsletter, setNewsletter] = useState(false)

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value)
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value)
  // }

  // function handleNewsletterChange(event) {
  //   setNewsletter(event.target.checked)
  // }

  return (
    <form>
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input 
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsletter}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
