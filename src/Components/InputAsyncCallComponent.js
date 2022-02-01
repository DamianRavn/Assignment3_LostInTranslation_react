import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function InputAsyncCallComponent(props)
{
  //Making a local state so that the input is tracked
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => 
  {
    //Prevents the refresh of the site
    event.preventDefault();
  };

  return (    
  <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      required={true}
      placeholder= {props.placeholder}
      onChange={(e) => setName(e.target.value)}
      />
      <button onClick=
      {()=>
        //When the button is clicked, run the function passed down from parent. This is an lambda function so it doesn't run on load.
        props.clickHandler(dispatch, name)
      }>Submit</button>
  </form>
  );
}
