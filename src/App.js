import React from "react";
import data from "./data";
export default function App() {
  const [selectedId, setSelectedId] = React.useState(null);

  function handleClick(id) {
    setSelectedId(id);
  }
  return (
    <div className="container">
      {data.map((item) => (
        <div className="card">
          <div
            className={selectedId === item.id ? "answer" : ""}
            onClick={() => handleClick(selectedId !== item.id ? item.id : null)}
          >
            {selectedId === item.id ? item.answer : item.question}
          </div>
        </div>
      ))}
    </div>
  );
}

// So if selected ID equal to ID from data. Displays the ' answer '. If not displays the ' question '
// onClick function receives ID which comes from data. If data' s id!== state' s Id state ' is ' item' s ID. If not no selected item ' remvs ' ' answer ' class from all divs
