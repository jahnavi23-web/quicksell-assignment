import { useEffect, useRef, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Main() {
  const [state, setState] = useState({group: 1, order: 4});
  // const stateRef = useRef(state);
  let stateVar = state;

  // useEffect(() => {
  //   stateVar = state;
  // }, [])

  function handleStateChager(state) {
    // stateRef.current = state;
    setState(state);
    // stateRef.current = state;
    stateVar = state;
  }

  return (
    <div>
      <TopBar handler={handleStateChager}  />
      <Dashboard state={state} />
    </div>
  );
}

export default Main;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
