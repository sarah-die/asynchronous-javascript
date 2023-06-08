import React from "react";
import "./App.css";

function AppKapitel8() {
  const getTodos = (resource: string) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject("Error getting resource.");
        }
      });

      // change url to my todos.json
      request.open("GET", resource);
      request.send();
    });
  };

  // getTodos is now returning a promise
  // this means we can use the .then-method

  // bei verschachtelten promises, muss nur einmal catch ausgeführt werden, um eventuelle Fehler abzufangen

  getTodos("https://jsonplaceholder.typicode.com/todos/")
    .then((data) => {
      console.log("Promise 1 resolved:", data);
      // dies führt dazu, dass dieser Teil ein promise returned. dh., dass .then verwendet werden kann
      return getTodos("https://jsonplaceholder.typicode.com/users/");
    })
    .then((data) => {
      console.log("Promise 2 resolved:", data);
      return getTodos("https://jsonplaceholder.typicode.com/todos/");
    })
    .then((data) => {
      console.log("Promise 3 resolved:", data);
    })
    .catch((err) => {
      console.log("promise rejected:", err);
    });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AppKapitel8;
