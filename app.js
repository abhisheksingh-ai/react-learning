import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    {id: "parent"},[
        React.createElement("div", { id: "child1" }, [
            React.createElement("h1", { id: "child1a" }, "I am h1"),
            React.createElement("h2", { id: "child1a" }, "I am h2")
        ]),
        React.createElement("div", { id: "child2" }, [
            React.createElement("h1", { id: "child1b" }, "I am h1"),
            React.createElement("h2", { id: "child1b" }, "I am h2")
        ])
    ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);