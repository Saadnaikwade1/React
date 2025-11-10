import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    userName:"hitesh",
    age:21 
  }

  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-2xl m-2">Tailwind Test</h1>

   <Card someObj={myObj} userName="saad" btnText="Click me →"  />
   <Card userName="Naikwade" btnText="Click me →"/>
   
    </>
  );
}

export default App;