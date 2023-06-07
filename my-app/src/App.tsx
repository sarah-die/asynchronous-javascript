import React from "react";
import "./App.css";

function App() {
  const getTodos = (callback: (error: string | undefined, data: any) => void) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("could not fetch data", undefined);
      }
    });

    // change url to my todos.json
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
  };

  getTodos((error, data) => {
    console.log("callback fired");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
