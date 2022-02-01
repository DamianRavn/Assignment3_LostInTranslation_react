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
      <input
        type="text"
        required={true}
        placeholder="Input Username here"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick=
        {() =>
          props.clickHandler(dispatch, name)
        }>Submit</button>
    </form>
  );
}
