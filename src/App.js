import data from "./data";
export default function App() {
  return (
    <div>
      {data.map((item) => (
        <div className="card">{item.question}</div>
      ))}
    </div>
  );
}
