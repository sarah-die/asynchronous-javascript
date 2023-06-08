import React from "react";
import "./App.css";

function AppKapitel9() {
    // fetch returns a promise -> also folgt resolve (wenn Daten geladen) oder reject (wenn Fehler)
    // response-object = wird von der fetch-API erstellt, wenn man Daten abruft
    // enthält jedoch nicht die eigentlichen Daten
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
            // resolve-case
            // zb bei Tippfehlern erhält man dennoch eine response
            // diese enthält bspw. den Status-Code
            console.log("resolved", response);
            return response.json(); // hier wird ein promise zurückgegeben, was reject oder resolved ist -> .then
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            // reject-case
            // reject passiert nur bei network-errors!
            console.log("rejected", error);
        });

    // Steps:
    // 1) fetch the data
    // 2) take response and return response.json() -> promise -> .then
    // 3) .then((data) => { data }) Zugriff auf eigentliche Daten

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}

export default AppKapitel9;
