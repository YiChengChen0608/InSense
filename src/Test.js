import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("start");
    fetch("http://localhost:3001/echo", {
      method: "POST",
      credentials: "include",
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(obj);
      });
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          fetch("http://localhost:3001/echo", {
            method: "POST",
            credentials: "include",
          })
            .then((r) => r.json())
            .then((obj) => {
              console.log(obj);
            });
          console.log("count", count);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;
