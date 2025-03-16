import { useEffect, useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  // selanjutnya kita tampung hasil resultnya kedalam sebuah state
  const [allData, setAllData] = useState([]);

  const getBerries = async () => {
    const berries = await fetch("https://pokeapi.co/api/v2/berry");
    const value = await berries.json();
    // karena hasil yang mau kita ambil berada didalam result
    // karena yang mau diambil untuk dropdown hanya nama nya, maka kita harus mapping dulu resultnya
    const result = value.results.map((data) => {
      // karena kita ingin menyamakan datanya dengan struktur library select jadi kita akan membuat fake json
      return {
        label: data.name,
        value: data.name,
      };
    });
    setAllData(result);
  };

  // useEffect digunakan untuk merender data nya
  useEffect(() => {
    getBerries();
  }, []);

  return (
    <div className="App">
      {/* import select dan diberi property options dan isi dari options harus berupa array of object */}
      {/* dan didalam array of object key nya adalah value dan label */}
      {/* masukkan allData dari proses diatas */}
      <Select options={allData}></Select>
    </div>
  );
}

export default App;
