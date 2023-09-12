import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./Components/ContactCard/ContactCard";

function App() {
  // const contacts = [
  //   {
  //     avatarUrl: "",
  //     email: "",
  //     age:"",
  //     name:"",
  //   }
  // ];
  const [results, setReults]=useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data=> {
      console.log(data)
      setReults(data.results)
    })
  }, [])



  return (
   <div>
    {results.map((result, index)=>{
      return(
        <ContactCard
        key={index}
        result={result}
        />
      )
    })}
    
   </div>
  );
}

export default App;
