import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function InputAsyncCallComponent(props) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-2'>
        <label htmlFor="username">
          What is your username?
        </label>
      </div>
      <input
        type="text"
        required={true}
        placeholder="Type your username..."
        onChange={(e) => setName(e.target.value)}
      />
      <div className="mt-3">
        <button onClick=
          {() =>
            props.clickHandler(dispatch, name)
          }>Let's go</button>
      </div>
    </form>
  );
}
