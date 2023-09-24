import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./index.css";

export default function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");


  const sample=[
    {
      inputValue: firstName,
      placeholder: "First Name",
      name: setfirstName,
    },
    {
      inputValue: lastName,
      placeholder: "Last Name",
      name: setlastName,
    },
    {
      inputValue: email,
      placeholder: "Email",
      name: setemail,
    },
  ]

  const [submitted, setSubmitted]=useState(false);
  const [valid, setValid] = useState(false)

  const handleSumbit = (e)=>{
    e.preventDefault();
    if(firstName && lastName && email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <Form
      handleSumbit={handleSumbit}
      submitted={submitted}
      valid={valid}
      sample={sample}
      // onChangeLast={handleLastNameInputChange}
      // onChangeEmail={handleEmailInputChange}
      />
    </div>
  );
}
