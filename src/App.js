import { useCallback, useMemo, useRef, useState } from "react";
import "./App.css";
import Notes from "./Notes";

function SortedList({ list }) {
  console.log("rendering sorted list ....");
  const sortednames = useMemo(() => {
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  const sortFunc = (a, b) => a.localeCompare(b) * -1;
  return (
    <div>
      {sortednames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </div>
  );
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const [names, setNames] = useState(["Ram", "Sita", "hari", "kaluwa"]);
  const [count, SetCount] = useState(0);
  const [name, setName] = useState("");
  const total = useMemo(() => {
    console.log("calculateing total ... ");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);
  // const total = numbers.reduce((acc, n) => acc + n, 0);
  const inputRef = useRef(null);

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);
  //callback just returns the function

  // const addName = () => {
  //   setName = names.concat(names);
  //   setName("");
  // };
  const addName = () => {
    setName(names.concat(inputRef.current.value));
    inputRef.current.value = "";
  };
  return (
    <div className="App">
      {/* <p> total : {total}</p>
      <button onClick={() => SetCount(count + 1)}> Count : {count}</button> */}
      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

      {/* to make it untrackabele  */}
      {/* <input type="text" ref={inputRef} />
      <button onClick={addName}>Add name</button>
      <SortedList list={names} sortFunc={sortFunc} /> */}
      <Notes/>
    </div>
  );
}

export default App;
