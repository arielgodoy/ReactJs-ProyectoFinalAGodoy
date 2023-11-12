// index.js
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Root = () => {
  useEffect(() => {    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  }, []); 

  return <div>Loading...</div>; 
};

ReactDOM.render(<Root />, document.getElementById("root"));
