import React, { useState } from "react";

export default function ContactCard({result}){
const[showAge, setShowAge]= useState(false)

    return(
        <div className="contact-card">
        <img src={result.picture.large} alt="profile" ></img>
        <div className="user-details">
          <p>Name: {result.name.first}</p>
          <p>Email: {result.email}</p>
          <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
          {showAge && <p>Age: {result.dob.age}</p> }
        
        </div>
      </div>
    )
}