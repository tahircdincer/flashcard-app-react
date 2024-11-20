import React from "react";
import data from "./data";
export default function App() {
  return (
    <div className="container">
      {data.map((item) => (
        <div className="card">{item.question}</div>
      ))}
    </div>
  );
}
