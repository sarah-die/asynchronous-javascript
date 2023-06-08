import React from "react";
import "./App.css";

function AppKapitel5bis6() {
  const getTodos = (
    resource: string,
    callback: (error: string | undefined, data: any) => void
  ) => {
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

  getTodos("resource", (error, data) => {
    console.log("callback fired");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  // chapter 6: Callback hell, unüberschaubar, schwer zu pflegen
  // Code bewirkt, dass, nachdem json1 geladen worden ist, json2 geladen wird, ...
  // getTodos("json1.json", (error, data) => {
  //   console.log(data);
  //   getTodos("json2.json", (error, data) => {
  //     console.log(data);
  //     getTodos("json3.json", (error, data) => {
  //       console.log(data);
  //     });
  //   });
  // });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AppKapitel5bis6;
