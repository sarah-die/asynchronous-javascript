import React from "react";

function AppKapitel1bis3() {
  // #2: Problem hieran ist, dass der readyState immer den state 4 erreichen wird, auch wenn es einen Fehler bei der API gibt
  // die request wird completen (stage 4), aber statt Daten wird ein Fehlercode übermittelt
  // Lösungsansatz: auch den status der request checken

  // request object
  const request = new XMLHttpRequest();

  // get information about the status from the request e.g. when it is ready
  // readystatechange fires, when there is a state change in the request
  // 0 = unsent, 1 = open(ed), 2 = headers_received/ send() has been called, 3 = (down)loading, 4 = done
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });

  // this is setting up the request. it is not making it
  // open(string: type of request, string: where we want to make the request to)
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AppKapitel1bis3;
