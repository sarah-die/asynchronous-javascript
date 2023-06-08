import React from "react";
import "./App.css";

function AppKapitel7() {
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
  getTodos("https://jsonplaceholder.typicode.com/todos/")
    .then((data) => {
      console.log("Promise resolved:", data);
    })
    .catch((err) => {
      console.log("promise rejected:", err);
    });

  // Promise Example

  // die Funktion hat eine promise als return

  // const getSomething = () => {
  //   return new Promise((resolve, reject) => {
  //     // hier network request: fetch something
  //     // bei Erfolg, werden die Daten übergeben
  //     resolve("some data");
  //     // bei Misserfolg wird die Fehlermeldung übergeben
  //     reject("some error");
  //   });
  // };

  // .then = wenn die Promise resolved, dann wird die Funktion da drin ausgeführt
  // wenn resolve, dann wird Funktion in then-Methode ausgeführt und diese Callback Funktion
  // bekommt die Daten aus der resolve-Funktion

  // getSomething().then(
  //   (data) => {
  //     console.log(data);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );

  // Alternativ: bei resolve then-Methode fires und die darin liegende Callback-Funktion
  // bei reject mit einem Fehler wird dieser mit der Catch-Methode abgefangen und dieser Callback wird ausgeführt

  // getSomething()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AppKapitel7;
