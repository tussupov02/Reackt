import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted]=useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange=(e)=>{
    setValues({...values, firstName: e.target.value})
  }
  const handleLastNameInputChange=(e)=>{
    setValues({...values, lastName: e.target.value})
  }
  const handleEmailInputChange=(e)=>{
    setValues({...values, email: e.target.value})
  }
  const handleSumbit = (e)=>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <Form values={values} 
      onSubmit={handleSumbit}
      submitted={submitted}
      valid={valid}
      onChangeFirst={handleFirstNameInputChange}
      onChangeLast={handleLastNameInputChange}
      onChangeEmail={handleEmailInputChange}
      />
    </div>
  );
}
