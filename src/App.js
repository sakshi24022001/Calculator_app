import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [val, setVal] = useState("");
  const cal = () => {
    try {
      setVal(eval(val).toString());
    } catch (error) {
      setVal("Error");
    }
  };

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch {
      setVal("");
    }
  };

 const clear = () => {
    setVal("");
  };

  return (
    <div className="box">
      <p className="cal">
        <h3>CALCULATOR</h3>
      </p>
      <h2>
        <input
          className="inp"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        ></input>
      </h2>
      <button
        className="btn"
        value={1}
        onClick={(e) => setVal(val + e.target.value)}
      >
        1
      </button>
      <button
        className="btn"
        value={2}
        onClick={(e) => setVal(val + e.target.value)}
      >
        2
      </button>
      <button
        className="btn"
        value={3}
        onClick={(e) => setVal(val + e.target.value)}
      >
        3
      </button>
      <button
        className="btn"
        value="+"
        onClick={(e) => {
          setVal(val + e.target.value);
        }}
      >
        +
      </button>
      <br />
      <button
        className="btn"
        value={4}
        onClick={(e) => setVal(val + e.target.value)}
      >
        4
      </button>
      <button
        className="btn"
        value={5}
        onClick={(e) => setVal(val + e.target.value)}
      >
        5
      </button>
      <button
        className="btn"
        value={6}
        onClick={(e) => setVal(val + e.target.value)}
      >
        6
      </button>
      <button
        className="btn"
        value="-"
        onClick={(e) => {
          setVal(val + e.target.value);
        }}
      >
        -
      </button>
      <br />
      <button
        className="btn"
        value={7}
        onClick={(e) => setVal(val + e.target.value)}
      >
        7
      </button>
      <button
        className="btn"
        value={8}
        onClick={(e) => setVal(val + e.target.value)}
      >
        8
      </button>
      <button
        className="btn"
        value={9}
        onClick={(e) => setVal(val + e.target.value)}
      >
        9
      </button>
      <button
        className="btn"
        value="*"
        onClick={(e) => {
          setVal(val + e.target.value);
        }}
      >
        x
      </button>
      <br />
      <button
        className="btn1"
        value={0}
        onClick={(e) => setVal(val + e.target.value)}
      >
        0
      </button>
      <button
        className="btn"
        value="/"
        onClick={(e) => {
          setVal(val + e.target.value);
        }}
      >
        ÷
      </button>
      <br></br>
      <button className="btn2" value="=" onClick={cal}>
        =
      </button>
      <button className="btn2" onClick={backspace}>
        C
      </button>
      <button className="btn2" onClick={clear}>
        Reset
      </button>
    </div>
  );
};

export default App;