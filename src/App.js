import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>Deployed with 4everland!</h2>
      <p>
        This project was bootstrapped with{" "}
        <a href="http://getuvw.xyz/">
          Create React App
        </a>{" "}
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : "Loading date..."}</p>
    </main>
  );
}

export default App;
