import "./App.css";
import Select from "react-select";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="App">
      {/* import select dan diberi property options dan isi dari options harus berupa array of object */}
      {/* dan didalam array of object key nya adalah value dan label */}
      <Select options={options}></Select>
    </div>
  );
}

export default App;
