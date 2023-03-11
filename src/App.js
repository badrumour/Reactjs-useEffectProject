import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      document.title = `${state} Employees online`;
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button onClick={() => setState(state + 1)}>click me {state}</button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h2>Name = {element.firstName}</h2>
            <h2>LastName = {element.lastName}</h2>
            <h2>Email = {element.email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
