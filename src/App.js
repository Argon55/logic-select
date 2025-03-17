import { useEffect, useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  // [1] selanjutnya kita tampung hasil resultnya kedalam sebuah state
  const [allData, setAllData] = useState([]);
  // [3] state untuk menyimpan hasil dari user select
  const [userSelect, setUserSelect] = useState("");
  // [3] create new trigger untuk menampilkan datanya di html dengan default nya boolean false
  const [isShow, setIsShow] = useState(false);

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

    // [2] improve urutkan data berdasarkan descending
    // setAllData(result.sort((a, b) => b.label.localeCompare(a.label)));
  };

  // [1] useEffect digunakan untuk merender data nya
  useEffect(() => {
    getBerries();
  }, []);

  // [3] value yang akan di trigger oleh button show value
  const handleSubmit = () => {
    // [3] beri validasi agar buttonnya bolak balik
    setIsShow((state) => !state);
  };

  // [3] trigger untuk mengambil event valuenya
  const handleChange = (value) => {
    setUserSelect(value);
  };

  return (
    <div className="App">
      {/* [3] kita coba tampilkan datanya*/}
      {/* [3] jika isSHow bernilai true maka akan memunculkan data userSelect */}
      <h1>{isShow ? userSelect : ""}</h1>
      {/* [3] button untuk menampilkan hasil dari user select */}
      {/* [3] tambahkan validasi didalam button */}
      <button onClick={() => handleSubmit()} disabled={!userSelect}>
        {isShow ? "Hide Button" : "Show Values"}
      </button>
      {/* [1] import select dan diberi property options dan isi dari options harus berupa array of object */}
      {/* [1] dan didalam array of object key nya adalah value dan label */}
      {/* [1] masukkan allData dari proses diatas */}
      {/* [3] tambahkan event onchange */}
      <Select
        options={allData}
        onChange={(e) => handleChange(e.value)}
      ></Select>
    </div>
  );
}

export default App;
