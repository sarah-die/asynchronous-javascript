import React from "react";
import "./App.css";

function AppKapitel4() {
  const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("could not fetch data", undefined);
      }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
  };

  // this is non-blocking asynchronous code that starts now and finishes later
  // console: 1, 2, 3, 4, callback fired, data
  console.log(1);
  console.log(2);

  // specify callback function (arrow function) as an argument to get todos
  // callback function convention: (error, data) => {}
  getTodos((error, data) => {
    console.log("callback fired");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  console.log(3);
  console.log(4);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AppKapitel4;
