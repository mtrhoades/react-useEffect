// Imports
import React, { useState, useEffect } from "react";

// Functional Component
export default function Fetch() {
  // vanilla js section

  // component lifecycle:
    // mount
    // update
    // dismount

  // 1. Fetch Data from an API - loads onmount
  let [photo, setPhoto] = useState({});
  let [count, setCount] = useState(0);

  // updates when count changes, renders this:
  useEffect(
    // 1st. argument:
    () => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((data) => setPhoto(data.image));
  }, 
    // 2nd argument:
  [count]
  
  );


  // jsx section
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>1. UseEffect for Fetch Requests</h1>
      <img src={photo} alt='fox' />
      <button onClick={() => setCount(count + 1)}>New Photo</button>
    </div>
  );
}
