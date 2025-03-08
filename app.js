import React from "react";
import ReactDOM from "react-dom/client"

//functional component
const Title = () => (
    <h1>Functional Component in React🚀</h1>
);

const Heading = () => (
    <>
        <Title />
        <h2>Functional component is just javascript functiona that return jsx</h2>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);