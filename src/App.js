import { useEffect, useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  // [1] selanjutnya kita tampung hasil resultnya kedalam sebuah state
  const [allData, setAllData] = useState([]);

  const getBerries = async () => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry");
    const value = await berries.json();
    // [1] karena hasil yang mau kita ambil berada didalam result
    // [1] karena yang mau diambil untuk dropdown hanya nama nya, maka kita harus mapping dulu resultnya
    const result = value.results.map((data) => {
      // [1] karena kita ingin menyamakan datanya dengan struktur library select jadi kita akan membuat fake json
      return {
        label: data.name,
        value: data.name,
      };
    });
    // [2] urutkan data berdasarkan ascending
    setAllData(result.sort((a, b) => a.label.localeCompare(b.label)));
  };

  // [1] useEffect digunakan untuk merender data nya
  useEffect(() => {
    getBerries();
  }, []);

  return (
    <div className="App">
      {/* [1] import select dan diberi property options dan isi dari options harus berupa array of object */}
      {/* [1] dan didalam array of object key nya adalah value dan label */}
      {/* [1] masukkan allData dari proses diatas */}
      <Select options={allData}></Select>
    </div>
  );
}

export default App;
