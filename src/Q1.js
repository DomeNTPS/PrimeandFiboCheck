import React from "react";

const Q1 = () => {
  const [num, setNum] = React.useState();
  const [func, setFunc] = React.useState("isPrime");
  const handleChange = (e) => {
    if (e < 0) {
      setNum(1);
    } else {
      setNum(e);
    }
  };
  const isPrime = (e) => {
    if (e <= 1) {
      return false;
    }
    for (let index = 2; index < e; index++) {
      if (e % index === 0) {
        return false
      }
    }
     return true
  };
  const isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return s * s === x;
  }
  const isFibonacci = (n) => {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
  }
  const handleCheck = (e) => {
    if (func === "isPrime") {
      return isPrime(e)
    }
    if (func === "isFibonacci") {
      return isFibonacci(e)
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div id="col1" style={{ width: "200px", border: "black solid 1px" }}>
        <input
          type="number"
          onChange={(e) => handleChange(e.target.value)}
          value={num}
        ></input>
      </div>
      <div
        id="col2"
        style={{ width: "-webkit-fill-available", border: "black solid 1px" }}
      >
        <select onChange={(e) => setFunc(e.target.value)} value={func}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div
        id="col3"
        style={{ width: "300px", border: "black solid 1px" }}
      >
          {num && <div>{handleCheck(num).toString()}</div>}
      </div>
    </div>
  );
};

export default Q1;
