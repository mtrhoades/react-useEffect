import React from "react";
import { useState, useEffect } from "react";

export default function Fetch() {
  // 1. Fetch Data from an API - loads onmount
  let [photo, setPhoto] = useState({});
  let [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((data) => setPhoto(data.image));
  }, [count]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>1. UseEffect for Fetch Requests</h1>
      <img src={photo} alt='fox' />
      <button onClick={() => setCount(count + 1)}>New Photo</button>
    </div>
  );
}
