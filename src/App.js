import Guest from "./components/Guest";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";
// import "./App.css";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <div className="App">
    //   {isLoggedIn ? <Welcome name="Ahmed"/> : <Guest />}
    //   {!isLoggedIn && <Button name="Login" onClick={() => setIsLoggedIn(true)} />}    
    // </div>
    <div className="App">   
      <List />
    </div>
  )
}

export default App;
