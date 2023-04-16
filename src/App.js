import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  let [load, setLoad] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => { setLoad(false)}, 500);
  }, [counter]);


  function add() {
    setCounter(counter + 1);
    setLoad(true);
  }

  return (
    <div className="sweet-loading">
      <ClipLoader
        loading={load}
        size={150}
      />
      {counter}

      <button onClick={add}>Add</button>

    </div>
  );
}


export default App;