import React, { useState } from "react";

function User({ name }) {
  const [count, setCount] = useState(0);
  const [count2, setCout2] = useState(1);
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <p>Count2 ={count2}</p>
      <h2>Name: {name}</h2>
      <h3>Location: Vancouver</h3>
      <h4>Contact: @sannak6666</h4>
    </div>
  );
}

export default User;
