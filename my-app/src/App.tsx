import React, {useEffect} from "react";
import "./App.css";

function App() {
  // all asynchronous code in this async function
  // async functions returnen immer ein Promise unabhängig vom Inhalt
  // async-Functions are non-blocking
  const getTodos = async () => {
    // await ersetzt das .then, wenn ein Promise (hier von fetch) zurückgegeben wird
    // response wird erst ein Wert zugewiesen, wenn die Promise resolved ist
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // reponse = response-object

    // wenn promise resolves aber dennoch ein Fehler, zb beim Namen der Quelle vorliegt, dann hier den Fehler abfangen
    // wenn ein Error in einer async-function geworfen wird, dann ist der Promise dieser rejected
    // Alternativ: reponse.ok abgleichen
    if (response.status !== 200) {
      throw new Error("Cannot fetch the data");
    }

    const data = await response.json(); // await, weil .json ein promise zurückgibt -> es wird gewartet bis die Promise resolved ist
    return data;
  };

  // dieser Code ist nun non-blocking ABER returned immer noch ein Promise
  // getTodos()
  //   .then((data) => console.log("resolved:", data))
  //   .catch((error) => console.log("rejected", error.message)); // for rejections

  // react version
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getTodos();
        setData(data);
      } catch (e: any) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
